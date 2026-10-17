// Links do popup e marcação automática das referências bíblicas no texto.
(function () {
  // Versões exibidas no popup. Para trocar um site, edite só o campo "url".
  // {ref} é substituído pela referência, por exemplo "Apocalipse 1:7".
  const VERSOES = [
    { sigla: 'NAA',  nome: 'Nova Almeida Atualizada', url: 'https://www.biblegateway.com/passage/?search={ref}&version=NAA' },
    { sigla: 'NTLH', nome: 'Nova Tradução na Linguagem de Hoje', url: 'https://www.biblegateway.com/passage/?search={ref}&version=NTLH' },
    { sigla: 'NVI',  nome: 'Nova Versão Internacional', url: 'https://www.biblegateway.com/passage/?search={ref}&version=NVI-PT' },
    { sigla: 'ACF',  nome: 'Almeida Corrigida Fiel', url: 'https://www.biblegateway.com/passage/?search={ref}&version=ACF' }
  ];

  function linkVersiculo(ref, url) {
    return url.replace('{ref}', encodeURIComponent(ref));
  }

  function montarLinksVersiculo(ref) {
    const itens = VERSOES.map(v =>
      `<li><a href="${linkVersiculo(ref, v.url)}" target="_blank" rel="noopener">${v.sigla} — ${v.nome}</a></li>`
    ).join('');
    return `<p><b>${ref}</b></p><p>Abra o texto em cada versão:</p><ul>${itens}</ul>`;
  }

  // ---------- Marcação automática das referências no texto ----------
  const LIVROS = [
    '1 Coríntios', '2 Coríntios', '1 Tessalonicenses', '2 Tessalonicenses',
    '1 Timóteo', '2 Timóteo', '1 Samuel', '2 Samuel', '1 Reis', '2 Reis',
    '1 Crônicas', '2 Crônicas', '1 Pedro', '2 Pedro', '1 João', '2 João', '3 João',
    'Gênesis', 'Êxodo', 'Levítico', 'Números', 'Deuteronômio', 'Josué', 'Juízes', 'Rute',
    'Esdras', 'Neemias', 'Ester', 'Jó', 'Salmos', 'Salmo', 'Provérbios', 'Eclesiastes',
    'Cantares', 'Isaías', 'Jeremias', 'Lamentações', 'Ezequiel', 'Daniel', 'Oseias',
    'Oséias', 'Joel', 'Amós', 'Obadias', 'Jonas', 'Miqueias', 'Naum', 'Habacuque',
    'Sofonias', 'Ageu', 'Zacarias', 'Malaquias', 'Mateus', 'Marcos', 'Lucas', 'João',
    'Atos', 'Romanos', 'Gálatas', 'Efésios', 'Filipenses', 'Colossenses', 'Tessalonicenses',
    'Timóteo', 'Tito', 'Filemom', 'Hebreus', 'Tiago', 'Judas', 'Apocalipse'
  ];

  const ALTERNATIVAS = LIVROS
    .slice()
    .sort((a, b) => b.length - a.length)
    .map(l => l.replace(/ /g, '\\s+'))
    .join('|');

  // Ex.: "Atos 1:10-11", "Tito 2:13", "Hebreus 9:27-28; 3:20-21"
  const RE = new RegExp(
    '(?<![\\p{L}\\d])(' + ALTERNATIVAS + ')\\s+(\\d{1,3}:\\d{1,3}(?:[-–]\\d{1,3})?(?:\\s*;\\s*\\d{1,3}:\\d{1,3}(?:[-–]\\d{1,3})?)*)',
    'gu'
  );

  function criarRef(ref) {
    const s = document.createElement('span');
    s.className = 'ep-vers';
    s.tabIndex = 0;
    s.dataset.ref = ref;
    const m = ref.match(/^(.+?)\s+(\d+):(\d+)/);
    s.dataset.livro = m ? m[1] : '';
    s.dataset.cap = m ? m[2] : '';
    s.dataset.vers = m ? m[3] : '';
    s.textContent = ref;
    return s;
  }

  function marcarNo(no) {
    RE.lastIndex = 0;
    const texto = no.nodeValue;
    const frag = document.createDocumentFragment();
    let pos = 0, m, achou = false;
    while ((m = RE.exec(texto))) {
      achou = true;
      frag.appendChild(document.createTextNode(texto.slice(pos, m.index)));
      const livro = m[1].replace(/\s+/g, ' ');
      m[2].split(/\s*;\s*/).forEach((p, i) => {
        if (i > 0) frag.appendChild(document.createTextNode('; '));
        frag.appendChild(criarRef(livro + ' ' + p));
      });
      pos = m.index + m[0].length;
    }
    if (!achou) return;
    frag.appendChild(document.createTextNode(texto.slice(pos)));
    no.parentNode.replaceChild(frag, no);
  }

  function marcarReferencias(raiz) {
    if (!raiz) return;
    const nos = [];
    const w = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT);
    let no;
    while ((no = w.nextNode())) {
      if (no.parentNode && !no.parentNode.closest('.ep-vers, a, script, style, button')) nos.push(no);
    }
    nos.forEach(marcarNo);
  }

  window.VERSOES_BIBLIA = VERSOES;
  window.montarLinksVersiculo = montarLinksVersiculo;
  window.marcarReferencias = marcarReferencias;
})();

