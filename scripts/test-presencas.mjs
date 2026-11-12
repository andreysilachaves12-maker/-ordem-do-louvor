import assert from 'node:assert/strict';
import worker from '../worker/index.js';

const DB = {
  perfis:new Map(), sessaoRegente:new Map(), musicos:new Map(), sessaoMusico:new Map(),
  ensaios:[], presencas:new Map(), hinos:[
    {id:1,perfil_id:'r1',grupo:'Jovens',data_louvor:'2099-02-10',modo:'vivo'}
  ],
  next:1
};
const env = {
  DB: {
    prepare(sql) {
      return {
        sql,args:[],
        bind(...args) {this.args=args;return this;},
        async first() {
          const a=this.args;
          if(sql.startsWith('SELECT p.id,p.nome,p.grupos FROM perfis')) {
            const sess=DB.sessaoRegente.get(a[0]);
            return sess && sess.expira>a[1] ? DB.perfis.get(sess.id) : null;
          }
          if(sql.startsWith('SELECT m.id,m.nome,m.instrumento,m.grupos FROM musicos')) {
            const sess=DB.sessaoMusico.get(a[0]);
            return sess && sess.expira>a[1] ? DB.musicos.get(sess.id) : null;
          }
          if(sql.startsWith('SELECT grupo,data,regente_id FROM ensaios'))
            return DB.ensaios.find(e=>e.id===a[0])||null;
          if(sql.startsWith('SELECT status FROM presencas_musicos'))
            return DB.presencas.get(a.slice(0,3).join('^'))||null;
          return null;
        },
        async all() {
          const a=this.args;
          if(sql.startsWith('SELECT id,grupo,data,horario,local,observacoes,regente_id FROM ensaios'))
            return {results:DB.ensaios.filter(e=>e.data>=a[0])};
          if(sql.startsWith('SELECT DISTINCT grupo,data_louvor FROM hinos'))
            return {results:DB.hinos.filter(h=>h.modo==='vivo'&&h.data_louvor>=a[0])
              .map(h=>({grupo:h.grupo,data_louvor:h.data_louvor}))};
          if(sql.startsWith('SELECT DISTINCT perfil_id FROM hinos'))
            return {results:DB.hinos.filter(h=>h.grupo===a[0]&&h.data_louvor===a[1]&&h.modo==='vivo')
              .map(h=>({perfil_id:h.perfil_id}))};
          if(sql.startsWith('SELECT tipo,referencia,status FROM presencas_musicos'))
            return {results:[...DB.presencas.entries()].filter(([k])=>k.startsWith(a[0]+'^'))
              .map(([k,v])=>({tipo:k.split('^')[1],referencia:k.split('^')[2],status:v.status}))};
          if(sql.startsWith('SELECT id,nome,instrumento,grupos FROM musicos'))
            return {results:[...DB.musicos.values()]};
          if(sql.startsWith('SELECT musico_id,tipo,referencia,status FROM presencas_musicos'))
            return {results:[...DB.presencas.entries()].map(([k,v])=>({
              musico_id:k.split('^')[0],tipo:k.split('^')[1],referencia:k.split('^')[2],status:v.status
            }))};
          return {results:[]};
        },
        async run() {
          const a=this.args;
          if(sql.startsWith('INSERT INTO perfis'))DB.perfis.set(a[0],{id:a[0],nome:a[1],grupos:a[2]});
          if(sql.startsWith('INSERT INTO perfil_sessoes'))DB.sessaoRegente.set(a[0],{id:a[1],expira:a[2]});
          if(sql.startsWith('INSERT INTO musicos'))DB.musicos.set(a[0],{id:a[0],nome:a[1],instrumento:a[2],grupos:a[3]});
          if(sql.startsWith('INSERT INTO musico_sessoes'))DB.sessaoMusico.set(a[0],{id:a[1],expira:a[2]});
          if(sql.startsWith('INSERT INTO ensaios')) {
            const id=DB.next++;
            DB.ensaios.push({id,regente_id:a[0],grupo:a[1],data:a[2],horario:a[3],local:a[4],observacoes:a[5]});
            return {meta:{changes:1,last_row_id:id}};
          }
          if(sql.startsWith('INSERT INTO presencas_musicos'))DB.presencas.set(a.slice(0,3).join('^'),{status:a[3]});
          if(sql.startsWith('DELETE FROM ensaios')) {
            const i=DB.ensaios.findIndex(e=>e.id===a[0]&&e.regente_id===a[1]);
            if(i<0)return {meta:{changes:0}};
            DB.ensaios.splice(i,1);
            return {meta:{changes:1}};
          }
          if(sql.startsWith('DELETE FROM presencas_musicos'))
            for(const k of DB.presencas.keys())if(k.includes('^ensaio^'+a[0]))DB.presencas.delete(k);
          return {meta:{changes:1}};
        }
      };
    },
    async batch(statements){return Promise.all(statements.map(s=>s.run()));}
  }
};
const base='https://ordem-do-louvor.andreysilachaves12.workers.dev';
async function req(path,method='GET',body,headers={}){
  const opts={method,headers};
  if(body!==undefined){opts.headers={'Content-Type':'application/json',...headers};opts.body=JSON.stringify(body);}
  return worker.fetch(new Request(base+path,opts),env,{});
}
const parse=async r=>({status:r.status,body:await r.json()});
let res=await req('/musicos');
assert.equal(res.status,200);
const html=await res.text();
assert.match(html,/Minha presença/);
assert.match(html,/Marcar ensaio/);
assert.match(html,/location.pathname === '\/musicos'/);

