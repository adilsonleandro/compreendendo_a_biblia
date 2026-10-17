/* ============================================================
   ESTUDOS PROFUNDOS — Compreendendo a Bíblia
   Motor das páginas estudos-profundos.html e estudo.html
   ============================================================ */

// ---------- 2) CAMINHOS DAS BÍBLIAS (4 versões) ----------
// O leitor procura os arquivos JSON nesta ordem e usa o primeiro que abrir.
// Se as suas Bíblias estiverem em outra pasta, ajuste aqui (uma linha só).
const CAMINHOS_BIBLIA = {
  NAA:  ['biblia/NAA.json',  'js/biblia/NAA.json',  'biblia/naa.json',  'js/biblia/naa.json'],
  NTLH: ['biblia/NTLH.json', 'js/biblia/NTLH.json', 'biblia/ntlh.json', 'js/biblia/ntlh.json'],
  NVI:  ['biblia/NVI.json',  'js/biblia/NVI.json',  'biblia/nvi.json',  'js/biblia/nvi.json'],
  ACF:  ['biblia/ACF.json',  'js/biblia/ACF.json',  'biblia/acf.json',  'js/biblia/acf.json']
};
const ORDEM_VERSOES = ['NAA', 'NTLH', 'NVI', 'ACF'];

// ---------- 3) NOMES DOS LIVROS ----------
const NOMES_LIVROS = { gn:'Gênesis', ex:'Êxodo', lv:'Levítico', nm:'Números', dt:'Deuteronômio', js:'Josué', jz:'Juízes', rt:'Rute', '1sm':'1 Samuel', '2sm':'2 Samuel', '1rs':'1 Reis', '2rs':'2 Reis', '1cr':'1 Crônicas', '2cr':'2 Crônicas', ed:'Esdras', ne:'Neemias', et:'Ester', jb:'Jó', sl:'Salmos', pv:'Provérbios', ec:'Eclesiastes', ct:'Cânticos', is:'Isaías', jr:'Jeremias', lm:'Lamentações', ez:'Ezequiel', dn:'Daniel', os:'Oséias', jl:'Joel', am:'Amós', ob:'Obadias', jn:'Jonas', mq:'Miqueias', na:'Naum', hc:'Habacuque', sf:'Sofonias', ag:'Ageu', zc:'Zacarias', ml:'Malaquias', mt:'Mateus', mc:'Marcos', lc:'Lucas', jo:'João', at:'Atos', rm:'Romanos', '1co':'1 Coríntios', '2co':'2 Coríntios', gl:'Gálatas', ef:'Efésios', fp:'Filipenses', cl:'Colossenses', '1ts':'1 Tessalonicenses', '2ts':'2 Tessalonicenses', '1tm':'1 Timóteo', '2tm':'2 Timóteo', tt:'Tito', fm:'Filemom', hb:'Hebreus', tg:'Tiago', '1pe':'1 Pedro', '2pe':'2 Pedro', '1jo':'1 João', '2jo':'2 João', '3jo':'3 João', jd:'Judas', ap:'Apocalipse' };

const MAPA_DIRETO = { 'gênesis':'gn', genesis:'gn', gen:'gn', 'êxodo':'ex', exodo:'ex', exo:'ex', levitico:'lv', lev:'lv', numeros:'nm', num:'nm', 'deuteronômio':'dt', deuteronomio:'dt', deut:'dt', 'josué':'js', josue:'js', jos:'js', juizes:'jz', jud:'jz', rute:'rt', '1samuel':'1sm', '2samuel':'2sm', '1reis':'1rs', '2reis':'2rs', '1crônicas':'1cr', '1cronicas':'1cr', '2cronicas':'2cr', esdras:'ed', neemias:'ne', ester:'et', 'jó':'jb', job:'jb', salmo:'sl', salmos:'sl', sal:'sl', proverbios:'pv', prov:'pv', eclesiastes:'ec', ecles:'ec', cantares:'ct', 'isaías':'is', isaias:'is', isa:'is', jeremias:'jr', jer:'jr', lamentacoes:'lm', ezequiel:'ez', eze:'ez', daniel:'dn', dan:'dn', 'oséias':'os', oseias:'os', joel:'jl', amos:'am', obadias:'ob', jonas:'jn', miqueias:'mq', naum:'na', habacuque:'hc', hab:'hc', sofonias:'sf', ageu:'ag', zacarias:'zc', zac:'zc', malaquias:'ml', mal:'ml', mateus:'mt', mat:'mt', marcos:'mc', 'joão':'jo', joao:'jo', atos:'at', romanos:'rm', rom:'rm', corintios:'1co', cor:'1co', galatas:'gl', efesios:'ef', filipenses:'fp', fil:'fp', colossenses:'cl', tessalonicenses:'1ts', tes:'1ts', timoteo:'1tm', tim:'1tm', tito:'tt', filemom:'fm', hebreus:'hb', heb:'hb', tiago:'tg', pedro:'1pe', judas:'jd', apocalipse:'ap', apo:'ap', apoc:'ap', revelacao:'ap' };

