import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import worker from '../worker/index.js';

const codigo = await readFile(new URL('../worker/index.js',import.meta.url),'utf8');
const iniciais = ['Adolescentes','Crianças','Jovens','Mocidade','Varões','Círculo de Oração'];
assert.ok(!codigo.includes('Não encontrou seu grupo?'));
assert.ok(!codigo.includes('adicionar-grupo-perfil'));
assert.ok(codigo.includes('id="adm-grupos"'));
assert.ok(codigo.includes('Adicionar grupo'));
assert.ok(codigo.includes('Apagar'));

const registros=new Map();
const perfis=new Map();
const sessoes=new Map();
const musicos=new Map();
const sessoesMusicos=new Map();
const comandos=[];
function key(nome){return nome.toLocaleLowerCase('pt-BR');}
const env={
 ADMIN_PASSWORD:'senha-de-teste',
 DB:{
  prepare(sql) {
   const st={sql,args:[],bind(...args){this.args=args;return this;},
    async run(){
     const a=this.args;comandos.push({sql,args:a});
     if(sql.startsWith('INSERT OR IGNORE INTO grupos_cadastro')) {
      if(!registros.has(key(a[0])))registros.set(key(a[0]),{nome:a[0],ativo:1});
      return {meta:{changes:1}};
     }
     if(sql.startsWith('INSERT INTO grupos_cadastro')) {
      if(registros.has(key(a[0])))throw Error('Duplicata');
      registros.set(key(a[0]),{nome:a[0],ativo:1});
      return {meta:{changes:1}};
     }
     if(sql.startsWith('UPDATE grupos_cadastro SET ativo = 1')) {
      const registro=registros.get(key(a[0]));
      if(registro){registro.ativo=1;return {meta:{changes:1}};}
      return {meta:{changes:0}};
     }
     if(sql.startsWith('UPDATE grupos_cadastro SET ativo = 0')) {
      const registro=registros.get(key(a[0]));
      if(registro?.ativo===1){registro.ativo=0;return {meta:{changes:1}};}
      return {meta:{changes:0}};
     }
     if(sql.startsWith('INSERT INTO perfis'))perfis.set(a[0],{id:a[0],nome:a[1],grupos:a[2]});
     if(sql.startsWith('INSERT INTO perfil_sessoes'))sessoes.set(a[0],{id:a[1],expira:a[2]});
     if(sql.startsWith('INSERT INTO musicos'))musicos.set(a[0],{id:a[0],nome:a[1],instrumento:a[2],grupos:a[3]});
     if(sql.startsWith('INSERT INTO musico_sessoes'))sessoesMusicos.set(a[0],{id:a[1],expira:a[2]});
     return {meta:{changes:1}};
    },
    async first() {
     const a=this.args;
     if(sql.startsWith('SELECT nome,ativo FROM grupos_cadastro'))return registros.get(key(a[0]))||null;
     if(sql.startsWith('SELECT nome FROM grupos_cadastro WHERE nome')) {
      const registro=registros.get(key(a[0]));
      return registro?.ativo?{nome:registro.nome}:null;
     }
     if(sql.startsWith('SELECT p.id,p.nome,p.grupos FROM perfis')) {
      const sess=sessoes.get(a[0]);
      return sess?.expira>a[1]?perfis.get(sess.id):null;
     }
     if(sql.startsWith('SELECT m.id,m.nome,m.instrumento,m.grupos FROM musicos')) {
      const sess=sessoesMusicos.get(a[0]);
      return sess?.expira>a[1]?musicos.get(sess.id):null;
     }
     return null;
    },
    async all() {
     if(sql.startsWith('SELECT nome FROM grupos_cadastro WHERE ativo = 1')) {
      return {results:[...registros.values()].filter(x=>x.ativo).map(x=>({nome:x.nome})).sort((a,b)=>a.nome.localeCompare(b.nome,'pt-BR'))};
     }
     return {results:[]};
    }
   };
   return st;
  },
  async batch(statements){return Promise.all(statements.map(x=>x.run()));}
 }
};
const base='https://ordem-do-louvor.andreysilachaves12.workers.dev';
async function requisitar(path,method='GET',dados,headers={}){
 const req=new Request(base+path,{
  method,headers:dados===undefined?headers:{'Content-Type':'application/json',...headers},
  body:dados===undefined?undefined:JSON.stringify(dados)
 });
 return worker.fetch(req,env,{waitUntil(){}});
}
const adm={'X-Repertorio-Senha':'senha-de-teste'};
const errada={'X-Repertorio-Senha':'errada'};
const lista=async()=> (await (await requisitar('/api/grupos')).json());

