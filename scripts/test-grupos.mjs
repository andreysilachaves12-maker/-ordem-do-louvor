import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import worker from '../worker/index.js';

const src=await readFile(new URL('../worker/index.js',import.meta.url),'utf8');
const fixos=['Adolescentes','Crianças','Jovens','Mocidade','Varões','Círculo de Oração'];
assert.ok(!src.includes('Não encontrou seu grupo?'),'O campo para digitar grupo deve sumir.');
assert.ok(!src.includes('adicionar-grupo-perfil'),'O botão de adicionar grupo deve sumir.');
assert.ok(!src.includes('novo-grupo-campo'),'O campo oculto de criação deve sumir.');
for(const nome of fixos) assert.ok(src.includes(nome),'Grupo ausente: '+nome);

const chamadas=[];
const env={
  DB:{
    prepare(sql){
      const instrucao={sql,args:[],bind(...args){this.args=args;return this;},
        async run(){chamadas.push({sql,args:this.args});return {meta:{changes:1}};}};
      return instrucao;
    },
    async batch(queries){for (const q of queries)await q.run();return queries.map(()=>({meta:{changes:1}}));}
  }
};
const base='https://ordem-do-louvor.andreysilachaves12.workers.dev';
function req(path,method='GET',payload) {
  return worker.fetch(new Request(base+path,{
    method,headers:payload?{'Content-Type':'application/json'}:{},
    body:payload?JSON.stringify(payload):undefined
  }),env,{waitUntil(){}});
}
const resultado=await req('/api/grupos');
assert.equal(resultado.status,200);
assert.deepEqual(await resultado.json(),fixos);

let r=await req('/api/perfil','POST',{nome:'Pessoa de teste',grupos:['Grupo inventado']});
assert.equal(r.status,400,'Cadastro de regente não deve aceitar grupo inventado.');
r=await req('/api/perfil','POST',{nome:'Pessoa de teste',grupos:['Varões','Círculo de Oração']});
assert.equal(r.status,200,'Cadastro deve aceitar os dois grupos pedidos.');
assert.equal((await r.json()).grupos.length,2);

r=await req('/api/musico/perfil','POST',{nome:'Músico de teste',instrumento:'Teclado',grupos:['Outro grupo inventado']});
assert.equal(r.status,400,'Cadastro de músico não deve aceitar grupo inventado.');
r=await req('/api/musico/perfil','POST',{nome:'Músico de teste',instrumento:'Teclado',grupos:['Jovens','Varões']});
assert.equal(r.status,200,'Cadastro deve aceitar grupos predefinidos.');
assert.equal((await r.json()).grupos.length,2);

assert.ok(!chamadas.some(x=>x.sql.includes('DELETE FROM hinos')),'Não pode apagar hinos.');
console.log('Teste OK: grupos fixos, cadastro regente/músico e bloqueio de novos grupos.');