res=await req('/api/musico/perfil');
assert.equal(await res.json(),null);
const perfilMusico={nome:'Maria',instrumento:'Teclado',grupos:['Jovens']};
res=await req('/api/musico/perfil','POST',perfilMusico);
assert.equal(res.status,200);
const cookieMusico=res.headers.get('set-cookie').split(';')[0];
assert.match(cookieMusico,/__Host-louvor_musico=/);
res=await req('/api/musico/perfil','GET',undefined,{Cookie:cookieMusico});
assert.equal((await res.json()).nome,'Maria');
res=await req('/api/ensaios','POST',{grupo:'Jovens',data:'2099-02-01',horario:'20:00'});
assert.equal(res.status,401);
const perfilRegente={nome:'Regente teste',grupos:['Jovens']};
res=await req('/api/perfil','POST',perfilRegente);
assert.equal(res.status,200);
const cookieRegente=res.headers.get('set-cookie').split(';')[0];
res=await req('/api/ensaios','POST',{grupo:'Jovens',data:'2099-02-01',horario:'20:00',local:'Igreja',observacoes:'Levar instrumento'},{Cookie:cookieRegente});
assert.equal(res.status,201);
assert.equal((await res.json()).id,1);
res=await req('/api/ensaios','POST',{grupo:'Varões',data:'2099-02-01',horario:'20:00'},{Cookie:cookieRegente});
assert.equal(res.status,400);
res=await req('/api/musico/compromissos','GET',undefined,{Cookie:cookieMusico});
const compromissos=(await res.json()).compromissos;
assert.equal(compromissos.length,2);
assert.equal(compromissos[0].tipo,'ensaio');
assert.equal(compromissos[1].tipo,'culto');
res=await req('/api/regente/compromissos','GET',undefined,{Cookie:cookieRegente});
let eventos=await res.json();
assert.equal(eventos[0].confirmacoes[0].nome,'Maria');
assert.equal(eventos[0].confirmacoes[0].status,null);
res=await req('/api/musico/confirmar','POST',{tipo:'ensaio',referencia:'1',status:'sim'},{Cookie:cookieMusico});
assert.equal(res.status,200);
res=await req('/api/musico/confirmar','POST',{tipo:'ensaio',referencia:'1',status:'nao'},{Cookie:cookieMusico});
assert.equal(res.status,200);
res=await req('/api/musico/confirmar','POST',{tipo:'culto',referencia:'2099-02-10|Jovens',status:'sim'},{Cookie:cookieMusico});
assert.equal(res.status,200);
res=await req('/api/regente/compromissos','GET',undefined,{Cookie:cookieRegente});
eventos=await res.json();
assert.equal(eventos[0].confirmacoes[0].status,'nao');
assert.equal(eventos[1].confirmacoes[0].status,'sim');
res=await req('/api/ensaios/1','DELETE',undefined,{Cookie:cookieRegente});
assert.equal(res.status,200);
res=await req('/api/musico/compromissos','GET',undefined,{Cookie:cookieMusico});
assert.equal((await res.json()).compromissos.length,1);
console.log('Teste OK: cadastro, agenda de ensaios e cultos, respostas, painel do regente e exclusão.');