let grupos=await lista();
assert.deepEqual(new Set(grupos),new Set(iniciais),'Os seis grupos precisam existir.');
assert.equal((await requisitar('/api/adm/grupos')).status,403,'Lista do ADM exige senha.');
assert.equal((await requisitar('/api/adm/grupos','POST',{nome:'Coral'},errada)).status,403);
assert.equal((await requisitar('/api/adm/grupos','DELETE',{nome:'Varões'})).status,403);

assert.equal((await requisitar('/api/adm/grupos','POST',{nome:'Coral'},adm)).status,201);
assert.equal((await requisitar('/api/adm/grupos','POST',{nome:'coral'},adm)).status,409,'Não pode duplicar grupo.');
assert.ok((await lista()).includes('Coral'));
assert.equal((await requisitar('/api/adm/grupos','DELETE',{nome:'Varões'},adm)).status,200);
assert.equal((await requisitar('/api/adm/grupos','DELETE',{nome:'Varões'},adm)).status,404);
assert.ok(!(await lista()).includes('Varões'),'Grupo apagado deve desaparecer.');
assert.equal((await requisitar('/api/adm/grupos','POST',{nome:'Varões'},adm)).status,201,'ADM pode reativar grupo.');
assert.ok((await lista()).includes('Varões'),'Grupo reativado deve aparecer.');

assert.equal((await requisitar('/api/adm/grupos','POST',{nome:'\u0000grupo'},adm)).status,400);
assert.equal((await requisitar('/api/perfil','POST',{nome:'Teste',grupos:['Inventado']})).status,400);
let resposta=await requisitar('/api/perfil','POST',{nome:'Regente',grupos:['Coral','Círculo de Oração']});
assert.equal(resposta.status,200);
const cookieRegente=resposta.headers.get('set-cookie').split(';')[0];
assert.deepEqual((await resposta.json()).grupos,['Coral','Círculo de Oração']);

assert.equal((await requisitar('/api/musico/perfil','POST',{nome:'Músico',instrumento:'Teclado',grupos:['Inventado']})).status,400);
resposta=await requisitar('/api/musico/perfil','POST',{nome:'Músico',instrumento:'Teclado',grupos:['Coral']});
assert.equal(resposta.status,200);
const cookieMusico=resposta.headers.get('set-cookie').split(';')[0];

assert.equal((await requisitar('/api/adm/grupos','DELETE',{nome:'Coral'},adm)).status,200);
assert.ok(!(await lista()).includes('Coral'));
resposta=await requisitar('/api/perfil','POST',{nome:'Regente',grupos:['Coral']},{Cookie:cookieRegente});
assert.equal(resposta.status,400,'Grupo apagado não pode ser usado mesmo pelo perfil antigo.');
resposta=await requisitar('/api/musico/perfil','POST',{nome:'Músico',instrumento:'Teclado',grupos:['Coral']},{Cookie:cookieMusico});
assert.equal(resposta.status,400,'Grupo apagado não pode ser reutilizado pelo músico.');

assert.ok(!comandos.some(c=>c.sql.startsWith('DELETE FROM hinos')),'Nunca apagar os hinos ao excluir um grupo.');
console.log('OK: ADM cadastra/exclui/reativa, senha obrigatória, perfis não podem cadastrar grupo apagado, hinos preservados.');
