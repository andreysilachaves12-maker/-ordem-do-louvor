const page = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ordem do Louvor</title>
<style>
:root{color-scheme:dark;font:16px system-ui,sans-serif;background:#111729;color:#f7f4ec}*{box-sizing:border-box}[hidden]{display:none!important}body{margin:0}header{background:radial-gradient(ellipse at right,#313864,#191f38 66%);border-bottom:1px solid #424966;padding:3rem 1.2rem 5rem}header>div,main{max-width:700px;margin:auto}.marca,.secao{color:#ffce82;font-size:.75rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase}h1{font-size:clamp(2.6rem,9vw,4rem);line-height:1;margin:.55rem 0;font-family:Georgia,serif;font-weight:normal}p{color:#c4cae2;line-height:1.5}header p{margin:.8rem 0 0}main{position:relative;margin:-2.25rem auto 3rem;padding:0 1rem}.card,nav,article{border:1px solid #404967;background:#1b233b;border-radius:18px;padding:1.25rem}nav{display:flex;padding:.35rem;gap:.35rem;margin-bottom:1rem}nav button{flex:1;border:0;padding:.75rem .35rem;min-width:0;font-size:.9rem}textarea{resize:vertical}.orientacoes{white-space:pre-wrap;overflow-wrap:anywhere}button,a{font:inherit}button,.acoes .cifra{cursor:pointer;padding:.8rem 1rem;border-radius:10px;border:1px solid #606c91;background:#293453;color:#fff;font-weight:700}button[aria-pressed=true],.primary{background:#ffce82;color:#221b15;border-color:#ffce82}button:disabled{opacity:.65;cursor:wait}h2{margin:.35rem 0 .5rem}label,legend{font-weight:700}label.campo{display:block;margin-top:1rem}select,textarea,input:not([type=radio]):not([type=checkbox]){display:block;width:100%;margin-top:.4rem;background:#141b30;color:#fff;border:1px solid #657094;border-radius:9px;padding:.78rem;font:inherit}fieldset{margin:1.15rem 0;padding:.7rem;border:1px solid #606c91;border-radius:10px;display:flex;flex-wrap:wrap;gap:1rem}fieldset label{padding:.35rem;cursor:pointer}input[type=radio]{accent-color:#ffce82}.primary{width:100%}#aviso{min-height:1.5em;color:#ffda9e}article{margin-top:.75rem;padding:1rem;background:#151c31}article h3{margin:.35rem 0;font-size:1.3rem;overflow-wrap:anywhere}.grupo{margin:.35rem 0;color:#c4cae2;overflow-wrap:anywhere}.acoes{display:flex;align-items:center;flex-wrap:wrap;gap:.75rem;margin-top:.75rem}.acoes a{color:#ffda9e}.acoes .cifra{text-decoration:none}.barra{display:flex;align-items:center;justify-content:space-between;gap:.5rem}.status{color:#b8e6ca;font-weight:700}.status-pendente{color:#ffda9e;font-weight:700}.vazio{padding:1rem;border:1px dashed #657094;border-radius:12px}:focus-visible{outline:3px solid #ffce82;outline-offset:3px}
.acoes .excluir{background:transparent;color:#ffb8b8;border-color:#915d6e}
#player,#confirmar-exclusao,#acesso{width:min(92vw,680px);max-height:90dvh;border:1px solid #606c91;border-radius:18px;background:#1b233b;color:#f7f4ec;padding:1rem}#player::backdrop,#confirmar-exclusao::backdrop,#acesso::backdrop{background:#080c18cc}#player-video iframe{display:block;width:100%;aspect-ratio:16/9;min-height:200px;border:0;margin-top:1rem}
</style></head><body>
<header><div><div class="marca">♫ &nbsp; Equipe do culto</div><h1>Ordem do Louvor</h1><p>O repertório da igreja em um só lugar.</p></div></header>
<main><nav aria-label="Área de trabalho"><button id="aba-regente" aria-pressed="true">Regente</button><button id="aba-musicos" aria-pressed="false">Músicos</button><button id="aba-midia" aria-pressed="false">Mídia</button><button id="aba-adm" aria-pressed="false">ADM</button></nav>
<section class="card" id="regente"><div class="secao">Cadastro</div><div id="conta-entrada"><h2>Cadastro do regente</h2><p>Informe seu nome e marque os grupos que você dirige. O cadastro fica salvo neste navegador, sem senha.</p><form id="form-conta"><label class="campo">Nome do regente<input name="nome" required maxlength="100" autocomplete="name" placeholder="Seu nome"></label><fieldset id="grupos-perfil"><legend>De quais grupos você é regente?</legend></fieldset><div class="acoes"><label class="campo">Não encontrou seu grupo?<input id="novo-grupo-perfil" maxlength="100" placeholder="Nome do novo grupo"></label><button id="adicionar-grupo-perfil" type="button">Adicionar grupo</button></div><p id="conta-erro" role="status"></p><button class="primary" type="submit">Salvar cadastro</button><p><button id="cancelar-perfil" type="button" hidden>Cancelar</button></p></form></div><div id="conta-conteudo" hidden><div class="barra"><p id="conta-nome"></p><button id="editar-perfil" type="button">Alterar cadastro</button></div><h2>Enviar um hino</h2><form id="form">
<label class="campo">Nome do grupo<select name="grupo" id="grupo" required><option value="">Selecione o grupo</option></select></label><label class="campo" id="novo-grupo-campo" hidden>Novo grupo<input id="novo-grupo" maxlength="100" placeholder="Digite o nome do grupo"></label>
<label class="campo">Nome do hino exatamente como está no YouTube<input name="hino" maxlength="150" placeholder="Copie o título do hino no YouTube" required></label>
<label class="campo">Cantor ou ministério (opcional)<input name="cantor" maxlength="150" placeholder="Artista da versão escolhida"></label>
<label class="campo">Link do YouTube<input name="youtube" type="url" maxlength="2048" placeholder="https://youtu.be/…" required></label>
<label class="campo">Data do louvor<input name="data_louvor" type="date" min="0001-01-01" max="9999-12-31" required></label>
<fieldset><legend>Como será tocado?</legend><label><input required type="radio" name="modo" value="vivo"> Ao vivo com os músicos</label><label><input required type="radio" name="modo" value="audio"> Áudio no computador</label></fieldset>
<label class="campo">Tom e orientações (opcional)<textarea name="orientacoes" maxlength="1000" rows="3" placeholder="Ex.: Tom de Ré, começar pelo refrão"></textarea></label><br>
<button class="primary" type="submit">Enviar para a mídia</button></form><hr><div class="barra"><h2>Meus envios</h2><button id="atualizar-envios" type="button">Atualizar status</button></div><p>Acompanhe quando a equipe de mídia confirmar o recebimento dos seus hinos.</p><div id="meus-envios" aria-live="polite"></div></div></section>
<section class="card" id="midia" hidden><div class="secao" id="secao-lista">Equipe de mídia</div><div class="barra"><h2 id="titulo-lista">Hinos recebidos</h2><button id="atualizar">Atualizar</button></div><label class="campo">Data do culto<input id="filtro-data" type="date"></label><p><button id="todas-datas">Próximos cultos</button></p><div id="fila"></div></section>
<p id="aviso" role="status"></p></main>
<dialog id="player" aria-labelledby="player-titulo">
<div class="barra"><h2 id="player-titulo"></h2><form method="dialog"><button>Fechar</button></form></div>
<div id="player-video"></div>
<div class="acoes"><a id="player-link" target="_blank" rel="noopener">Abrir no YouTube</a></div>
<p>Se o vídeo estiver indisponível aqui, abra pelo YouTube.</p>
</dialog>
<dialog id="acesso" aria-labelledby="acesso-titulo">
<form id="form-acesso">
<h2 id="acesso-titulo">Entrar como ADM</h2>
<label class="campo">Senha de acesso<input name="senha" type="password" inputmode="numeric" autocomplete="current-password" required maxlength="128"></label>
<p id="acesso-erro" role="status"></p>
<div class="acoes"><button type="button" id="cancelar-acesso">Cancelar</button><button type="submit">Entrar</button></div>
</form>
</dialog>
<dialog id="confirmar-exclusao" aria-labelledby="exclusao-titulo">
<form id="form-exclusao">
<h2 id="exclusao-titulo">Excluir hino</h2>
<p id="exclusao-hino"></p>

<p id="exclusao-erro" role="status"></p>
<div class="acoes"><button type="button" id="cancelar-exclusao">Cancelar</button><button type="submit" class="excluir">Excluir hino</button></div>
</form>
</dialog>
<script>
const el = id => document.getElementById(id);
const aviso = el('aviso');
const form = el('form');
const midia = el('midia');
const modo = {vivo:'Ao vivo com os músicos',audio:'Áudio no computador'};
const player = el('player');
const playerVideo = el('player-video');
player.addEventListener('close', () => playerVideo.replaceChildren());

function abrirVideo(hino) {
  const url = new URL(hino.youtube);
  const id = url.searchParams.get('v');
  el('player-titulo').textContent = hino.hino;
  el('player-link').href = hino.youtube;
  const video = document.createElement('iframe');
  video.title = hino.hino;
  video.referrerPolicy = 'strict-origin-when-cross-origin';
  video.allow = 'encrypted-media; picture-in-picture; fullscreen';
  video.allowFullscreen = true;
  video.src = 'https://www.youtube.com/embed/' + encodeURIComponent(id) + '?playsinline=1';
  playerVideo.replaceChildren(video);
  player.showModal();
}

const acesso = el('acesso');
const formAcesso = el('form-acesso');
const erroAcesso = el('acesso-erro');
const entrar = formAcesso.querySelector('button[type=submit]');
let abaAtual = 'regente';
let abaSolicitada;
let senhaAcesso = null;

function pedirAcesso(aba) {
  if (aba === abaAtual || acesso.open || entrar.disabled) return;
  abaSolicitada = aba;
  el('acesso-titulo').textContent = aba === 'adm' ? 'Entrar como ADM' : aba === 'musicos' ? 'Acessar músicos' : 'Acessar a mídia';
  erroAcesso.textContent = '';
  formAcesso.reset();
  acesso.showModal();
}
el('aba-adm').onclick = () => pedirAcesso('adm');
el('aba-musicos').onclick = () => abrir('musicos');
el('aba-midia').onclick = () => pedirAcesso('midia');
el('cancelar-acesso').onclick = () => acesso.close();
acesso.addEventListener('close', () => formAcesso.reset());
formAcesso.onsubmit = async event => {
  event.preventDefault();
  if (entrar.disabled) return;
  const senha = new FormData(formAcesso).get('senha').replace(/\\s/g, '');
  entrar.disabled = true;
  erroAcesso.textContent = '';
  try {
    await api('/api/adm/login', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({senha})
    });
    if (!acesso.open) return;
    acesso.close();
    abrir(abaSolicitada, senha);
  } catch (erro) {
    erroAcesso.textContent = erro.message;
  } finally {
    entrar.disabled = false;
  }
};

const exclusao = el('confirmar-exclusao');
const formExclusao = el('form-exclusao');
const erroExclusao = el('exclusao-erro');
let hinoParaExcluir;
let excluindo = false;

el('cancelar-exclusao').onclick = () => exclusao.close();
exclusao.addEventListener('cancel', event => {
  if (excluindo) event.preventDefault();
});
formExclusao.onsubmit = async event => {
  event.preventDefault();
  if (excluindo) return;
  const {id} = hinoParaExcluir;
  const senha = senhaAcesso;
  const botoes = formExclusao.querySelectorAll('button');
  excluindo = true;
  botoes.forEach(botao => botao.disabled = true);
  erroExclusao.textContent = '';
  try {
    await api('/api/hinos/' + id,{
      method:'DELETE',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({senha})
    });
    exclusao.close();
    for (const card of el('fila').children) {
      if (card.dataset.hinoId === String(id)) {
        card.remove();
        break;
      }
    }
    await carregar();
  } catch (erro) {
    erroExclusao.textContent = erro.message;
  } finally {
    excluindo = false;
    botoes.forEach(botao => botao.disabled = false);
  }
};

let revisao = 0;
async function api(path, options) {
  const response = await fetch(path, options);
  const result = await response.json();
  if (!response.ok) throw new Error(result.erro || 'Não foi possível concluir.');
  return result;
}
function add(parent, tag, message, className) {
  const node = document.createElement(tag);
  node.textContent = message;
  if (className) node.className = className;
  parent.append(node);
  return node;
}
async function carregar(silencioso = false) {
  if (senhaAcesso === null && abaAtual !== 'musicos') return;
  const pedido = ++revisao;
  try {
    const hinos = await api((abaAtual === 'musicos' ? '/api/musicos' : '/api/hinos') + (el('filtro-data').value ? '?data=' + encodeURIComponent(el('filtro-data').value) : ''), abaAtual === 'musicos' ? {} : {headers:{'X-Repertorio-Senha':senhaAcesso}});
    if (pedido !== revisao || midia.hidden) return;
    const fila = el('fila');
    const fragmento = document.createDocumentFragment();
    if (!hinos.length) add(fragmento,'p','Nenhum hino encontrado para este período.','vazio');
    for (const hino of hinos) {
      const card = add(fragmento,'article','');
      card.dataset.hinoId = hino.id;
      add(card,'div',modo[hino.modo],'secao');
      add(card,'h3',hino.hino);
      add(card,'p',hino.grupo,'grupo');
      add(card,'p','Regente: ' + (hino.regente_nome || 'Não informado'),'grupo');
      if (hino.data_louvor) {
        const data = add(card,'time','Será tocado em: ' + hino.data_louvor.split('-').reverse().join('/'),'grupo');
        data.dateTime = hino.data_louvor;
      } else {
        add(card,'p','Data a definir','grupo');
      }
      if (hino.cantor) add(card,'p','Cantor: ' + hino.cantor,'grupo');
      if (hino.orientacoes) add(card,'p','Tom e orientações: ' + hino.orientacoes,'orientacoes');
      const acoes = add(card,'div','','acoes');
      const tocar = add(acoes,'button','Tocar hino');
      tocar.onclick = () => abrirVideo(hino);
      const youtube = add(acoes,'a','Abrir no YouTube','cifra');
      youtube.href = hino.youtube;
      youtube.target = '_blank';
      youtube.rel = 'noopener noreferrer';
      const cifra = add(acoes,'a','Buscar cifra','cifra');
      const busca = new URL('https://www.bing.com/search');
      busca.searchParams.set('q', hino.hino + ' ' + (hino.cantor || '') + ' cifra');
      cifra.href = busca.href;
      cifra.rel = 'noreferrer';
      if (abaAtual === 'midia') {
        const letra = add(acoes,'a','Buscar letra','cifra');
        const buscaLetra = new URL('https://www.bing.com/search');
        buscaLetra.searchParams.set('q', hino.hino + ' ' + (hino.cantor || '') + ' letra');
        letra.href = buscaLetra.href;
        letra.rel = 'noreferrer';
      }
      if (hino.recebido) add(acoes,'span','Confirmado pela mídia','status');
      else if (abaAtual !== 'musicos') {
        const botao = add(acoes,'button','Confirmar recebimento');
        botao.onclick = async () => {
          botao.disabled = true;
          try {
            await api('/api/hinos/' + hino.id + '/recebido',{method:'POST',headers:{'X-Repertorio-Senha':senhaAcesso}});
            await carregar();
          } catch (erro) {
            aviso.textContent = erro.message;
            botao.disabled = false;
          }
        };
      }
      if (abaAtual === 'adm') {
        const excluir = add(acoes,'button','Excluir hino','excluir');
        excluir.onclick = () => {
          hinoParaExcluir = hino;
          erroExclusao.textContent = '';
          el('exclusao-hino').textContent = 'Excluir “' + hino.hino + '” da lista?';
          exclusao.showModal();
        };
      }
    }
    if (!silencioso || fila.dataset.atual !== JSON.stringify(hinos)) {
      fila.replaceChildren(fragmento);
      fila.dataset.atual = JSON.stringify(hinos);
    }
    if (!silencioso) aviso.textContent = '';
  } catch (erro) {
    if (pedido === revisao && !silencioso) aviso.textContent = erro.message;
  }
}
function abrir(aba, senha = null) {
  abaAtual = aba;
  senhaAcesso = senha;
  revisao++;
  const adm = aba === 'adm';
  el('regente').hidden = aba !== 'regente';
  midia.hidden = aba === 'regente';
  el('secao-lista').textContent = adm ? 'Administração' : aba === 'musicos' ? 'Equipe de músicos' : 'Equipe de mídia';
  el('titulo-lista').textContent = adm ? 'Gerenciar hinos' : 'Hinos recebidos';
  for (const nome of ['regente','midia','musicos','adm']) {
    el('aba-' + nome).setAttribute('aria-pressed', nome === aba);
  }
  el('fila').replaceChildren();
  delete el('fila').dataset.atual;
  aviso.textContent = '';
  if (!midia.hidden) carregar();
  else if (perfilAtual) mostrarEnvios();
}
el('aba-regente').onclick = () => abrir('regente');
el('filtro-data').onchange = () => carregar();
el('todas-datas').onclick = () => {el('filtro-data').value = ''; carregar();};
el('atualizar').onclick = () => carregar();
setInterval(() => {if (!midia.hidden && !document.hidden) carregar(true);},15000);
setInterval(() => {if (el('regente').hidden === false && !document.hidden && perfilAtual) mostrarEnvios();},15000);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && !el('regente').hidden && perfilAtual) mostrarEnvios();
});
el('atualizar-envios').onclick = () => mostrarEnvios();
form.onsubmit = async event => {
  event.preventDefault();
  const botao = form.querySelector('button');
  botao.disabled = true;
  aviso.textContent = 'Enviando hino…';
  try {
    const dados = Object.fromEntries(new FormData(form));
    if (dados.grupo === '__novo__') dados.grupo = el('novo-grupo').value.trim();
    const resultado = await api('/api/hinos',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(dados)});
    await mostrarEnvios();
    form.reset();
    await carregarGrupos(dados.grupo);
    form.elements.data_louvor.value = dados.data_louvor;
    aviso.textContent = resultado.data_passada
      ? 'Hino salvo. Como a data já passou, ele fica fora da lista da mídia.'
      : 'Hino enviado. Ele já está na fila da mídia.';
    if (!midia.hidden) carregar(true);
  } catch (erro) {
    aviso.textContent = erro.message;
  } finally {
    botao.disabled = false;
  }
};
const gruposPadrao = ['Jovens','Crianças','Adolescentes','Mocidade'];
let todosGrupos = [...gruposPadrao];
let perfilAtual = null;
let revisaoConta = 0;
function preencherGrupoHino(selecionado = '') {
  const select = el('grupo'); select.replaceChildren();
  const vazio = add(select,'option','Selecione o grupo'); vazio.value = '';
  const grupos = perfilAtual?.grupos || [];
  for (const nome of grupos) {const opt = add(select,'option',nome); opt.value = nome;}
  select.value = grupos.includes(selecionado) ? selecionado : grupos.length === 1 ? grupos[0] : '';
  el('novo-grupo-campo').hidden = true;
  el('novo-grupo').required = false;
}
function desenharGruposCadastro(selecionados = perfilAtual?.grupos || []) {
  const campo = el('grupos-perfil'); campo.replaceChildren();
  add(campo,'legend','De quais grupos você é regente?');
  const nomes = [...new Set([...todosGrupos,...selecionados])].sort((a,b) => a.localeCompare(b,'pt-BR'));
  for (const nome of nomes) {
    const label = add(campo,'label','');
    const input = document.createElement('input'); input.type = 'checkbox'; input.name = 'grupos'; input.value = nome; input.checked = selecionados.includes(nome);
    label.append(input,document.createTextNode(' ' + nome));
  }
}
async function carregarGrupos(selecionado = '') {
  try {todosGrupos = [...new Set([...gruposPadrao,...await api('/api/grupos')])];}
  catch {el('conta-erro').textContent = 'Não foi possível carregar os grupos. Você pode adicionar o nome abaixo.';}
  preencherGrupoHino(selecionado);
  desenharGruposCadastro();
}
el('adicionar-grupo-perfil').onclick = () => {
  const input = el('novo-grupo-perfil'); const nome = input.value.trim();
  if (!nome) {input.focus(); return;}
  const selecionados = new FormData(el('form-conta')).getAll('grupos');
  const existente = todosGrupos.find(g => g.toLocaleLowerCase('pt-BR') === nome.toLocaleLowerCase('pt-BR'));
  todosGrupos.push(existente || nome); selecionados.push(existente || nome);
  desenharGruposCadastro(selecionados); input.value = '';
};
function exibirPerfil() {
  revisaoConta++;
  el('conta-entrada').hidden = !!perfilAtual;
  el('conta-conteudo').hidden = !perfilAtual;
  el('cancelar-perfil').hidden = !perfilAtual;
  el('conta-nome').textContent = perfilAtual ? 'Regente: ' + perfilAtual.nome : '';
  el('form-conta').elements.nome.value = perfilAtual?.nome || '';
  preencherGrupoHino(); desenharGruposCadastro();
  if (perfilAtual) mostrarEnvios();
}
el('editar-perfil').onclick = () => {
  el('conta-entrada').hidden = false; el('conta-conteudo').hidden = true;
  el('form-conta').elements.nome.value = perfilAtual.nome;
  desenharGruposCadastro(); el('conta-erro').textContent = '';
};
el('cancelar-perfil').onclick = exibirPerfil;
el('form-conta').onsubmit = async event => {
  event.preventDefault();
  const botao = el('form-conta').querySelector('button[type=submit]');
  if (botao.disabled) return;
  const dados = new FormData(el('form-conta'));
  const grupos = dados.getAll('grupos');
  if (!grupos.length) {el('conta-erro').textContent = 'Selecione pelo menos um grupo.'; return;}
  botao.disabled = true; el('conta-erro').textContent = '';
  try {
    perfilAtual = await api('/api/perfil',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({nome:dados.get('nome'),grupos})});
    exibirPerfil(); aviso.textContent = 'Cadastro salvo. Agora escolha um dos seus grupos para enviar o hino.';
  } catch (erro) {el('conta-erro').textContent = erro.message;}
  finally {botao.disabled = false;}
};
async function mostrarEnvios() {
  const pedido = revisaoConta; const lista = el('meus-envios');
  try {
    const envios = await api('/api/meus-envios');
    if (pedido !== revisaoConta) return;
    const atual = JSON.stringify(envios);
    if (lista.dataset.atual === atual) return;
    lista.replaceChildren();
    lista.dataset.atual = atual;
    if (!envios.length) add(lista,'p','Seus próximos envios aparecerão aqui.','vazio');
    for (const envio of envios) {
      const card = add(lista,'article',''); add(card,'h3',envio.hino);
      add(card,'p',envio.grupo,'grupo');
      add(card,'p','Regente: ' + (perfilAtual?.nome || 'Não informado'),'grupo');
      add(card,'p',envio.data_louvor ? 'Será tocado em: ' + envio.data_louvor.split('-').reverse().join('/') : 'Data a definir','grupo');
      add(card,'p',envio.recebido ? '✓ Confirmado pela mídia' : 'Aguardando confirmação da mídia', envio.recebido ? 'status' : 'status-pendente');
      const acoes = add(card,'div','','acoes'); const excluir = add(acoes,'button','Excluir meu envio','excluir'); excluir.type = 'button';
      excluir.onclick = async () => {
        if (!confirm('Excluir “' + envio.hino + '” do repertório?')) return;
        excluir.disabled = true;
        try {
          await api('/api/hinos/' + envio.id,{method:'DELETE',headers:{'Content-Type':'application/json'},body:'{}'});
          await mostrarEnvios(); aviso.textContent = 'Envio excluído do repertório.';
        } catch (erro) {aviso.textContent = erro.message; excluir.disabled = false;}
      };
    }
  } catch (erro) {delete lista.dataset.atual; lista.replaceChildren(); add(lista,'p',erro.message);}
}
async function iniciarPerfil() {
  await carregarGrupos();
  perfilAtual = await api('/api/perfil'); exibirPerfil();
}
iniciarPerfil().catch(erro => el('conta-erro').textContent = erro.message);
</script></body></html>`;

function youtubeVideo(value) {
  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol)) return null;
    let id;
    if (url.hostname === 'youtu.be') id = url.pathname.split('/')[1];
    if (['youtube.com','www.youtube.com','m.youtube.com','music.youtube.com'].includes(url.hostname)) {
      if (url.pathname === '/watch') id = url.searchParams.get('v');
      else if (/^\/(shorts|live|embed)\//.test(url.pathname)) id = url.pathname.split('/')[2];
    }
    if (id && /^[A-Za-z0-9_-]{11}$/.test(id)) return 'https://www.youtube.com/watch?v=' + id;
  } catch {}
  return null;
}

function dataValida(value) {
  if (typeof value !== 'string' || !/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(value) || value.startsWith('0000')) return false;
  const date = new Date(value + 'T00:00:00Z');
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

const calendario = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit',
});

function hoje() {
  const partes = Object.fromEntries(calendario.formatToParts().map(({type,value}) => [type,value]));
  return partes.year + '-' + partes.month + '-' + partes.day;
}

function json(data, status = 200) {
  return Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
}

async function hashToken(token) {
  const bytes = await crypto.subtle.digest('SHA-256',new TextEncoder().encode(token));
  return Array.from(new Uint8Array(bytes), b => b.toString(16).padStart(2,'0')).join('');
}

const COOKIE_CONTA = '__Host-louvor_perfil';
const TEMPO_SESSAO = 60 * 60 * 24 * 365;
function tokenCookie(request) {
  const match = (request.headers.get('Cookie') || '').split(';').map(s => s.trim()).find(s => s.startsWith(COOKIE_CONTA + '='));
  const token = match?.slice(COOKIE_CONTA.length + 1);
  return token && /^[a-f0-9]{64}$/.test(token) ? token : null;
}
function aleatorio() {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)), b => b.toString(16).padStart(2,'0')).join('');
}
async function obterConta(request,env) {
  const token = tokenCookie(request);
  if (!token) return null;
  const row = await env.DB.prepare('SELECT p.id,p.nome,p.grupos FROM perfis p JOIN perfil_sessoes s ON s.perfil_id = p.id WHERE s.token_hash = ? AND s.expira > ?').bind(await hashToken(token),Date.now()).first();
  return row ? {...row,grupos:JSON.parse(row.grupos)} : null;
}
async function rotaPerfil(request,env) {
  const perfil = await obterConta(request,env);
  if (request.method === 'GET') return json(perfil ? {nome:perfil.nome,grupos:perfil.grupos} : null);
  if (request.method !== 'POST') return json({erro:'Página não encontrada.'},404);
  const dados = await request.json().catch(() => null);
  const nome = typeof dados?.nome === 'string' ? dados.nome.trim() : '';
  const grupos = Array.isArray(dados?.grupos) ? [...new Set(dados.grupos.filter(g => typeof g === 'string').map(g => g.trim()))] : [];
  if (!nome || nome.length > 100 || !grupos.length || grupos.length > 50 || grupos.some(g => !g || g.length > 100)) return json({erro:'Informe seu nome e selecione de 1 a 50 grupos, com até 100 caracteres por nome.'},400);
  const id = perfil?.id || crypto.randomUUID();
  const token = tokenCookie(request) || aleatorio();
  await env.DB.batch([
    env.DB.prepare('INSERT INTO perfis (id,nome,grupos) VALUES (?,?,?) ON CONFLICT(id) DO UPDATE SET nome = excluded.nome, grupos = excluded.grupos').bind(id,nome,JSON.stringify(grupos)),
    ...grupos.map(g => env.DB.prepare('INSERT OR IGNORE INTO grupos (nome) VALUES (?)').bind(g)),
    env.DB.prepare('INSERT INTO perfil_sessoes (token_hash,perfil_id,expira) VALUES (?,?,?) ON CONFLICT(token_hash) DO UPDATE SET perfil_id = excluded.perfil_id, expira = excluded.expira').bind(await hashToken(token),id,Date.now()+TEMPO_SESSAO*1000)
  ]);
  const response = json({nome,grupos});
  response.headers.set('Set-Cookie',COOKIE_CONTA+'='+token+'; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age='+TEMPO_SESSAO);
  return response;
}

function verificarSenha(senha, env) {
  // A configuração antiga do Cloudflare utilizava SENHA_DE_ADMINISTRADOR.
  // Aceitar os dois nomes mantém Mídia e ADM funcionando após a implantação.
  const senhaAdm = env.ADMIN_PASSWORD || env.SENHA_DE_ADMINISTRADOR;
  if (!senhaAdm) return json({erro:'A senha do administrador ainda não foi configurada.'},503);
  if (typeof senha !== 'string' || senha.length > 128 ||
      senha.replace(/\s/g, '') !== senhaAdm) {
    return json({erro:'Senha incorreta.'},403);
  }
  return null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'GET' && url.pathname === '/') {
      return new Response(page,{headers:{'Content-Type':'text/html; charset=utf-8','Referrer-Policy':'strict-origin-when-cross-origin'}});
    }
    try {
      if (['POST','DELETE'].includes(request.method)) {
        const origin = request.headers.get('Origin');
        if (origin && origin !== url.origin) return json({erro:'Origem inválida.'},403);
        if (request.headers.get('Sec-Fetch-Site') === 'cross-site') return json({erro:'Origem inválida.'},403);
      }
      if (url.pathname === '/api/perfil') return await rotaPerfil(request,env);
      if (request.method === 'GET' && url.pathname === '/api/meus-envios') {
        const conta = await obterConta(request,env);
        if (!conta) return json({erro:'Preencha o cadastro para ver seus envios.'},401);
        const {results} = await env.DB.prepare('SELECT id,grupo,hino,data_louvor,recebido FROM hinos WHERE perfil_id = ? ORDER BY id DESC').bind(conta.id).all();
        return json(results);
      }
      if (request.method === 'GET' && url.pathname === '/api/grupos') {
        const {results} = await env.DB.prepare('SELECT nome FROM grupos UNION SELECT DISTINCT grupo AS nome FROM hinos ORDER BY nome').all();
        return json(results.map(row => row.nome));
      }
      if (request.method === 'GET' && ['/api/hinos','/api/musicos'].includes(url.pathname)) {
        if (url.pathname === '/api/hinos') {
          const erro = verificarSenha(request.headers.get('X-Repertorio-Senha'), env);
          if (erro) return erro;
        }
        const data = url.searchParams.get('data');
        if (data !== null && !dataValida(data)) return json({erro:'Data inválida.'},400);
        const {results} = await env.DB.prepare(data
          ? 'SELECT h.id,h.grupo,h.hino,h.youtube,h.modo,h.data_louvor,h.cantor,h.orientacoes,h.recebido,p.nome AS regente_nome FROM hinos h LEFT JOIN perfis p ON p.id = h.perfil_id WHERE h.data_louvor = ? ORDER BY h.id DESC'
          : 'SELECT h.id,h.grupo,h.hino,h.youtube,h.modo,h.data_louvor,h.cantor,h.orientacoes,h.recebido,p.nome AS regente_nome FROM hinos h LEFT JOIN perfis p ON p.id = h.perfil_id WHERE h.data_louvor IS NULL OR h.data_louvor >= ? ORDER BY h.id DESC'
        ).bind(data || hoje()).all();
        return json(results);
      }
      const origin = request.headers.get('Origin');
      if (['POST','DELETE'].includes(request.method) && origin && origin !== url.origin) {
        return json({erro:'Origem inválida.'},403);
      }
      if (request.method === 'DELETE') {
        const hino = url.pathname.match(/^\/api\/hinos\/([1-9]\d*)$/);
        if (hino && Number.isSafeInteger(Number(hino[1]))) {
          const dados = await request.json().catch(() => null);
          if (!dados?.senha) {
            const conta = await obterConta(request,env);
            if (!conta) return json({erro:'Preencha o cadastro para excluir seus envios.'},401);
            const result = await env.DB.prepare('DELETE FROM hinos WHERE id = ? AND perfil_id = ?').bind(Number(hino[1]),conta.id).run();
            return result.meta.changes ? json({ok:true}) : json({erro:'Envio não encontrado neste cadastro.'},404);
          }
          const erro = verificarSenha(dados?.senha, env);
          if (erro) return erro;
          await env.DB.prepare('DELETE FROM hinos WHERE id = ?').bind(Number(hino[1])).run();
          return json({ok:true});
        }
      }
      if (request.method === 'POST') {
        if (url.pathname === '/api/adm/login') {
          const dados = await request.json().catch(() => null);
          return verificarSenha(dados?.senha, env) ?? json({ok:true});
        }
        if (url.pathname === '/api/hinos') {
          const conta = await obterConta(request,env);
          if (!conta) return json({erro:'Preencha seu nome e grupos antes de enviar hinos.'},401);
          const data = await request.json().catch(() => null);
          const grupo = typeof data?.grupo === 'string' ? data.grupo.trim() : '';
          const hino = typeof data?.hino === 'string' ? data.hino.trim() : '';
          const cantor = typeof data?.cantor === 'string' ? data.cantor.trim() : '';
          const orientacoes = typeof data?.orientacoes === 'string' ? data.orientacoes.trim() : '';
          if (cantor.length > 150 || orientacoes.length > 1000) return json({erro:'Cantor ou orientações excedem o tamanho permitido.'},400);
          const youtube = typeof data?.youtube === 'string' && data.youtube.length <= 2048 ? youtubeVideo(data.youtube) : null;
          if (!grupo || grupo.length > 100 || !hino || hino.length > 150 || !youtube || !['vivo','audio'].includes(data?.modo)) {
            return json({erro:'Preencha o grupo e o hino, escolha o modo e informe um link válido de vídeo do YouTube.'},400);
          }
          if (!conta.grupos.includes(grupo)) return json({erro:'Escolha um dos grupos do seu cadastro. Use Alterar cadastro para incluir outro grupo.'},400);
          if (!dataValida(data.data_louvor)) {
            return json({erro:'Informe uma data válida para o louvor.'},400);
          }
          const resultados = await env.DB.batch([
            env.DB.prepare('INSERT OR IGNORE INTO grupos (nome) VALUES (?)').bind(grupo),
            env.DB.prepare('INSERT INTO hinos (grupo,hino,youtube,modo,data_louvor,cantor,orientacoes,perfil_id) VALUES (?,?,?,?,?,?,?,?)').bind(grupo,hino,youtube,data.modo,data.data_louvor,cantor,orientacoes,conta.id)
          ]);
          return json({ok:true,id:resultados[1].meta.last_row_id,data_passada:data.data_louvor < hoje()},201);
        }
        const recebido = url.pathname.match(/^\/api\/hinos\/(\d+)\/recebido$/);
        if (recebido && Number.isSafeInteger(Number(recebido[1]))) {
          const erro = verificarSenha(request.headers.get('X-Repertorio-Senha'), env);
          if (erro) return erro;
          const result = await env.DB.prepare('UPDATE hinos SET recebido = 1 WHERE id = ?').bind(Number(recebido[1])).run();
          return result.meta.changes ? json({ok:true}) : json({erro:'Hino não encontrado.'},404);
        }
      }
    } catch (error) {
      console.error(error);
      return json({erro:'O repertório está indisponível agora. Tente novamente.'},503);
    }
    return json({erro:'Página não encontrada.'},404);
  }
};
