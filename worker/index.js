const page = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Ordem do Louvor</title><link rel="manifest" href="/manifest.webmanifest"><meta name="theme-color" content="#111729">
<style>
:root{color-scheme:dark;font:16px system-ui,sans-serif;background:#111729;color:#f7f4ec}*{box-sizing:border-box}[hidden]{display:none!important}body{margin:0}header{background:radial-gradient(ellipse at right,#313864,#191f38 66%);border-bottom:1px solid #424966;padding:3rem 1.2rem 5rem}header>div,main{max-width:700px;margin:auto}.marca,.secao{color:#ffce82;font-size:.75rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase}h1{font-size:clamp(2.6rem,9vw,4rem);line-height:1;margin:.55rem 0;font-family:Georgia,serif;font-weight:normal}p{color:#c4cae2;line-height:1.5}header p{margin:.8rem 0 0}main{position:relative;margin:-2.25rem auto 3rem;padding:0 1rem}.card,nav,article{border:1px solid #404967;background:#1b233b;border-radius:18px;padding:1.25rem}nav{display:flex;padding:.35rem;gap:.35rem;margin-bottom:1rem}nav button{flex:1;border:0;padding:.75rem .35rem;min-width:0;font-size:.9rem}textarea{resize:vertical}.orientacoes{white-space:pre-wrap;overflow-wrap:anywhere}button,a{font:inherit}button,.acoes .cifra{cursor:pointer;padding:.8rem 1rem;border-radius:10px;border:1px solid #606c91;background:#293453;color:#fff;font-weight:700}button[aria-pressed=true],.primary{background:#ffce82;color:#221b15;border-color:#ffce82}button:disabled{opacity:.65;cursor:wait}h2{margin:.35rem 0 .5rem}label,legend{font-weight:700}label.campo{display:block;margin-top:1rem}select,textarea,input:not([type=radio]):not([type=checkbox]){display:block;width:100%;margin-top:.4rem;background:#141b30;color:#fff;border:1px solid #657094;border-radius:9px;padding:.78rem;font:inherit}fieldset{margin:1.15rem 0;padding:.7rem;border:1px solid #606c91;border-radius:10px;display:flex;flex-wrap:wrap;gap:1rem}fieldset label{padding:.35rem;cursor:pointer}input[type=radio]{accent-color:#ffce82}.primary{width:100%}#aviso{min-height:1.5em;color:#ffda9e}article{margin-top:.75rem;padding:1rem;background:#151c31}article h3{margin:.35rem 0;font-size:1.3rem;overflow-wrap:anywhere}.grupo{margin:.35rem 0;color:#c4cae2;overflow-wrap:anywhere}.acoes{display:flex;align-items:center;flex-wrap:wrap;gap:.75rem;margin-top:.75rem}.acoes a{color:#ffda9e}.acoes .cifra{text-decoration:none}.barra{display:flex;align-items:center;justify-content:space-between;gap:.5rem}.status{color:#b8e6ca;font-weight:700}.status-pendente{color:#ffda9e;font-weight:700}.vazio{padding:1rem;border:1px dashed #657094;border-radius:12px}:focus-visible{outline:3px solid #ffce82;outline-offset:3px}
.acoes .excluir{background:transparent;color:#ffb8b8;border-color:#915d6e}#youtube-resultados article{display:flex;gap:.85rem;align-items:flex-start}#youtube-resultados img{width:120px;max-width:34%;aspect-ratio:16/9;object-fit:cover;border-radius:8px}#youtube-resultados .resultado-conteudo{flex:1;min-width:0}#youtube-resultados .resultado-conteudo p{margin:.3rem 0 .6rem}#youtube-resultados button{padding:.55rem .75rem}
#plano-b-musicos{margin-top:1.25rem;padding:.8rem 1rem;border:1px solid #606c91;border-radius:14px;background:#151c31}#plano-b-musicos summary{cursor:pointer;color:#ffce82;font-weight:800;line-height:1.5;padding:.3rem 0}#plano-b-musicos[open] summary{margin-bottom:.5rem}#plano-b-musicos article{background:#1b233b}
.presencas-area{margin:1rem 0}.presencas-area article{padding:1rem}.presencas-area h3{margin:.35rem 0}.presencas-status{font-weight:700;color:#ffce82}.presencas-selecoes{display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.75rem}.presencas-selecoes button{flex:1;min-width:120px}.presencas-selecoes button[aria-pressed=true]{background:#ffce82;color:#221b15}.presencas-apoio{font-size:.9rem;color:#c4cae2}.presencas-detalhes{white-space:pre-wrap;overflow-wrap:anywhere}.presencas-grupos{display:flex;flex-wrap:wrap;gap:.65rem;padding:.65rem;border:1px solid #606c91;border-radius:10px;margin-top:.6rem}.presencas-grupos label{font-weight:normal}.presencas-resumo{margin:.3rem 0}.link-musicos{color:#ffce82;overflow-wrap:anywhere}
#player,#confirmar-exclusao,#acesso,#busca-youtube-dialog{width:min(92vw,680px);max-height:90dvh;border:1px solid #606c91;border-radius:18px;background:#1b233b;color:#f7f4ec;padding:1rem}#player::backdrop,#confirmar-exclusao::backdrop,#acesso::backdrop,#busca-youtube-dialog::backdrop{background:#080c18cc}#player-video iframe{display:block;width:100%;aspect-ratio:16/9;min-height:200px;border:0;margin-top:1rem}
#alertas-config{margin-bottom:1rem;padding:.8rem 1rem;border:1px solid #404967;border-radius:14px;background:#1b233b}#alertas-config p{font-size:.85rem;margin:.35rem 0 0}#alertas-config .acoes{margin-top:0}#alertas-config button{font-size:.9rem;padding:.65rem .8rem}#notificacoes-status{color:#d5e0ff}
</style></head><body>
<header><div><div class="marca">♫ &nbsp; Equipe do culto</div><h1>Ordem do Louvor</h1><p>O repertório da igreja em um só lugar.</p></div></header>
<main><nav aria-label="Área de trabalho"><button id="aba-regente" aria-pressed="true">Regente</button><button id="aba-musicos" aria-pressed="false">Músicos</button><button id="aba-midia" aria-pressed="false">Mídia</button><button id="aba-adm" aria-pressed="false">ADM</button></nav>
<div id="alertas-config"><div class="acoes"><button id="notificacoes-btn" type="button">🔔 Ativar notificações</button><button id="notificacoes-parar" type="button" hidden>Desativar neste celular</button></div><p id="notificacoes-status" role="status">Receba avisos dos louvores diretamente no seu celular.</p></div>
<section class="card" id="regente"><div class="secao">Cadastro</div><div id="conta-entrada"><h2>Cadastro do regente</h2><p>Informe seu nome e marque os grupos que você dirige. O cadastro fica salvo neste navegador, sem senha.</p><form id="form-conta"><label class="campo">Nome do regente<input name="nome" required maxlength="100" autocomplete="name" placeholder="Seu nome"></label><fieldset id="grupos-perfil"><legend>De quais grupos você é regente?</legend></fieldset><div class="acoes"><label class="campo">Não encontrou seu grupo?<input id="novo-grupo-perfil" maxlength="100" placeholder="Nome do novo grupo"></label><button id="adicionar-grupo-perfil" type="button">Adicionar grupo</button></div><p id="conta-erro" role="status"></p><button class="primary" type="submit">Salvar cadastro</button><p><button id="cancelar-perfil" type="button" hidden>Cancelar</button></p></form></div><div id="conta-conteudo" hidden><div class="barra"><p id="conta-nome"></p><button id="editar-perfil" type="button">Alterar cadastro</button></div><h2>Enviar um hino</h2><form id="form">
<label class="campo">Nome do grupo<select name="grupo" id="grupo" required><option value="">Selecione o grupo</option></select></label><label class="campo" id="novo-grupo-campo" hidden>Novo grupo<input id="novo-grupo" maxlength="100" placeholder="Digite o nome do grupo"></label>
<label class="campo">Nome do hino<input name="hino" maxlength="150" placeholder="Digite o nome do hino" required></label>
<div class="acoes"><button id="buscar-youtube" type="button">🔎 Buscar no YouTube</button></div><p>Pesquise pelo nome, escolha a versão e o título e link serão preenchidos automaticamente.</p>
<label class="campo">Cantor ou canal do YouTube (pode corrigir)<input name="cantor" maxlength="150" placeholder="Artista da versão escolhida"></label>
<label class="campo">Link do YouTube<input name="youtube" type="url" maxlength="2048" placeholder="Preenchido ao selecionar o vídeo; ou cole manualmente" required></label>
<label class="campo">Data do louvor<input name="data_louvor" type="date" min="0001-01-01" max="9999-12-31" required></label>
<fieldset><legend>Como será tocado?</legend><label><input required type="radio" name="modo" value="vivo"> Ao vivo com os músicos</label><label><input required type="radio" name="modo" value="audio"> Áudio no computador</label></fieldset>
<label class="campo">Tom e orientações (opcional)<textarea name="orientacoes" maxlength="1000" rows="3" placeholder="Ex.: Tom de Ré, começar pelo refrão"></textarea></label><br>
<button class="primary" type="submit">Enviar para a mídia</button></form><hr><div class="barra"><h2>Meus envios</h2><button id="atualizar-envios" type="button">Atualizar status</button></div><p>Acompanhe quando a equipe de mídia confirmar o recebimento dos seus hinos.</p><div id="meus-envios" aria-live="polite"></div>
<hr><section id="regente-presencas" class="presencas-area">
<h2>📅 Ensaios e confirmações</h2><p>Marque ensaios e acompanhe quem confirmou presença nos ensaios e cultos.</p>
<form id="form-ensaio">
<label class="campo">Grupo do ensaio<select id="grupo-ensaio" required></select></label>
<label class="campo">Dia do ensaio<input id="dia-ensaio" type="date" required></label>
<label class="campo">Horário<input id="hora-ensaio" type="time" required></label>
<label class="campo">Local (opcional)<input id="local-ensaio" maxlength="160" placeholder="Ex.: templo"></label>
<label class="campo">Observações (opcional)<textarea id="obs-ensaio" maxlength="500" rows="2" placeholder="Ex.: trazer instrumento"></textarea></label>
<button class="primary" type="submit">Marcar ensaio</button><p id="ensaio-aviso" role="status"></p>
</form><p>Envie este link para os músicos: <a class="link-musicos" href="/musicos" target="_blank" rel="noopener">Abrir área dos músicos</a></p>
<div id="lista-presencas-regente" aria-live="polite"></div>
</section></div></section>
<section class="card presencas-area" id="presencas-musicos" hidden>
<div class="secao">Equipe de músicos</div>
<h2>🎸 Minha presença</h2>
<p>Cadastre seu nome uma vez neste celular e confirme se vai participar dos cultos e ensaios do seu grupo.</p>
<div id="musico-entrada">
<form id="form-musico">
<label class="campo">Seu nome<input id="musico-nome" name="nome" maxlength="100" required placeholder="Ex.: João Silva" autocomplete="name"></label>
<label class="campo">Instrumento ou função<input id="musico-instrumento" name="instrumento" maxlength="100" required placeholder="Ex.: violão, teclado, bateria ou voz"></label>
<label class="campo">Grupos que você participa</label><div class="presencas-grupos" id="musico-grupos"></div>
<button type="submit" class="primary">Salvar cadastro de músico</button><p id="musico-erro" role="status"></p>
</form></div>
<div id="musico-logado" hidden><div class="barra"><p id="musico-ola"></p><button id="alterar-musico" type="button">Alterar cadastro</button></div>
<p class="presencas-apoio">Escolha uma opção para cada ensaio ou culto. Você pode alterar a resposta depois.</p>
<div id="lista-compromissos-musico" aria-live="polite"></div>
</div></section>
<section class="card" id="midia" hidden><div class="secao" id="secao-lista">Equipe de mídia</div><div class="barra"><h2 id="titulo-lista">Hinos recebidos</h2><button id="atualizar">Atualizar</button></div><label class="campo">Data do culto<input id="filtro-data" type="date"></label><p><button id="todas-datas">Próximos cultos</button></p><div id="fila"></div></section>
<p id="aviso" role="status"></p></main>
<dialog id="player" aria-labelledby="player-titulo">
<div class="barra"><h2 id="player-titulo"></h2><form method="dialog"><button>Fechar</button></form></div>
<div id="player-video"></div>
<div class="acoes"><a id="player-link" target="_blank" rel="noopener">Abrir no YouTube</a></div>
<p>Se o vídeo estiver indisponível aqui, abra pelo YouTube.</p>
</dialog>
<dialog id="busca-youtube-dialog" aria-labelledby="busca-youtube-titulo"><div class="barra"><h2 id="busca-youtube-titulo">Escolha o hino no YouTube</h2><form method="dialog"><button>Fechar</button></form></div><div id="youtube-resultados" aria-live="polite"></div></dialog>
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
const buscaYouTube = el('busca-youtube-dialog');
const resultadosYouTube = el('youtube-resultados');
let consultaYouTube = 0;
el('buscar-youtube').onclick = async () => {
  const consulta = form.elements.hino.value.trim();
  if (consulta.length < 2) { form.elements.hino.focus(); aviso.textContent = 'Digite ao menos 2 letras do nome do hino.'; return; }
  const pedido = ++consultaYouTube;
  resultadosYouTube.replaceChildren();
  add(resultadosYouTube,'p','Buscando vídeos…');
  buscaYouTube.showModal();
  try {
    const videos = await api('/api/youtube?q=' + encodeURIComponent(consulta));
    if (pedido !== consultaYouTube || !buscaYouTube.open) return;
    resultadosYouTube.replaceChildren();
    if (!videos.length) { add(resultadosYouTube,'p','Nenhum vídeo encontrado. Você também pode colar o link manualmente.'); return; }
    for (const video of videos) {
      const card = add(resultadosYouTube,'article','');
      const foto = document.createElement('img');
      foto.src = 'https://i.ytimg.com/vi/' + encodeURIComponent(video.id) + '/mqdefault.jpg';
      foto.alt = ''; foto.loading = 'lazy';
      const corpo = add(card,'div','','resultado-conteudo');
      add(corpo,'h3',video.titulo);
      add(corpo,'p','Canal: ' + video.canal,'grupo');
      const selecionar = add(corpo,'button','Selecionar este vídeo');
      selecionar.type = 'button';
      selecionar.onclick = () => {
        form.elements.hino.value = video.titulo.slice(0,150);
        form.elements.cantor.value = video.canal.slice(0,150);
        form.elements.youtube.value = 'https://www.youtube.com/watch?v=' + video.id;
        buscaYouTube.close();
        aviso.textContent = 'Vídeo selecionado! Confira o cantor e complete os outros campos.';
      };
      card.prepend(foto);
    }
  } catch (erro) {
    if (pedido !== consultaYouTube || !buscaYouTube.open) return;
    resultadosYouTube.replaceChildren();
    add(resultadosYouTube,'p',erro.message);
    add(resultadosYouTube,'p','Você pode continuar colando o link do YouTube manualmente.');
  }
};
// Inscrição voluntária nas notificações push; nenhum aviso é pedido sem toque do usuário.
function decodificarChavePush(chave) {
  const base64 = chave.replace(/-/g,'+').replace(/_/g,'/');
  const binario = atob(base64 + '='.repeat((4 - base64.length % 4) % 4));
  return Uint8Array.from(binario, c => c.charCodeAt(0));
}
const botaoNotificacoes = el('notificacoes-btn');
const pararNotificacoes = el('notificacoes-parar');
const statusNotificacoes = el('notificacoes-status');
const suportePush = 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
if (!suportePush) statusNotificacoes.textContent = 'Este navegador não oferece notificações push. Tente pelo Chrome atualizado.';
botaoNotificacoes.onclick = async () => {
  if (!suportePush) return;
  const papel = abaAtual === 'regente' ? 'regente' : abaAtual === 'musicos' ? 'musicos' : 'midia';
  if (papel === 'regente' && !perfilAtual) {
    statusNotificacoes.textContent = 'Primeiro salve seu cadastro de regente.';
    return;
  }
  // A permissão deve ser solicitada diretamente após o clique.
  let permissao = Notification.permission;
  if (permissao === 'default') permissao = await Notification.requestPermission();
  if (permissao !== 'granted') {
    statusNotificacoes.textContent = 'Notificações não autorizadas. Ative a permissão nas configurações do navegador.';
    return;
  }
  botaoNotificacoes.disabled = true;
  try {
    const registro = await navigator.serviceWorker.register('/sw.js');
    const configuracao = await api('/api/push/config');
    let assinatura = await registro.pushManager.getSubscription();
    if (!assinatura) assinatura = await registro.pushManager.subscribe({
      userVisibleOnly:true,
      applicationServerKey:decodificarChavePush(configuracao.chavePublica)
    });
    await api('/api/push/inscrever',{
      method:'POST',
      headers:{'Content-Type':'application/json', 'X-Repertorio-Senha':senhaAcesso || ''},
      body:JSON.stringify({papel,assinatura:assinatura.toJSON()})
    });
    statusNotificacoes.textContent = '✅ Avisos ativados para ' + (papel === 'regente' ? 'o regente' : papel === 'musicos' ? 'os músicos' : 'a mídia') + ' neste celular.';
    pararNotificacoes.hidden = false;
  } catch (erro) {
    statusNotificacoes.textContent = 'Não foi possível ativar: ' + erro.message;
  } finally {
    botaoNotificacoes.disabled = false;
  }
};
pararNotificacoes.onclick = async () => {
  try {
    const registro = await navigator.serviceWorker.getRegistration('/sw.js');
    const assinatura = await registro?.pushManager?.getSubscription();
    if (assinatura) {
      await api('/api/push/inscrever',{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({endpoint:assinatura.endpoint})});
      await assinatura.unsubscribe();
    }
    pararNotificacoes.hidden = true;
    statusNotificacoes.textContent = 'Notificações desativadas neste celular.';
  } catch (erro) {
    statusNotificacoes.textContent = 'Não foi possível desativar: ' + erro.message;
  }
};

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
    if (!hinos.length && abaAtual !== 'musicos') add(fragmento,'p','Nenhum hino encontrado para este período.','vazio');
    // Na área dos músicos, os hinos ao vivo ficam visíveis; os áudios ficam
    // no Plano B recolhido, sem afetar as listas da Mídia e do ADM.
    const aoVivo = abaAtual === 'musicos' ? hinos.filter(hino => hino.modo === 'vivo') : [];
    const audioReserva = abaAtual === 'musicos' ? hinos.filter(hino => hino.modo !== 'vivo') : [];
    let planoB = null;
    if (abaAtual === 'musicos') {
      add(fragmento,'h2','🎸 Louvores ao vivo');
      if (!aoVivo.length) add(fragmento,'p','Nenhum louvor ao vivo programado para este período.','vazio');
      if (audioReserva.length) {
        planoB = document.createElement('details');
        planoB.id = 'plano-b-musicos';
        // Mantém o Plano B aberto se a lista for atualizada automaticamente.
        planoB.open = Boolean(fila.querySelector('#plano-b-musicos')?.open);
        add(planoB,'summary','💻 Plano B — áudio no computador (' + audioReserva.length + ')');
        add(planoB,'p','Louvores em áudio da mídia para consultar se o computador falhar.','grupo');
      }
    }
    const hinosExibidos = abaAtual === 'musicos' ? [...aoVivo, ...audioReserva] : hinos;
    for (const hino of hinosExibidos) {
      const destino = abaAtual === 'musicos' && hino.modo !== 'vivo' ? planoB : fragmento;
      const card = add(destino,'article','');
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
    if (planoB) fragmento.append(planoB);
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
  el('presencas-musicos').hidden = aba !== 'musicos';
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
  if (aba === 'musicos') carregarCompromissosMusicos();
  else if (perfilAtual) {mostrarEnvios();carregarPresencasRegente();}
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

let musicoPerfilAtual = null;
function preencherGruposMusico() {
  const area = el('musico-grupos');
  const selecionados = musicoPerfilAtual?.grupos || [];
  const nomes = [...new Set([...todosGrupos,...selecionados])].sort((a,b)=>a.localeCompare(b,'pt-BR'));
  area.replaceChildren();
  if (!nomes.length) add(area,'p','Nenhum grupo cadastrado no momento.');
  for (const nome of nomes) {
    const label = add(area,'label','');
    const input = document.createElement('input');
    input.type = 'checkbox'; input.name = 'grupos'; input.value = nome; input.checked=selecionados.includes(nome);
    label.append(input,document.createTextNode(' '+nome));
  }
}
function dataCurta(texto) {return texto ? texto.split('-').reverse().join('/') : '';}
function desenharCompromissosMusico(dados) {
  const area = el('lista-compromissos-musico'); area.replaceChildren();
  const compromissos = dados.compromissos || [];
  if (!compromissos.length) {add(area,'p','Nenhum culto ao vivo ou ensaio marcado para os seus grupos.','vazio');return;}
  for (const evento of compromissos) {
    const card=add(area,'article','');
    add(card,'div',evento.tipo === 'ensaio' ? '🎼 Ensaio' : '⛪ Culto','secao');
    add(card,'h3',evento.grupo);
    add(card,'p',dataCurta(evento.data)+(evento.horario ? ' às '+evento.horario : ''),'grupo');
    if (evento.local) add(card,'p','Local: '+evento.local,'grupo');
    if (evento.observacoes) add(card,'p',evento.observacoes,'presencas-detalhes');
    const status=add(card,'p',evento.confirmacao === 'sim' ? '✅ Você confirmou presença.' : evento.confirmacao === 'nao' ? '❌ Você avisou que não poderá participar.' : 'Sua resposta: aguardando.','presencas-status');
    const acoes=add(card,'div','','presencas-selecoes');
    for (const [valor,legenda] of [['sim','✅ Vou participar'],['nao','❌ Não vou poder']]) {
      const botao=add(acoes,'button',legenda);
      botao.type='button';botao.setAttribute('aria-pressed',evento.confirmacao===valor);
      botao.onclick=async()=>{
        for(const item of acoes.querySelectorAll('button'))item.disabled=true;
        try {
          await api('/api/musico/confirmar',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({tipo:evento.tipo,referencia:evento.referencia,status:valor})});
          evento.confirmacao=valor;
          status.textContent=valor==='sim'?'✅ Você confirmou presença.':'❌ Você avisou que não poderá participar.';
          for(const item of acoes.querySelectorAll('button'))item.setAttribute('aria-pressed',item===botao);
        }catch(erro){status.textContent=erro.message;}
        finally{for(const item of acoes.querySelectorAll('button'))item.disabled=false;}
      };
    }
  }
}
async function carregarCompromissosMusicos() {
  if (abaAtual !== 'musicos') return;
  const area = el('lista-compromissos-musico');
  try {
    const perfil = await api('/api/musico/perfil');
    musicoPerfilAtual = perfil;
    el('musico-entrada').hidden=!!perfil;
    el('musico-logado').hidden=!perfil;
    preencherGruposMusico();
    if (!perfil) return;
    el('musico-ola').textContent=perfil.nome+' — '+perfil.instrumento;
    const dados = await api('/api/musico/compromissos');
    if (abaAtual==='musicos') desenharCompromissosMusico(dados);
  } catch(erro) {area.replaceChildren();add(area,'p',erro.message,'vazio');}
}
el('alterar-musico').onclick=()=>{
  el('musico-entrada').hidden=false;el('musico-logado').hidden=true;
  el('form-musico').elements.nome.value=musicoPerfilAtual?.nome||'';
  el('form-musico').elements.instrumento.value=musicoPerfilAtual?.instrumento||'';
  preencherGruposMusico();
};
el('form-musico').onsubmit=async event=>{
  event.preventDefault();
  const formulario=el('form-musico');
  const botoes=formulario.querySelectorAll('button');
  const dados=new FormData(formulario);
  if (!dados.getAll('grupos').length) {el('musico-erro').textContent='Selecione pelo menos um grupo.';return;}
  for(const botao of botoes)botao.disabled=true;
  el('musico-erro').textContent='';
  try {
    musicoPerfilAtual=await api('/api/musico/perfil',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
      nome:dados.get('nome'),instrumento:dados.get('instrumento'),grupos:dados.getAll('grupos')
    })});
    await carregarCompromissosMusicos();
  }catch(erro){el('musico-erro').textContent=erro.message;}
  finally{for(const botao of botoes)botao.disabled=false;}
};
function presencasTexto(lista,status) {
  const nomes=lista.filter(item=>item.status===status).map(item=>item.nome+(item.instrumento?' ('+item.instrumento+')':''));
  return nomes.length ? nomes.join(', ') : 'Ninguém';
}
async function carregarPresencasRegente() {
  if(!perfilAtual || el('regente').hidden) return;
  const area=el('lista-presencas-regente');
  try {
    const eventos=await api('/api/regente/compromissos');
    if(el('regente').hidden)return;
    area.replaceChildren();
    if(!eventos.length){add(area,'p','Os próximos cultos e ensaios aparecerão aqui.','vazio');return;}
    for (const evento of eventos) {
      const card=add(area,'article','');
      add(card,'div',evento.tipo==='ensaio'?'🎼 Ensaio':'⛪ Culto','secao');
      add(card,'h3',evento.grupo+' — '+dataCurta(evento.data)+(evento.horario?' às '+evento.horario:''));
      if(evento.local)add(card,'p','Local: '+evento.local,'grupo');
      if(evento.observacoes)add(card,'p',evento.observacoes,'presencas-detalhes');
      const confirmacoes=evento.confirmacoes||[];
      add(card,'p','✅ Confirmados: '+presencasTexto(confirmacoes,'sim'),'presencas-resumo');
      add(card,'p','❌ Não poderão: '+presencasTexto(confirmacoes,'nao'),'presencas-resumo');
      add(card,'p','⏳ Sem resposta: '+presencasTexto(confirmacoes,null),'presencas-resumo');
      if(evento.tipo==='ensaio'&&evento.pode_excluir){
        const botao=add(card,'button','Excluir ensaio','excluir');
        botao.onclick=async()=>{
          if(!confirm('Excluir esse ensaio?'))return;
          botao.disabled=true;
          try{await api('/api/ensaios/'+evento.referencia,{method:'DELETE'});await carregarPresencasRegente();}
          catch(erro){el('ensaio-aviso').textContent=erro.message;botao.disabled=false;}
        };
      }
    }
  }catch(erro){area.replaceChildren();add(area,'p',erro.message,'vazio');}
}
el('form-ensaio').onsubmit=async event=>{
  event.preventDefault();
  const formulario=el('form-ensaio'),botao=formulario.querySelector('button[type=submit]');
  botao.disabled=true;el('ensaio-aviso').textContent='';
  try{
    await api('/api/ensaios',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
      grupo:el('grupo-ensaio').value,data:el('dia-ensaio').value,horario:el('hora-ensaio').value,
      local:el('local-ensaio').value,observacoes:el('obs-ensaio').value
    })});
    formulario.reset();el('ensaio-aviso').textContent='Ensaio marcado! Os músicos verão a data na área deles.';
    preencherGrupoHino();await carregarPresencasRegente();
  }catch(erro){el('ensaio-aviso').textContent=erro.message;}
  finally{botao.disabled=false;}
};
setInterval(()=>{if(abaAtual==='musicos'&&!document.hidden&&musicoPerfilAtual)carregarCompromissosMusicos();},45000);
setInterval(()=>{if(abaAtual==='regente'&&!document.hidden&&perfilAtual)carregarPresencasRegente();},45000);
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
  const ensaioSelect = el('grupo-ensaio');
  ensaioSelect.replaceChildren();
  const escolha = add(ensaioSelect,'option','Escolha um grupo'); escolha.value = '';
  for (const grupo of grupos) {const opcao = add(ensaioSelect,'option',grupo); opcao.value=grupo;}
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
  preencherGruposMusico();
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
  if (perfilAtual) {mostrarEnvios();carregarPresencasRegente();}
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
if (location.pathname === '/musicos') abrir('musicos');
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