function limparTexto(s){ return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim(); }

function abrevLivro(nome){
  const bruto = String(nome || '').toLowerCase().trim().replace(/\s+/g, '');
  if (NOMES_LIVROS[bruto]) return bruto;              // já é abreviação (gn, ap, 1co...)
  if (MAPA_DIRETO[bruto]) return MAPA_DIRETO[bruto];  // nome com acento (Jó, João, Isaías...)
  const k = limparTexto(bruto);
  if (NOMES_LIVROS[k]) return k;
  if (MAPA_DIRETO[k]) return MAPA_DIRETO[k];
  return k;                                           // último recurso
}

// ---------- 4) CARREGAMENTO DAS BÍBLIAS ----------
const BIBLIA = {};
let bibliaCarregada = false;

function normalizarBiblia(dados){
  const saida = {};
  const add = (livro, cap, vers, txt) => {
    if (!livro || txt == null || txt === '') return;
    const l = saida[livro] = saida[livro] || {};
    const c = l[String(Number(cap))] = l[String(Number(cap))] || {};
    c[String(Number(vers))] = String(txt).trim();
  };
  if (Array.isArray(dados)) {                          // formato: lista plana
    dados.forEach(it => add(
      abrevLivro(it.book || it.livro || it.abbrev || it.abrev),
      it.chapter ?? it.capitulo ?? it.cap,
      it.verse ?? it.versiculo ?? it.v,
      it.text ?? it.texto));
    return Object.keys(saida).length ? saida : null;
  }
  if (!dados || typeof dados !== 'object') return null;
  const listaLivros = dados.books || dados.livros;
  if (Array.isArray(listaLivros)) {                    // formato: { books: [...] }
    listaLivros.forEach(b => {
      const ab = abrevLivro(b.abbrev || b.abrev || b.name || b.nome || b.book);
      (b.chapters || b.capitulos || []).forEach((versos, i) => {
        const arr = Array.isArray(versos) ? versos : Object.values(versos || {});
        arr.forEach((t, j) => add(ab, i + 1, j + 1, t));
      });
    });
    return Object.keys(saida).length ? saida : null;
  }
  Object.keys(dados).forEach(chave => {                // formato: { livro: { cap: { vers: texto } } }
    const ab = abrevLivro(chave);
    const caps = dados[chave];
    if (!caps || typeof caps !== 'object') return;
    if (Array.isArray(caps)) {                         // livro como lista de capítulos
      caps.forEach((versos, i) => {
        const arr = Array.isArray(versos) ? versos : Object.values(versos || {});
        arr.forEach((t, j) => add(ab, i + 1, j + 1, t));
      });
      return;
    }
    Object.keys(caps).forEach(cap => {
      const versos = caps[cap];
      if (Array.isArray(versos)) versos.forEach((t, j) => add(ab, cap, j + 1, t));
      else if (versos && typeof versos === 'object')
        Object.keys(versos).forEach(v => add(ab, cap, v, versos[v]));
    });
  });
  return Object.keys(saida).length > 20 ? saida : null; // Bíblia completa tem 66 livros
}

async function carregarBiblia(){
  if (bibliaCarregada) return;
  bibliaCarregada = true;
  await Promise.all(ORDEM_VERSOES.map(async v => {
    for (const caminho of CAMINHOS_BIBLIA[v]) {
      try {
        const r = await fetch(caminho);
        if (!r.ok) continue;
        const norm = normalizarBiblia(await r.json());
        if (norm) { BIBLIA[v] = norm; return; }
      } catch (e) { /* tenta o próximo caminho */ }
    }
  }));
  if (popupCtx && popup && !popup.hidden) desenharPopup();
}

