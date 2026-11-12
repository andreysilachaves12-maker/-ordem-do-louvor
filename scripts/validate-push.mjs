import fs from 'node:fs';
import vm from 'node:vm';

const codigo = fs.readFileSync(new URL('../worker/index.js', import.meta.url), 'utf8');
const htmlFonte = codigo.match(/^const page = (`[\s\S]*?`);/);
if (!htmlFonte) throw new Error('A página principal não foi encontrada.');
const html = vm.runInNewContext('('+htmlFonte[1]+')');
const scriptPagina = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptPagina) throw new Error('JavaScript da página não encontrado.');
new vm.Script(scriptPagina[1], {filename:'pagina.js'});

const swFonte = codigo.match(/const pushServiceWorker = (`[\s\S]*?`);/);
if (!swFonte) throw new Error('Service worker de notificações não encontrado.');
new vm.Script(vm.runInNewContext('('+swFonte[1]+')'), {filename:'sw.js'});

for (const trecho of ['/api/push/config','/api/push/inscrever','/sw.js',
  "pushAvisar(env,'midia')", "pushAvisar(env,'regente'", "pushAvisar(env,'musicos')"]) {
  if (!codigo.includes(trecho)) throw new Error('Integração ausente: '+trecho);
}
console.log('Verificação de sintaxe e integração de notificações concluída.');