const pushServiceWorker = `
self.addEventListener('push', event => {
  event.waitUntil(self.registration.showNotification('Ordem do Louvor', {
    body:'Há novidades na programação dos louvores. Toque para conferir.',
    icon:'/icon.svg',badge:'/icon.svg',tag:'atualizacao-louvor',
    data:{url:'/'}
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const janelas = await clients.matchAll({type:'window',includeUncontrolled:true});
    for (const janela of janelas) {
      if (new URL(janela.url).origin === self.location.origin) {
        await janela.focus();
        return;
      }
    }
    await clients.openWindow(event.notification.data?.url || '/');
  })());
});
`;
const pushManifesto = JSON.stringify({
  name:'Ordem do Louvor',short_name:'Louvores',lang:'pt-BR',
  start_url:'/',display:'standalone',background_color:'#111729',theme_color:'#111729',
  icons:[{src:'/icon.svg',type:'image/svg+xml',sizes:'any',purpose:'any maskable'}]
});
const pushIcone = '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192"><rect width="192" height="192" rx="38" fill="#1b233b"/><path d="M115 33v86a30 30 0 1 1-14-26V54l46-12v-17z" fill="#ffce82"/></svg>';
const codificarB64url = bytes => btoa(String.fromCharCode(...bytes)).replaceAll('=','').replaceAll('+','-').replaceAll('/','_');
function decodificarB64url(valor) {
  const base = valor.replaceAll('-','+').replaceAll('_','/');
  return Uint8Array.from(atob(base+'='.repeat((4-base.length%4)%4)), c=>c.charCodeAt(0));
}
async function pushPreparar(env) {
  // Apenas tabelas novas. Não altera o banco de hinos, perfis ou grupos.
  await env.DB.prepare("CREATE TABLE IF NOT EXISTS push_chaves (id INTEGER PRIMARY KEY CHECK(id = 1), publica TEXT NOT NULL, privada TEXT NOT NULL)").run();
  await env.DB.prepare("CREATE TABLE IF NOT EXISTS push_dispositivos (endpoint TEXT NOT NULL, papel TEXT NOT NULL, perfil_id TEXT NOT NULL DEFAULT '', criado_em INTEGER NOT NULL, PRIMARY KEY(endpoint,papel,perfil_id))").run();
  let chaves = await env.DB.prepare('SELECT publica, privada FROM push_chaves WHERE id = 1').first();
  if (!chaves) {
    const par = await crypto.subtle.generateKey({name:'ECDSA',namedCurve:'P-256'},true,['sign','verify']);
    const jwk = await crypto.subtle.exportKey('jwk',par.privateKey);
    const publica = codificarB64url(new Uint8Array([4,...decodificarB64url(jwk.x),...decodificarB64url(jwk.y)]));
    await env.DB.prepare('INSERT OR IGNORE INTO push_chaves (id,publica,privada) VALUES (1,?,?)').bind(publica,JSON.stringify(jwk)).run();
    chaves = await env.DB.prepare('SELECT publica, privada FROM push_chaves WHERE id = 1').first();
  }
  return chaves;
}
function pushDestinoSeguro(endpoint) {
  if (typeof endpoint !== 'string' || endpoint.length > 2048) return false;
  try {
    const url = new URL(endpoint);
    const host = url.hostname.toLowerCase();
    return url.protocol === 'https:' && !url.username && !url.password && (
      host === 'fcm.googleapis.com' ||
      host === 'updates.push.services.mozilla.com' ||
      host === 'push.services.mozilla.com' ||
      host === 'web.push.apple.com' ||
      host.endsWith('.push.apple.com') ||
      host.endsWith('.notify.windows.com')
    );
  } catch { return false; }
}
async function pushInscrever(request,env) {
  const dados = await request.json().catch(()=>null);
  const papel = dados?.papel;
  if (!['regente','midia','musicos'].includes(papel) || !pushDestinoSeguro(dados?.assinatura?.endpoint) ||
      typeof dados?.assinatura?.keys?.auth !== 'string' || typeof dados?.assinatura?.keys?.p256dh !== 'string') {
    return json({erro:'Assinatura de notificação inválida.'},400);
  }
  let perfilId = '';
  if (papel === 'regente') {
    const conta = await obterConta(request,env);
    if (!conta) return json({erro:'Cadastre-se como regente antes de ativar notificações.'},401);
    perfilId = conta.id;
  }
  if (papel === 'midia') {
    const erro = verificarSenha(request.headers.get('X-Repertorio-Senha'),env);
    if (erro) return erro;
  }
  await pushPreparar(env);
  await env.DB.prepare('INSERT OR REPLACE INTO push_dispositivos (endpoint,papel,perfil_id,criado_em) VALUES (?,?,?,?)')
    .bind(dados.assinatura.endpoint,papel,perfilId,Date.now()).run();
  return json({ok:true});
}
async function pushDesinscrever(request,env) {
  const dados = await request.json().catch(()=>null);
  if (!pushDestinoSeguro(dados?.endpoint)) return json({erro:'Dispositivo inválido.'},400);
  await pushPreparar(env);
  await env.DB.prepare('DELETE FROM push_dispositivos WHERE endpoint = ?').bind(dados.endpoint).run();
  return json({ok:true});
}
async function pushEnviar(endpoint,chaves,env) {
  if (!pushDestinoSeguro(endpoint)) return;
  const url = new URL(endpoint);
  const aud = url.origin;
  const agora = Math.floor(Date.now()/1000);
  const cabecalho = codificarB64url(new TextEncoder().encode(JSON.stringify({typ:'JWT',alg:'ES256'})));
  const corpo = codificarB64url(new TextEncoder().encode(JSON.stringify({
    aud, exp:agora+12*60*60, sub:'https://ordem-do-louvor.andreysilachaves12.workers.dev'
  })));
  const texto = cabecalho+'.'+corpo;
  const chave = await crypto.subtle.importKey('jwk',JSON.parse(chaves.privada),{name:'ECDSA',namedCurve:'P-256'},false,['sign']);
  const assinatura = codificarB64url(new Uint8Array(await crypto.subtle.sign({name:'ECDSA',hash:'SHA-256'},chave,new TextEncoder().encode(texto))));
  const resposta = await fetch(endpoint,{
    method:'POST',
    headers:{
      Authorization:'vapid t='+texto+'.'+assinatura+', k='+chaves.publica,
      TTL:'3600'
    }
  });
  if (resposta.status === 404 || resposta.status === 410) {
    await env.DB.prepare('DELETE FROM push_dispositivos WHERE endpoint = ?').bind(endpoint).run();
  } else if (!resposta.ok) {
    console.error('Erro no serviço de push:',resposta.status);
  }
}
async function pushAvisar(env,papel,perfilId='') {
  try {
    const chaves = await pushPreparar(env);
    const consulta = perfilId
      ? env.DB.prepare('SELECT DISTINCT endpoint FROM push_dispositivos WHERE papel = ? AND perfil_id = ? LIMIT 200').bind(papel,perfilId)
      : env.DB.prepare('SELECT DISTINCT endpoint FROM push_dispositivos WHERE papel = ? LIMIT 200').bind(papel);
    const {results} = await consulta.all();
    await Promise.allSettled(results.map(row => pushEnviar(row.endpoint,chaves,env)));
  } catch (erro) {
    // Falha de aviso não deve interromper o envio ou confirmação de hinos.
    console.error('Falha no envio de notificações:',erro);
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === 'GET' && url.pathname === '/') {
      return new Response(page,{headers:{'Content-Type':'text/html; charset=utf-8','Referrer-Policy':'strict-origin-when-cross-origin'}});
    }
    if (request.method === 'GET' && url.pathname === '/sw.js')
      return new Response(pushServiceWorker,{headers:{'Content-Type':'text/javascript; charset=utf-8','Cache-Control':'no-cache','Service-Worker-Allowed':'/'}});
    if (request.method === 'GET' && url.pathname === '/manifest.webmanifest')
      return new Response(pushManifesto,{headers:{'Content-Type':'application/manifest+json','Cache-Control':'public, max-age=3600'}});
    if (request.method === 'GET' && url.pathname === '/icon.svg')
      return new Response(pushIcone,{headers:{'Content-Type':'image/svg+xml','Cache-Control':'public, max-age=86400'}});
    try {
      if (['POST','DELETE'].includes(request.method)) {
        const origin = request.headers.get('Origin');
        if (origin && origin !== url.origin) return json({erro:'Origem inválida.'},403);
        if (request.headers.get('Sec-Fetch-Site') === 'cross-site') return json({erro:'Origem inválida.'},403);
      }
      if (request.method === 'GET' && url.pathname === '/api/push/config') {
        const chaves = await pushPreparar(env);
        return json({chavePublica:chaves.publica});
      }
      if (url.pathname === '/api/push/inscrever') {
        if (request.method === 'POST') return await pushInscrever(request,env);
        if (request.method === 'DELETE') return await pushDesinscrever(request,env);
      }
      if (url.pathname === '/api/perfil') return await rotaPerfil(request,env);
      if (request.method === 'GET' && url.pathname === '/api/youtube') {
        const conta = await obterConta(request,env);
        if (!conta) return json({erro:'Cadastre o regente antes de buscar hinos.'},401);
        const termo = (url.searchParams.get('q') || '').trim();
        if (termo.length < 2 || termo.length > 120) return json({erro:'Digite de 2 a 120 caracteres para buscar.'},400);
        if (!env.YOUTUBE_API_KEY) return json({erro:'A busca do YouTube ainda precisa ser configurada pelo administrador.'},503);
        const consulta = new URL('https://www.googleapis.com/youtube/v3/search');
        consulta.searchParams.set('part','snippet');
        consulta.searchParams.set('type','video');
        consulta.searchParams.set('maxResults','8');
        consulta.searchParams.set('q',termo);
        consulta.searchParams.set('key',env.YOUTUBE_API_KEY);
        const resposta = await fetch(consulta.toString());
        if (!resposta.ok) {
          console.error('YouTube API status:',resposta.status);
          return json({erro:resposta.status === 403 ? 'A chave do YouTube está sem permissão ou a cota de buscas acabou.' : 'Não foi possível buscar no YouTube agora.'},502);
        }
        const dados = await resposta.json();
        return json((dados.items || []).filter(item => /^[A-Za-z0-9_-]{11}$/.test(item.id?.videoId || '')).map(item => ({
          id:item.id.videoId,
          titulo:(item.snippet?.title || '').slice(0,150),
          canal:(item.snippet?.channelTitle || '').slice(0,150)
        })));
      }
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
          if (data.data_louvor >= hoje()) {
            ctx.waitUntil(Promise.allSettled([
              pushAvisar(env,'midia'),
              ...(data.modo === 'vivo' ? [pushAvisar(env,'musicos')] : [])
            ]));
          }
          return json({ok:true,id:resultados[1].meta.last_row_id,data_passada:data.data_louvor < hoje()},201);
        }
        const recebido = url.pathname.match(/^\/api\/hinos\/(\d+)\/recebido$/);
        if (recebido && Number.isSafeInteger(Number(recebido[1]))) {
          const erro = verificarSenha(request.headers.get('X-Repertorio-Senha'), env);
          if (erro) return erro;
          const anterior = await env.DB.prepare('SELECT perfil_id, recebido FROM hinos WHERE id = ?').bind(Number(recebido[1])).first();
          const result = await env.DB.prepare('UPDATE hinos SET recebido = 1 WHERE id = ?').bind(Number(recebido[1])).run();
          if (result.meta.changes && anterior?.perfil_id && !anterior.recebido) {
            ctx.waitUntil(pushAvisar(env,'regente',anterior.perfil_id));
          }
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