// ---------- 5) UTILITÁRIOS ----------
function expandirVersos(v){
  if (Array.isArray(v)) return v.map(Number);
  const nums = [];
  String(v).split(',').forEach(parte => {
    const p = parte.trim();
    const m = p.match(/^(\d+)\s*[-–a]\s*(\d+)$/);
    if (m) { for (let i = +m[1]; i <= +m[2]; i++) nums.push(i); }
    else if (/^\d+$/.test(p)) nums.push(+p);
  });
  return nums;
}

function textoVersiculo(versao, livro, cap, vers){
  const b = BIBLIA[versao]; if (!b) return null;
  const c = (b[livro] || {})[String(Number(cap))]; if (!c) return null;
  const partes = expandirVersos(vers).map(n => {
    const t = c[String(Number(n))];
    return t ? `<b>${n}</b> ${t}` : null;
  }).filter(Boolean);
  return partes.length ? partes.join(' ') : null;
}

// ---------- 6) POPUP DO VERSÍCULO ----------
let popup = null, popupCtx = null, esconderTimer = null;
let versaoAtual = localStorage.getItem('epVersaoBiblica') || 'NAA';

function criarPopup(){
  popup = document.createElement('div');
  popup.className = 'ep-popup';
  popup.hidden = true;
  popup.innerHTML = '<div class="ep-popup-tabs"></div><div class="ep-popup-texto"></div>';
  document.body.appendChild(popup);
  popup.addEventListener('mouseenter', () => clearTimeout(esconderTimer));
  popup.addEventListener('mouseleave', agendarEsconder);
  document.addEventListener('click', e => {
    if (popup && !popup.hidden && !popup.contains(e.target) && !e.target.closest('.ep-vers')) fecharPopup();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharPopup(); });
  window.addEventListener('scroll', fecharPopup, { passive: true });
  window.addEventListener('resize', fecharPopup);
}

function versHTML(v){
  return `<span class="ep-vers" tabindex="0" data-ref="${v.ref}" data-livro="${v.livro}" data-cap="${v.cap}" data-vers="${v.vers}">📖 ${v.ref}</span>`;
}

function ligarVersiculos(raiz){
  if (window.marcarReferencias) window.marcarReferencias(raiz);
  raiz.querySelectorAll('.ep-vers').forEach(el => {
    el.addEventListener('mouseenter', () => { clearTimeout(esconderTimer); abrirPopup(el); });
    el.addEventListener('mouseleave', agendarEsconder);
    el.addEventListener('click', e => { e.stopPropagation(); clearTimeout(esconderTimer); abrirPopup(el); });
    el.addEventListener('focus', () => abrirPopup(el));
  });
}

function agendarEsconder(){ esconderTimer = setTimeout(fecharPopup, 180); }
function fecharPopup(){ if (popup) popup.hidden = true; popupCtx = null; }

function abrirPopup(el){
  if (!popup) criarPopup();
  popupCtx = { livro: el.dataset.livro, cap: el.dataset.cap, vers: el.dataset.vers, ref: el.dataset.ref };
  desenharPopup();
  popup.hidden = false;
  posicionarPopup(el);
}


function desenharPopup(){
  popup.querySelector('.ep-popup-tabs').innerHTML = '';
  const ctx = popupCtx;
  popup.querySelector('.ep-popup-texto').innerHTML = ctx && ctx.ref
    ? montarLinksVersiculo(ctx.ref)
    : '<p class="ep-popup-erro">Não foi possível identificar o versículo.</p>';
}


function posicionarPopup(el){
  const r = el.getBoundingClientRect();
  const pw = popup.offsetWidth, ph = popup.offsetHeight;
  let top = r.bottom + 10;
  if (top + ph > window.innerHeight - 8) top = Math.max(8, r.top - ph - 10);
  let left = r.left + r.width / 2 - pw / 2;
  left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
  popup.style.top = top + 'px';
  popup.style.left = left + 'px';
}


// ---------- 7) ÍNDICE (gerado por gerar_indice.py) ----------
let INDICE = null;
const CACHE_ESTUDOS = {};

