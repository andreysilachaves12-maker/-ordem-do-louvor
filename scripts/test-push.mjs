import assert from 'node:assert/strict';
import worker from '../worker/index.js';

const registros = [];
let chaves = null;
const env = {
  ADMIN_PASSWORD: 'senha-de-teste',
  DB: {
    prepare(sql) {
      return {
        sql,args:[],
        bind(...args) { this.args = args; return this; },
        async first() {
          if (sql.includes('SELECT publica, privada FROM push_chaves')) return chaves;
          if (sql.includes('SELECT p.id,p.nome,p.grupos FROM perfis')) {
            return {id:'regente-1',nome:'Regente teste',grupos:'["Jovens"]'};
          }
          if (sql.includes('SELECT perfil_id, recebido FROM hinos')) return {perfil_id:'regente-1',recebido:0};
          return null;
        },
        async run() {
          if (sql.includes('INSERT OR IGNORE INTO push_chaves')) {
            chaves ??= {publica:this.args[0],privada:this.args[1]};
          }
          if (sql.includes('INSERT OR REPLACE INTO push_dispositivos')) {
            const [endpoint,papel,perfil_id] = this.args;
            const i = registros.findIndex(r=>r.endpoint===endpoint && r.papel===papel && r.perfil_id===perfil_id);
            if (i !== -1) registros.splice(i,1);
            registros.push({endpoint,papel,perfil_id});
          }
          if (sql.includes('DELETE FROM push_dispositivos')) {
            const i = registros.findIndex(r=>r.endpoint===this.args[0]);
            if (i!==-1) registros.splice(i,1);
          }
          return {meta:{changes:1}};
        },
        async all() {
          if (sql.includes('SELECT DISTINCT endpoint FROM push_dispositivos')) {
            return {results:registros.filter(r=>r.papel===this.args[0] && (this.args.length===1 || r.perfil_id===this.args[1]))};
          }
          return {results:[]};
        }
      };
    },
    async batch(statements) {
      await Promise.all(statements.map(s=>s.run()));
      return statements.map((_,i)=>({meta:{changes:1,last_row_id:i+7}}));
    }
  }
};
const aguardando = [];
const ctx = {waitUntil(promise) {aguardando.push(promise);}};
const base = 'https://ordem-do-louvor.andreysilachaves12.workers.dev';
function fazer(path,init={}) {return worker.fetch(new Request(base+path,init),env,ctx);}
const json = (path,obj,headers={}) => fazer(path,{method:'POST',headers:{'Content-Type':'application/json',...headers},body:JSON.stringify(obj)});

const sw = await fazer('/sw.js');
assert.equal(sw.status,200);
assert.match(await sw.text(),/showNotification/);
const manifesto = await fazer('/manifest.webmanifest');
assert.equal(manifesto.status,200);
assert.equal((await manifesto.json()).short_name,'Louvores');

const cfg = await fazer('/api/push/config');
assert.equal(cfg.status,200);
const {chavePublica} = await cfg.json();
assert.ok(chavePublica.length > 75);
assert.ok(chaves.privada.includes('d'));

const assinatura = {endpoint:'https://fcm.googleapis.com/fcm/send/teste123',keys:{auth:'abc',p256dh:'def'}};
assert.equal((await json('/api/push/inscrever',{papel:'musicos',assinatura:{...assinatura,endpoint:'https://evil.example/push'}})).status,400);
assert.equal((await json('/api/push/inscrever',{papel:'regente',assinatura})).status,401);
assert.equal((await json('/api/push/inscrever',{papel:'midia',assinatura},{'X-Repertorio-Senha':'errada'})).status,403);

assert.equal((await json('/api/push/inscrever',{papel:'musicos',assinatura})).status,200);
assert.equal((await json('/api/push/inscrever',{papel:'midia',assinatura},{'X-Repertorio-Senha':'senha-de-teste'})).status,200);
const cookie = '__Host-louvor_perfil='+'a'.repeat(64);
assert.equal((await json('/api/push/inscrever',{papel:'regente',assinatura},{Cookie:cookie})).status,200);
assert.equal(registros.length,3);

const originalFetch = globalThis.fetch;
const enviados = [];
globalThis.fetch = async (url,options) => {
  enviados.push({url:String(url),options});
  return new Response('',{status:201});
};
try {
  const hino = await json('/api/hinos',{
    grupo:'Jovens',hino:'Hino de teste',youtube:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    modo:'vivo',data_louvor:'2099-01-01'
  },{Cookie:cookie});
  assert.equal(hino.status,201);
  await Promise.all(aguardando.splice(0));
  assert.equal(enviados.length,2);
  for (const envio of enviados) {
    assert.ok(envio.options.headers.Authorization.startsWith('vapid t='));
    assert.equal(envio.options.headers.TTL,'3600');
  }

  const confirmado = await fazer('/api/hinos/7/recebido',{
    method:'POST',headers:{'X-Repertorio-Senha':'senha-de-teste'}
  });
  assert.equal(confirmado.status,200);
  await Promise.all(aguardando.splice(0));
  assert.equal(enviados.length,3);
} finally {
  globalThis.fetch = originalFetch;
}
console.log('TESTE OK: permissões, inscrição, envio e confirmação com Web Push simulado.');