// Abreviações de livros que o MAPA_DIRETO original não cobre
const MAPA_EXTRA = {
  lucas:'lc', '1corintios':'1co', '2corintios':'2co', '1tessalonicenses':'1ts',
  '2tessalonicenses':'2ts', '1timoteo':'1tm', '2timoteo':'2tm', '1pedro':'1pe',
  '2pedro':'2pe', '1joao':'1jo', '2joao':'2jo', '3joao':'3jo', '1samuel':'1sm',
  '2samuel':'2sm', '1reis':'1rs', '2reis':'2rs', '1cronicas':'1cr', '2cronicas':'2cr'
};
function abrevRef(nome){
  const k = limparTexto(nome).replace(/\s+/g, '');
  return MAPA_EXTRA[k] || abrevLivro(nome);
}

async function carregarIndice(){
  if (!window.INDICE_ESTUDOS) throw new Error('indice');
  INDICE = window.INDICE_ESTUDOS;
  return INDICE;
}

function todosEstudos(){
  if (!INDICE) return [];
  return INDICE.temas.flatMap(t => t.estudos.map(e => ({ ...e, tema: t.nome })));
}

// ---------- 8) MODO CARDS (estudos-profundos.html) ----------
function initCards(){
  const grid = document.getElementById('epGrid');
  const busca = document.getElementById('epBusca');
  const vazio = document.getElementById('epVazio');

  function cardHTML(e){
    return `<a class="ep-card" href="leitor.html?id=${encodeURIComponent(e.id)}">
      <span class="ep-card-icone">📖</span>
      <span class="ep-card-titulo">${e.titulo}</span>
      <span class="ep-card-gancho">${e.subtitulo || e.versiculo || ''}</span>
      <span class="ep-card-cta">Abrir estudo →</span></a>`;
  }
  function desenhar(){
    const f = limparTexto(busca.value);
    let html = '';
    INDICE.temas.forEach(t => {
      const itens = t.estudos.filter(e =>
        !f || limparTexto(e.titulo + ' ' + (e.subtitulo || '') + ' ' + t.nome).includes(f));
      if (!itens.length) return;
      html += `<h2 class="ep-tema-titulo" style="grid-column:1/-1">${t.nome}</h2>`;
      html += itens.map(cardHTML).join('');
    });
    grid.innerHTML = html;
    vazio.hidden = html !== '';
  }
  busca.addEventListener('input', desenhar);
  desenhar();
}

// ---------- 9) MODO LEITOR (leitor.html?id=...) ----------
async function carregarEstudo(id){
  const meta = todosEstudos().find(e => e.id === id);
  if (!meta) return null;
  const dados = (window.ESTUDOS_JSON || {})[id];
  if (!dados) throw new Error('Conteúdo do estudo não encontrado: ' + id);
  return dados;
}


function parseRef(txt){
  const s = String(txt || '').trim();
  const m = s.match(/^(.+?)\s+(\d+):(\d+(?:\s*[-–]\s*\d+)?)$/);
  if (!m) return null;
  return { ref: s, livro: abrevRef(m[1]), cap: m[2], vers: m[3].replace(/\s+/g, '') };
}
function versiculosHTML(lista){
  const refs = (lista || []).map(parseRef).filter(Boolean);
  if (!refs.length) return '';
  return `<div class="ep-vers-lista">${refs.map(versHTML).join('')}</div>` +
         `<p class="ep-vers-dica">💡 Passe o mouse (ou toque) em um versículo para ler o texto nas 4 versões.</p>`;
}
function paragrafosHTML(lista){
  return (lista || []).map(p => `<p>${p}</p>`).join('');
}
function subsecoesHTML(subs){
  return (subs || []).map(sub =>
    `<h3>${sub.titulo}</h3>${paragrafosHTML(sub.paragrafos)}${versiculosHTML(sub.versiculos)}`
  ).join('');
}

async function initLeitor(){
  const alvo = document.getElementById('epEstudo');
  const id = new URLSearchParams(location.search).get('id');
  let dados = null;
  try {
    dados = await carregarEstudo(id);
  } catch (e) {
    alvo.innerHTML = `<div class="ep-conclusao"><h2>Erro ao abrir o estudo</h2><p>${e.message}</p></div>`;
    return;
  }
  if (!dados){
    alvo.innerHTML = '<div class="ep-conclusao"><h2>Estudo não encontrado</h2><p>Volte à página de estudos e escolha um tema.</p></div>';
    return;
  }
  document.title = dados.titulo + ' — Compreendendo a Bíblia';

  const lista = todosEstudos();
  const i = lista.findIndex(e => e.id === id);
  const anterior = lista[i - 1], proximo = lista[i + 1];

  let html = `<h1 class="ep-titulo">${dados.titulo}</h1>`;
  if (dados.subtitulo) html += `<p class="ep-subtitulo">${dados.subtitulo}</p>`;

  const verso = dados.versiculo_memorizar;
  if (verso){
    const txt = typeof verso === 'string' ? verso : verso.texto;
    const ref = typeof verso === 'string' ? '' : verso.referencia;
    html += `<div class="ep-resumo"><h2>📌 Verso para memorizar</h2><p>${txt}</p>${ref ? `<p><b>${ref}</b></p>` : ''}</div>`;
  }

  (dados.secoes || []).forEach(s => {
    html += `<section class="ep-secao"><h2>${s.titulo}</h2>` +
            paragrafosHTML(s.paragrafos) +
            versiculosHTML(s.versiculos) +
            subsecoesHTML(s.subsecoes) +
            `</section>`;
  });

  if (dados.linha_do_tempo && dados.linha_do_tempo.length){
    html += `<section class="ep-secao"><h2>Linha do tempo</h2><ul>${dados.linha_do_tempo.map(x => `<li>${x}</li>`).join('')}</ul></section>`;
  }
  
    if (dados.perguntas && dados.perguntas.length){
    const itensPerg = dados.perguntas.map((p, i) => {
      const pergunta = typeof p === 'string' ? p : p.pergunta;
      const resposta = typeof p === 'string' ? '' : (p.resposta || '');
      const idResp = `ep-resp-${i}`;
      const botao = resposta
        ? `<button type="button" class="ep-btn-resposta" aria-expanded="false" aria-controls="${idResp}">Ver resposta</button>`
        : '';
      const corpo = resposta
        ? `<div class="ep-resposta" id="${idResp}" hidden>${resposta}</div>`
        : '';
      return `<li class="ep-pergunta-item"><p class="ep-pergunta-texto">${pergunta}</p>${botao}${corpo}</li>`;
    }).join('');
    html += `<section class="ep-perguntas"><h2>🔍 Perguntas para reflexão</h2><ol>${itensPerg}</ol></section>`;
  }


  if (dados.fontes && dados.fontes.length){
    html += `<section class="ep-secao"><h2>Fontes</h2><ul>${dados.fontes.map(f => `<li>${f}</li>`).join('')}</ul></section>`;
  }

  html += `<div class="ep-nav-estudos">`;
  html += anterior ? `<a class="ep-nav-link" href="leitor.html?id=${anterior.id}">← ${anterior.titulo}</a>` : '<span></span>';
  html += `<a class="ep-nav-link" href="estudos-profundos.html">📚 Todos os estudos</a>`;
  html += proximo ? `<a class="ep-nav-link" href="leitor.html?id=${proximo.id}">${proximo.titulo} →</a>` : '<span></span>';
  html += `</div>`;

  alvo.innerHTML = html;
  ligarVersiculos(alvo);
}

// ---------- 10) BOOT ----------
const btnMenu = document.getElementById('epMenuBtn');
if (btnMenu) btnMenu.addEventListener('click', () => document.getElementById('epNav').classList.toggle('ep-nav-aberta'));

async function boot(){
  const alvo = document.getElementById('epGrid') || document.getElementById('epEstudo');
  try {
    await carregarIndice();
  } catch (e) {
    if (alvo) alvo.innerHTML = '<p class="ep-popup-erro">Não consegui carregar dados/indice.json. Rode python gerar_indice.py e abra o site por http://localhost (não por duplo clique).</p>';
    return;
  }
  if (document.getElementById('epGrid')) initCards();
  if (document.getElementById('epEstudo')){
    await initLeitor();
    // carregarBiblia();  // desativado: textos bíblicos agora são links externos
  }
}
boot();

document.addEventListener('click', e => {
  const btn = e.target.closest('.ep-btn-resposta');
  if (!btn) return;
  const alvo = document.getElementById(btn.getAttribute('aria-controls'));
  const abrir = alvo.hidden;
  alvo.hidden = !abrir;
  btn.setAttribute('aria-expanded', String(abrir));
  btn.textContent = abrir ? 'Ocultar resposta' : 'Ver resposta';
});


