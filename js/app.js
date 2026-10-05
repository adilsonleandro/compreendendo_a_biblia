// ============================================================
// FUNCIONALIDADES DO SITE — Compreendendo a Bíblia
// ============================================================

// ============ UTILITÁRIOS ============

function getElement(id) {
  return document.getElementById(id);
}

function createElement(tag, className, content) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (content) el.innerHTML = content;
  return el;
}

// ============ HEADER MOBILE ============

function initNavToggle() {
  const toggle = getElement('navToggle');
  const nav = getElement('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
}

// ============ PÁGINA INICIAL ============

function renderHomePage() {
  const app = getElement('app');
  if (!app) return;

  const licaoAtual = LICOES[0];
  // Capítulos do estudo "A Bíblia" (mesma fonte do tema-biblia.html)
  const fonte = (window.TEMA_BIBLIA && window.TEMA_BIBLIA.capitulos)
    ? window.TEMA_BIBLIA
    : (window.DataLoader && DataLoader.getCapitulos && DataLoader.getCapitulos()) || {};
  const capitulosDestaque = (fonte.capitulos || []).filter(c => c && c.secoes && c.secoes.length > 0);


  app.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <h1>Compreendendo a Bíblia</h1>
        <p>Estudos bíblicos por temas, lições da Escola Sabatina e perguntas e respostas para aprofundar sua fé.</p>
        <div class="hero-cta">
          <a href="licoes.html" class="btn btn-primary">Lição da Semana</a>
          <a href="tema-biblia.html" class="btn btn-outline">Estudos por Tema</a>
          <a href="doutrinas.html" class="btn btn-outline">Doutrinas</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="licao-destaque">
          <span class="badge">Lição da Semana</span>
          <h2>${licaoAtual.titulo}</h2>
          <div class="versiculo">${licaoAtual.versiculo}</div>
          <p>${licaoAtual.resumo}</p>
          <a href="licoes.html" class="btn btn-primary">Estudar Agora</a>
        </div>

        <div class="section-title">
          <h2>Estudos</h2>
          <p>Escolha um estudo e comece agora</p>
        </div>

        <div class="cards-grid">
          <div class="card estudo-card" onclick="window.location.href='tema-biblia.html'">
            <span class="card-badge">A Bíblia</span>
            <h3>${TEMA_BIBLIA.titulo}</h3>
            <div class="versiculo">${TEMA_BIBLIA.descricao}</div>
            <p>Estudo completo sobre como estudar e compreender as Escrituras Sagradas.</p>
            <div class="card-footer">
              <a href="tema-biblia.html" class="btn btn-primary btn-small">Estudar</a>
            </div>
          </div>
          <div class="card estudo-card" onclick="window.location.href='doutrinas.html'">
            <span class="card-badge">Doutrinas</span>
            <h3>Estudo das Doutrinas</h3>
            <div class="versiculo">${(typeof DOTRINAS !== 'undefined' && DOTRINAS.descricao) ? DOTRINAS.descricao : 'Crenças fundamentais da Igreja Adventista do Sétimo Dia.'}</div>
            <p>Crenças fundamentais da Igreja Adventista do Sétimo Dia, com textos bíblicos nas 4 versões.</p>
            <div class="card-footer">
              <a href="doutrinas.html" class="btn btn-primary btn-small">Estudar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ============ PÁGINA DE LIÇÕES ============

// Verificar se a lição está disponível (baseado no site da CPB)
function isLicaoAvailable(licao) {
  // Data atual
  const hoje = new Date();
  
  // Data de início da lição (extraída do campo data)
  // Formato esperado: "28 de Setembro de 2026"
  const dataLicao = parseDataLicao(licao.data);
  
  if (!dataLicao) return true; // Se não conseguir parsear, mostra a lição
  
  // A lição está disponível se a data atual for >= data da lição
  return hoje >= dataLicao;
}

// Parse da data da lição
function parseDataLicao(dataStr) {
  const meses = {
    'janeiro': 0, 'fevereiro': 1, 'março': 2, 'abril': 3,
    'maio': 4, 'junho': 5, 'julho': 6, 'agosto': 7,
    'setembro': 8, 'outubro': 9, 'novembro': 10, 'dezembro': 11
  };
  
  // Formato: "28 de Setembro de 2026"
  const match = dataStr.match(/(\d+)\s+de\s+(\w+)\s+de\s+(\d{4})/i);
  if (!match) return null;
  
  const dia = parseInt(match[1]);
  const mes = meses[match[2].toLowerCase()];
  const ano = parseInt(match[3]);
  
  if (mes === undefined) return null;
  
  return new Date(ano, mes, dia);
}

function renderLicoesPage() {
  const app = getElement('app');
  if (!app) return;

  // Filtrar lições disponíveis
  const licoesDisponiveis = LICOES.filter(licao => isLicaoAvailable(licao));

  app.innerHTML = `
    <section class="section" style="padding-top: 40px;">
      <div class="container">
        <div class="section-title">
          <h2>Lições da Escola Sabatina</h2>
          <p>Estude a lição de cada semana e aprofunde-se na Palavra de Deus</p>
        </div>

        <div class="cards-grid">
          ${licoesDisponiveis.map((licao, index) => `
            <div class="card">
              <span class="card-badge">${licao.semana || ('Lição ' + (LICOES.indexOf(licao) + 1) + ' - 4º Trimestre 2026')}</span>
              <h3>${licao.titulo}</h3>
              <div class="versiculo">${licao.versiculo}</div>
              <p>${licao.resumo}</p>
              <div class="card-footer">
                <span class="card-date">${licao.data}</span>
                <a href="estudo-detalhe.html?tipo=licao&id=${licao.id}" class="btn btn-primary btn-small">Estudar</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ============ PÁGINA DE ESTUDOS ============

function renderEstudosPage() {
  const app = getElement('app');
  if (!app) return;

  app.innerHTML = `
    <section class="section" style="padding-top: 40px;">
      <div class="container">
        <div class="section-title">
          <h2>Estudos Bíblicos</h2>
          <p>Estudos organizados por temas para sua edificação espiritual</p>
        </div>

        <div class="cards-grid">
          <div class="card estudo-card" onclick="window.location.href='tema-biblia.html'">
            <span class="card-badge">A Bíblia</span>
            <h3>${TEMA_BIBLIA.titulo}</h3>
            <div class="versiculo">${TEMA_BIBLIA.descricao}</div>
            <p>Estudo completo sobre como estudar e compreender as Escrituras Sagradas.</p>
            <div class="card-footer">
              <a href="tema-biblia.html" class="btn btn-primary btn-small">Estudar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderEstudosCards(estudos) {
  if (estudos.length === 0) return '';
  return estudos.map(estudo => `
    <div class="card">
      <span class="card-badge">${estudo.tema}</span>
      <h3>${estudo.titulo}</h3>
      <div class="versiculo">${estudo.versiculo}</div>
      <p>${estudo.resumo}</p>
      <div class="card-footer">
        <a href="estudo-detalhe.html?id=${estudo.id}" class="btn btn-primary btn-small">Ler Estudo</a>
      </div>
    </div>
  `).join('');
}

function initEstudosFilters() {
  const searchInput = getElement('searchInput');
  const filterTags = getElement('filterTags');
  const grid = getElement('estudosGrid');
  const emptyState = getElement('emptyState');

  let temaAtual = 'Todos';
  let buscaAtual = '';

  function filtrar() {
    let resultados = ESTUDOS;

    if (temaAtual !== 'Todos') {
      resultados = resultados.filter(e => e.tema === temaAtual);
    }

    if (buscaAtual) {
      const termo = buscaAtual.toLowerCase();
      resultados = resultados.filter(e =>
        e.titulo.toLowerCase().includes(termo) ||
        e.resumo.toLowerCase().includes(termo) ||
        e.versiculo.toLowerCase().includes(termo)
      );
    }

    grid.innerHTML = renderEstudosCards(resultados);
    emptyState.style.display = resultados.length === 0 ? 'block' : 'none';
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      buscaAtual = e.target.value;
      filtrar();
    });
  }

  if (filterTags) {
    filterTags.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-tag')) {
        filterTags.querySelectorAll('.filter-tag').forEach(tag => tag.classList.remove('active'));
        e.target.classList.add('active');
        temaAtual = e.target.dataset.tema;
        filtrar();
      }
    });
  }
}

// ============ PÁGINA DE DETALHE ============

function renderDetalhePage() {
  const app = getElement('app');
  if (!app) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;
  const tipo = params.get('tipo') || 'estudo';

  let item;
  let tipoLabel;

  if (tipo === 'licao') {
    item = LICOES.find(l => l.id === id) || LICOES[0];
    tipoLabel = 'Lição da Escola Sabatina';
  } else {
    item = ESTUDOS.find(e => e.id === id) || ESTUDOS[0];
    tipoLabel = 'Estudo Bíblico';
  }

  const isLicao = tipo === 'licao';
  const lista = isLicao ? LICOES : ESTUDOS;
  const currentIndex = lista.findIndex(i => i.id === item.id);
  const prevItem = currentIndex > 0 ? lista[currentIndex - 1] : null;
  const nextItem = currentIndex < lista.length - 1 ? lista[currentIndex + 1] : null;

  const detalheUrl = (item) => {
    return isLicao
      ? `estudo-detalhe.html?tipo=licao&id=${item.id}`
      : `estudo-detalhe.html?id=${item.id}`;
  };

  // Verificar se é lição e tem abertura
  const abertura = isLicao && item.abertura ? item.abertura : null;

  app.innerHTML = `
    <div class="detalhe-header">
      <span class="card-badge" style="background: var(--secondary); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">${tipoLabel}</span>
      <h1>${item.titulo}</h1>
      ${isLicao ? '' : `<div class="versiculo">${item.versiculo}</div>`}
    </div>

    <div class="detalhe-content">
      ${abertura ? `
        <div class="abertura-licao">
          <div class="abertura-versiculo">
            <strong>Verso para memorizar:</strong><br>
            <strong>${abertura.versiculo}</strong> (${item.versiculo})
          </div>
          <div class="abertura-periodo">Período: ${abertura.periodo}</div>
        </div>
      ` : `
        <div class="texto-biblico">
          ${item.texto}
          <span class="ref">${item.versiculo}</span>
        </div>
      `}

      ${isLicao && item.leituras && item.leituras.length ? `
        <div class="leituras-semana" style="margin-top: 40px;">
          <h2>Leituras da Semana</h2>
          <p style="line-height: 2; font-size: 1.05rem;">
            ${item.leituras.map(l => `<a href="#" class="leitura-link" data-ref="${l.ref}" data-texto="${(l.versoes && l.versoes.naa) ? l.versoes.naa.replace(/"/g, '&quot;') : ''}" title="${(l.versoes && l.versoes.naa) ? l.versoes.naa.replace(/"/g, '&quot;') : 'Texto não disponível'}">${l.ref}</a>`).join('; ')}
          </p>
        </div>
      ` : ''}

      ${isLicao && item.dias && item.dias.length ? `
        <div class="resumo-dias" style="margin-top: 40px;">
          <h2>Resumo da Semana por Dia</h2>
          ${item.dias.map(d => `
            <div class="dia-resumo" style="margin-top: 28px;">
              <h3 style="color: var(--primary);">${d.dia}${d.titulo ? ' &mdash; ' + d.titulo : ''}</h3>
              ${(d.resumo || d.sintese || '').split(/\n\s*\n/).filter(p => p.trim()).map(p => `<p style="margin-top: 12px; line-height: 1.8;">${p}</p>`).join('')}
            </div>
          `).join('')}
          ${abertura && abertura.reflexao ? `<p class="abertura-reflexao" style="margin-top: 28px;"><em>${abertura.reflexao}</em></p>` : ''}
        </div>
      ` : ''}

      ${!isLicao ? `
      <div class="perguntas-section">
        <h2>Perguntas e Respostas</h2>
        ${item.perguntas.map((p, i) => `
          <div class="pergunta-card" id="pergunta-${i}">
            <div class="pergunta-header">
              <span class="pergunta-numero">${i + 1}</span>
              <span class="pergunta-texto">${p.pergunta}</span>
            </div>
            ${p.versoes && (p.versoes.naa || p.versoes.ntlh || p.versoes.nvi || p.versoes.acf) ? `
            <div class="pergunta-texto" style="padding: 12px 16px; background: var(--card-bg, #f8f9fa); border-radius: 8px; border-left: 3px solid var(--secondary);">
              <div class="versao-global-tabs" style="margin-bottom: 10px;">
                ${['naa', 'ntlh', 'nvi', 'acf'].filter(v => p.versoes[v]).map(v => `<button class="versao-tab ${v === 'naa' ? 'active' : ''}" data-v="${v}" onclick="trocarVersaoPergunta(this)">${v.toUpperCase()}</button>`).join('')}
              </div>
              ${['naa', 'ntlh', 'nvi', 'acf'].filter(v => p.versoes[v]).map(v => `<div class="versao-texto versao-texto-${v}" style="${v === 'naa' ? '' : 'display: none;'} line-height: 1.8;">${p.versoes[v]}</div>`).join('')}
            </div>` : ''}
            <div class="pergunta-content">
              <div class="resposta-biblia">
                <button class="btn-resposta" onclick="toggleResposta(${i})">
                  <span class="icone-resposta">+</span>
                  Ver Resposta
                </button>
                <div class="resposta-conteudo" id="resposta-${i}">
                  <strong>Resposta:</strong> ${p.resposta}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      ` : ''}

      ${isLicao && item.estudoProfessor ? `
        <div style="text-align: center; margin: 32px 0;">
          <a href="estudo-professor.html?id=${item.id}" class="btn btn-primary" style="font-size: 1.1rem; padding: 16px 32px;">
            Estudo para Professores
          </a>
        </div>
      ` : ''}

      <div class="navegacao-licoes">
        ${prevItem
          ? `<a href="${detalheUrl(prevItem)}" class="nav-licao">← ${prevItem.titulo}</a>`
          : `<span class="nav-licao disabled">← Anterior</span>`
        }
        <a href="${isLicao ? 'licoes.html' : 'index.html'}" class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);">Voltar à Lista</a>
        ${nextItem
          ? `<a href="${detalheUrl(nextItem)}" class="nav-licao">${nextItem.titulo} →</a>`
          : `<span class="nav-licao disabled">Próximo →</span>`
        }
      </div>
    </div>

    <button class="back-to-top" id="backToTop" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑</button>
  `;
}

// ============ PÁGINA TEMA BÍBLIA (nova versão) ============
// Estado: capítulo/seção/seleção atuais e tradução escolhida
let temaBibliaState = {
  capitulo: 0,
  secao: 0,
  versao: 'naa'
};

// Monta uma única seção (capítulo e índice) com o seletor de tradução
function renderSecaoHTML(capitulo, secaoIndex) {
  const secoes = capitulo.secoes || [];
  const secao = secoes[secaoIndex] || {};
  const versao = temaBibliaState.versao;
  const perguntas = secao.perguntas || [];

  const tabs = ['naa', 'ntlh', 'nvi', 'acf'].map(v =>
    `<button class="versao-tab ${v === versao ? 'active' : ''}" onclick="trocarVersaoTema('${v}')">${v.toUpperCase()}</button>`
  ).join('');

  return `
    <div class="versao-global">
      <div class="versao-global-titulo">${capitulo.titulo} — ${limparTituloSecao(secao.titulo)}</div>
      <div class="versao-global-tabs">${tabs}</div>
    </div>

    <div class="perguntas-section">
      ${perguntas.map((p, i) => {
        const texto = (p.versoes && p.versoes[versao]) ? p.versoes[versao] : (p.texto || '');
        return `
          <div class="biblia-pergunta" id="pergunta-${secaoIndex}-${i}">
            <div class="pergunta-header">
              <span class="pergunta-numero">${p.numero}</span>
              <span class="pergunta-texto">${p.pergunta}</span>
            </div>
            <div class="pergunta-content">
              <div class="versiculo-biblia">
                <strong>${p.versiculo} (${versao.toUpperCase()})</strong>
                <p>${texto}</p>
              </div>
              <div class="resposta-biblia">
                <button class="btn-resposta" onclick="toggleRespostaCapitulo(${secaoIndex}, ${i})">
                  <span class="icone-resposta">+</span> Ver Resposta
                </button>
                <div class="resposta-conteudo" id="resposta-${secaoIndex}-${i}">
                  <strong>Resposta:</strong> ${p.resposta}
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Renderiza a página (cabeçalho + conteúdo da seção atual no centro)
function renderTemaBibliaPage() {
  const app = getElement('app');
  if (!app) return;

  const fonte = (typeof TEMA_BIBLIA !== 'undefined' && TEMA_BIBLIA && TEMA_BIBLIA.capitulos)
    ? TEMA_BIBLIA
    : (DataLoader.getCapitulos && DataLoader.getCapitulos()) || {};

  const capitulos = fonte.capitulos || [];

  if (capitulos.length === 0) {
    app.innerHTML = `
      <div class="detalhe-header">
        <span class="card-badge">Tema</span>
        <h1>${fonte.titulo || 'Tema'}</h1>
        <div class="versiculo">Nenhum capítulo encontrado.</div>
      </div>
      <div class="detalhe-content">
        <a href="index.html" class="nav-licao">← Voltar ao Início</a>
      </div>
    `;
    renderTemaSidebar(capitulos);
    initTemaSidebarToggle();
    return;
  }

  const hashCap = window.location.hash.replace('#', '');
  const porHash = capitulos.findIndex(c => c && c.id === hashCap);
  const primeiroReal = capitulos.findIndex(c => c && c.secoes && c.secoes.length > 0);
  temaBibliaState.capitulo = porHash >= 0 ? porHash : (primeiroReal >= 0 ? primeiroReal : 0);
  temaBibliaState.secao = 0;

  app.innerHTML = `
    <div class="detalhe-header">
      <span class="card-badge" style="background: var(--secondary); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Tema</span>
      <h1>${fonte.titulo}</h1>
      <div class="versiculo">${fonte.descricao}</div>
    </div>

    <div class="detalhe-content" id="tema-conteudo">
      ${renderSecaoHTML(capitulos[0], 0)}
    </div>

    <div class="navegacao-licoes">
      <a href="index.html" class="nav-licao">← Voltar ao Início</a>
    </div>

    <button class="back-to-top" id="backToTop" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">↑</button>
  `;

  renderTemaSidebar(capitulos);
  initTemaSidebarToggle();
}

// Limpa o título da seção para o padrão "2.1 Título"
function limparTituloSecao(titulo) {
  if (!titulo) return '';
  let t = String(titulo).trim();
  // Remove sufixos: "- estudado dia 20/06/2020", "- 27/06/2020", "- Estudo em casa"
  t = t.replace(/\s*-\s*[Ee]studado\s+(?:dia\s+)?[\d/]+\s*$/, '');
  t = t.replace(/\s*-\s*\d{1,2}\/\d{1,2}\/\d{2,4}\s*$/, '');
  t = t.replace(/\s*-\s*[Ee]studo\s+em\s+casa\s*$/i, '');
  // Padroniza "N.M - Título" -> "N.M Título"
  t = t.replace(/^(\d+\.\d+)\s*-\s*(.+)$/, '$1 $2');
  return t.trim();
}


// Aba lateral com capítulos expansíveis (acordeão)
function renderTemaSidebar(capitulos) {
  const nav = getElement('temaSidebarNav');
  if (!nav) return;
  let html = '';
  let qtVazios = 0;
  capitulos.forEach((capitulo, i) => {
    const secoes = (capitulo && capitulo.secoes) || [];
    if (secoes.length === 0) { qtVazios++; return; }
    const secaoAtiva = (i === temaBibliaState.capitulo);
    html += `
      <div class="tema-capitulo ${secaoAtiva ? 'open' : ''}">
        <button class="tema-capitulo-btn" onclick="toggleTemaCapitulo(${i}, this)">
          <span class="tema-capitulo-seta">${secaoAtiva ? '▾' : '▸'}</span>
          ${capitulo.titulo}
        </button>
        <div class="tema-secoes ${secaoAtiva ? 'aberto' : ''}">
          ${secoes.map((secao, s) => `
            <button class="tema-secao-btn ${i === temaBibliaState.capitulo && s === temaBibliaState.secao ? 'active' : ''}"
                    onclick="abrirSecaoTema(${i}, ${s})">${limparTituloSecao(secao.titulo)}</button>
          `).join('')}
        </div>
      </div>`;
  });
  if (qtVazios > 0) {
    html += `<div class="tema-em-breve">⏳ Em breve teremos mais capítulos deste estudo.</div>`;
  }
  nav.innerHTML = html;
}


// Expande/recolhe um capítulo; abre a 1ª seção se ainda não houver nenhuma aberta
function toggleTemaCapitulo(c, btn) {
  const item = btn.closest('.tema-capitulo');
  if (!item) return;
  const aberto = item.classList.contains('open');
  // Fecha todos e abre só o clicado (acordeão)
  document.querySelectorAll('.tema-capitulo').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.tema-capitulo-seta').textContent = '▸';
    el.querySelector('.tema-secoes').classList.remove('aberto');
  });
  if (!aberto) {
    item.classList.add('open');
    btn.querySelector('.tema-capitulo-seta').textContent = '▾';
    item.querySelector('.tema-secoes').classList.add('aberto');
  }
}



// Ao clicar numa seção da lateral: guarda o estado e re-renderiza o centro
function abrirSecaoTema(c, s) {
  temaBibliaState.capitulo = c;
  temaBibliaState.secao = s;

  const capitulos = (typeof TEMA_BIBLIA !== 'undefined' && TEMA_BIBLIA && TEMA_BIBLIA.capitulos)
    ? TEMA_BIBLIA.capitulos
    : (DataLoader.getCapitulos && DataLoader.getCapitulos().capitulos) || [];

  const capitulo = capitulos[c] || {};
  const conteudo = getElement('tema-conteudo');
  if (conteudo) conteudo.innerHTML = renderSecaoHTML(capitulo, s);

  renderTemaSidebar(capitulos); // atualiza o "active" na lateral
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Troca a tradução (NAA/NTLH/NVI/AFC) e re-renderiza a seção atual
function trocarVersaoTema(novaVersao) {
  temaBibliaState.versao = novaVersao;

  const capitulos = (typeof TEMA_BIBLIA !== 'undefined' && TEMA_BIBLIA && TEMA_BIBLIA.capitulos)
    ? TEMA_BIBLIA.capitulos
    : (DataLoader.getCapitulos && DataLoader.getCapitulos().capitulos) || [];

  const capitulo = capitulos[temaBibliaState.capitulo] || {};
  const conteudo = getElement('tema-conteudo');
  if (conteudo) conteudo.innerHTML = renderSecaoHTML(capitulo, temaBibliaState.secao);
}

// Mostra/oculta a resposta de uma pergunta
function toggleRespostaCapitulo(secaoIdx, perguntaIdx) {
  const el = getElement(`resposta-${secaoIdx}-${perguntaIdx}`);
  if (!el) return;
  el.classList.toggle('aberta');
}



function scrollToCapituloSecao(capituloIndex, secaoIndex, event) {
  if (event) event.preventDefault();
  
  const secao = getElement(`capitulo-${capituloIndex}-secao-${secaoIndex}`);
  if (secao) {
    secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Atualizar link ativo
  const links = document.querySelectorAll('.tema-sidebar-nav a');
  links.forEach(link => link.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }

  // Fechar menu no celular
  const nav = getElement('temaSidebarNav');
  if (nav && nav.classList.contains('open')) {
    nav.classList.remove('open');
  }
}



function initTemaSidebarToggle() {
  const toggle = getElement('temaSidebarToggle');
  const nav = getElement('temaSidebarNav');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
}

function toggleRespostaSecao(secaoIndex, perguntaIndex) {
  const resposta = getElement(`secao-${secaoIndex}-resposta-${perguntaIndex}`);
  if (resposta) {
    resposta.classList.toggle('aberta');
  }
}

function toggleResposta(index) {
  const resposta = getElement(`resposta-${index}`);
  if (resposta) {
    resposta.classList.toggle('aberta');
  }
}

function trocarVersaoGlobal(versao, btn) {
  const capitulos = TEMA_BIBLIA.capitulos;
  
  capitulos.forEach((capitulo, c) => {
    capitulo.secoes.forEach((secao, s) => {
      secao.perguntas.forEach((p, i) => {
        const texto = document.querySelector(`#capitulo-${c}-secao-${s}-pergunta-${i} .versiculo-biblia p`);
        if (texto) {
          texto.textContent = p.versoes[versao];
        }
      });
    });
  });
  
  const tabs = btn.parentElement.querySelectorAll('.versao-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  btn.classList.add('active');
}

// ============ PÁGINA DE ESTUDO DO PROFESSOR ============

function renderEstudoProfessorPage() {
  const app = getElement('app');
  if (!app) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id')) || 1;

  const licao = LICOES.find(l => l.id === id) || LICOES[0];
  const estudo = licao.estudoProfessor;

  if (!estudo) {
    app.innerHTML = `
      <div class="container" style="padding: 60px 24px; text-align: center;">
        <h2>Estudo para Professores</h2>
        <p style="color: var(--text-light); margin-top: 16px;">Estudo não disponível para esta lição.</p>
        <a href="estudo-detalhe.html?tipo=licao&id=${licao.id}" class="btn btn-primary" style="margin-top: 24px;">Voltar à Lição</a>
      </div>
    `;
    return;
  }

  app.innerHTML = `
    <div class="professor-header">
      <div class="container">
        <span class="professor-badge">Material para Professores</span>
        <h1>${estudo.titulo}</h1>
        <p class="professor-subtitulo">${estudo.subtitulo}</p>
      </div>
    </div>

    ${estudo.capa ? `
    <div class="container" style="padding:  24px 24px 0;">
      <img src="${estudo.capa}" alt="Capa do material" style="width:100%;height:auto;border-radius:14px;box-shadow:var(--shadow);">
    </div>` : ''}

    <div class="container" style="padding: 40px 24px;">
      <div class="professor-objetivo">
        <h3>Objetivo da Lição</h3>
        <p>${estudo.objetivo}</p>
      </div>

      <div class="professor-versiculo">
        <h3>Verso para Memorização</h3>
        <p>"${estudo.versoChave}"</p>
      </div>

      <div class="professor-slides">
        <h3>Estrutura da Apresentação</h3>
        ${estudo.slides.map((slide, i) => `
          <div class="slide-card mapa-mental-item">
            <div class="slide-header" style="cursor:pointer;" onclick="const el = this.closest('.mapa-mental-item'); if(el) el.classList.toggle('fechado');">
              <span class="slide-number">${i + 1}</span>
              <h4>${slide.titulo.replace(/^Slide\s*\d+\s*:?\s*-?\s*/i, '').replace(/^\d+\s*[:\-.]\s*/, '')}</h4>
            </div>
            <ul class="slide-topicos">
              ${slide.topicos.map(t => {
                const parts = t.split(':');
                if (parts.length > 1) {
                  return `<li><strong>${parts[0]}:</strong>${parts.slice(1).join(':')}</li>`;
                }
                return `<li>${t}</li>`;
              }).join('')}
            </ul>
            ${slide.nota ? `<div class="slide-nota"><strong>Nota Didática:</strong> ${slide.nota}</div>` : ''}
          </div>
        `).join('')}
      </div>

      <div class="professor-aprofundamento">
        <h3>Aprofundamento Teológico (Para o Professor)</h3>
        ${estudo.aprofundamentos.map(ap => `
          <div class="aprofundamento-card mapa-mental-item">
            <h4 style="cursor:pointer;" onclick="const el = this.closest('.mapa-mental-item'); if(el) el.classList.toggle('fechado');">${ap.titulo}</h4>
            <p>${ap.texto}</p>
          </div>
        `).join('')}
      </div>

      <div class="navegacao-licoes">
        <a href="estudo-detalhe.html?tipo=licao&id=${licao.id}" class="nav-licao">← Voltar à Lição</a>
        <a href="licoes.html" class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);">Todas as Lições</a>
      </div>
    </div>
  `;
}

// ============ TOGGLE PERGUNTA ============

function togglePergunta(index) {
  const card = getElement(`pergunta-${index}`);
  if (card) {
    card.classList.toggle('aberta');
  }
}

// ============ BOTÃO VOLTAR AO TOPO ============

function initBackToTop() {
  const btn = getElement('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
}


// ============ PÁGINA ESTUDO DAS DOUTRINAS ============
let doutrinasState = { tema: -1, versao: 'naa', refSel: {} };

function renderDoutrinasPage() {
  const app = getElement('app');
  if (!app) return;

  const D = (typeof DOTRINAS !== 'undefined') ? DOTRINAS : null;

  if (!D || !D.temas || D.temas.length === 0) {
    app.innerHTML = `
      <div class="detalhe-header">
        <span class="card-badge">Doutrinas</span>
        <h1>${D && D.titulo ? D.titulo : 'Estudo das Doutrinas'}</h1>
        <div class="versiculo">Nenhum tema encontrado.</div>
      </div>
      <div class="detalhe-content">
        <p>Gere o arquivo <code>js/dados/dados-dotrinas.js</code> com <code>python importar_dotrinas.py</code>.</p>
        <a href="index.html" class="nav-licao">← Voltar ao Início</a>
      </div>
    `;
    initTemaSidebarToggle();
    const navVazio = getElement('temaSidebarNav');
    if (navVazio) navVazio.innerHTML = '';
    return;
  }

  app.innerHTML = `
    <div class="detalhe-header">
      <span class="card-badge" style="background: var(--secondary); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Estudo</span>
      <h1>${D.titulo}</h1>
      <p>${D.descricao}</p>
    </div>

    <div class="detalhe-content" id="doutrina-conteudo">
      ${renderIntroducaoHTML()}
    </div>

    <div class="navegacao-licoes">
      <a href="index.html" class="nav-licao">← Voltar ao Início</a>
    </div>
  `;

  renderDoutrinasSidebar(D);
  initTemaSidebarToggle();
}

function renderIntroducaoHTML() {
  const D = (typeof DOTRINAS !== 'undefined') ? DOTRINAS : null;
  if (!D || !D.introducao) {
    return `<p>Nenhuma introdução disponível.</p>`;
  }
  const paragrafos = D.introducao.split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p);
  return `
    <h2 style="margin-bottom: 4px;">Introdução às Doutrinas</h2>
    <p style="color: var(--text-light, #555); margin-bottom: 24px;">Clique em um parágrafo para destacá-lo.</p>
    ${paragrafos.map(p => `
      <div class="introducao-p" onclick="this.classList.toggle('ativo')">
        <p>${p}</p>
      </div>
    `).join('')}
  `;
}

function renderDoutrinaHTML(tema) {
  const versao = doutrinasState.versao;
  const tabs = ['naa', 'ntlh', 'nvi', 'acf'].map(v =>
    `<button class="versao-tab ${v === versao ? 'active' : ''}" onclick="trocarVersaoDoutrina('${v}')">${v.toUpperCase()}</button>`
  ).join('');

  return `
    <div class="versao-global">
      <div class="versao-global-titulo">${tema.titulo}</div>
      <div class="versao-global-tabs">${tabs}</div>
    </div>

    <div class="doctrina-crenca" style="margin-top: 20px;">
      <h2 style="font-size: 1.15rem; margin-bottom: 8px;">Nossa Crença</h2>
      <p style="line-height: 1.8;">${tema.crenca}</p>
    </div>

    <div class="perguntas-section" style="margin-top: 32px;">
      <h2>Perguntas e Respostas</h2>
      ${tema.perguntas.map((p, i) => `
        <div class="biblia-pergunta" id="doutrina-pergunta-${i}">
          <div class="pergunta-header">
            <span class="pergunta-numero">${p.numero}</span>
            <span class="pergunta-texto">${p.pergunta}</span>
          </div>
          <div class="pergunta-content">
            ${p.referencias && p.referencias.length ? `
            <div class="ref-opcoes" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
              ${p.referencias.map((r, rIdx) => `
                <button class="tema-secao-btn ref-chip ${rIdx === 0 ? 'active' : ''}"
                        style="padding: 6px 14px; border: 1px solid var(--primary); border-radius: 16px; width: auto;"
                        onclick="escolherRefDoutrina(this, ${i}, ${rIdx})">${r.ref}</button>
              `).join('')}
            </div>
            ${p.referencias.map((r, rIdx) => `
              <div class="ref-verso versiculo-biblia" id="doutrina-verso-${i}-${rIdx}" style="${rIdx === 0 ? '' : 'display: none;'}">
                <strong>${r.ref} (${versao.toUpperCase()})</strong>
                <p>${r.versoes[versao] || ''}</p>
              </div>
            `).join('')}
            ` : ''}
            <div class="resposta-biblia" style="margin-top: 12px;">
              <button class="btn-resposta" onclick="toggleRespostaDoutrina(${i})">
                <span class="icone-resposta">+</span> Ver Resposta
              </button>
              <div class="resposta-conteudo" id="doutrina-resposta-${i}">
                <strong>Resposta:</strong> ${p.resposta}
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderDoutrinasSidebar(D) {
  const nav = getElement('temaSidebarNav');
  if (!nav) return;
  // Agrupa as Crenças por Doutrina (mesmo padrão do capítulo em tema-biblia.html)
  const grupos = [];
  let atual = null;
  D.temas.forEach((t, i) => {
    const dt = t.doutrina || 'Doutrina';
    if (!atual || atual.nome !== dt) {
      atual = { nome: dt, itens: [] };
      grupos.push(atual);
    }
    atual.itens.push({ t: t, i: i });
  });
  const blocoIntro = `
    <button class="tema-secao-btn ${doutrinasState.tema === -1 ? 'active' : ''}"
            style="padding: 12px 18px; font-weight: 700; border-bottom: 1px solid rgba(0,0,0,0.08);"
            onclick="abrirIntroducaoDoutrinas()">Introdução às Doutrinas</button>`;
  nav.innerHTML = blocoIntro + grupos.map((g, gi) => {
    const aberto = g.itens.some(x => x.i === doutrinasState.tema);
    return `
      <div class="tema-capitulo ${aberto ? 'open' : ''}">
        <button class="tema-capitulo-btn" onclick="toggleTemaCapitulo(${gi}, this)">
          <span class="tema-capitulo-seta">${aberto ? '▼' : '▶'}</span>
          ${g.nome}
        </button>
        <div class="tema-secoes ${aberto ? 'aberto' : ''}">
          ${g.itens.map(x => `
            <button class="tema-secao-btn ${x.i === doutrinasState.tema ? 'active' : ''}"
                    onclick="abrirDoutrinaTema(${x.i})">${x.t.titulo}</button>
          `).join('')}
        </div>
      </div>`;
  }).join('');
}

function abrirIntroducaoDoutrinas() {
  doutrinasState.tema = -1;
  doutrinasState.refSel = {};
  const c = getElement('doutrina-conteudo');
  if (c) c.innerHTML = renderIntroducaoHTML();
  if (typeof DOTRINAS !== 'undefined') renderDoutrinasSidebar(DOTRINAS);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function abrirDoutrinaTema(i) {
  doutrinasState.tema = i;
  doutrinasState.refSel = {};
  const c = getElement('doutrina-conteudo');
  if (c && typeof DOTRINAS !== 'undefined') c.innerHTML = renderDoutrinaHTML(DOTRINAS.temas[i]);
  if (typeof DOTRINAS !== 'undefined') renderDoutrinasSidebar(DOTRINAS);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function trocarVersaoDoutrina(v) {
  doutrinasState.versao = v;
  const c = getElement('doutrina-conteudo');
  if (c && typeof DOTRINAS !== 'undefined') {
    c.innerHTML = renderDoutrinaHTML(DOTRINAS.temas[doutrinasState.tema]);
    // Re-aplica as referências que estavam selecionadas em cada pergunta
    Object.keys(doutrinasState.refSel).forEach(k => {
      const pIdx = parseInt(k, 10);
      const rIdx = doutrinasState.refSel[k];
      const card = getElement('doutrina-pergunta-' + pIdx);
      if (card) {
        const chips = card.querySelectorAll('.ref-chip');
        if (chips && chips[rIdx]) escolherRefDoutrina(chips[rIdx], pIdx, rIdx);
      }
    });
  }
}

function escolherRefDoutrina(btn, pIdx, rIdx) {
  const card = btn.closest('.biblia-pergunta');
  if (!card) return;
  doutrinasState.refSel[pIdx] = rIdx;
  card.querySelectorAll('.ref-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  card.querySelectorAll('.ref-verso').forEach((v, i2) => {
    v.style.display = (i2 === rIdx ? '' : 'none');
  });
}

function toggleRespostaDoutrina(i) {
  const el = getElement(`doutrina-resposta-${i}`);
  if (el) el.classList.toggle('aberta');
}

// ============ INICIALIZAÇÃO ============

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initBackToTop();

  const path = window.location.pathname;

  if (path.includes('licoes.html')) {
    renderLicoesPage();
  } else if (path.includes('estudos.html')) {
    renderEstudosPage();
  } else if (path.includes('tema-biblia.html')) {
    renderTemaBibliaPage();
  } else if (path.includes('doutrinas.html')) {
    renderDoutrinasPage();
  } else if (path.includes('estudo-professor.html')) {
    renderEstudoProfessorPage();
  } else if (path.includes('estudo-detalhe.html')) {
    renderDetalhePage();
  } else {
    renderHomePage();
  }
});


// ===== MOBILE: barra lateral vira gaveta (auto-detecção — não depende de classes) =====
(function () {
  'use strict';

  function isMobile() { return window.innerWidth <= 768; }

  // Injetar o CSS necessário direto (funciona mesmo sem mexer no style.css)
  if (!document.getElementById('fix-mobile-estudo')) {
    var st = document.createElement('style');
    st.id = 'fix-mobile-estudo';
    st.textContent = [
      '#fix-gaveta-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9998}',
      '#fix-gaveta-overlay.ativa{display:block}',
      '#fix-gaveta-btn{display:none;align-items:center;gap:8px;margin:10px 0;padding:10px 16px;background:#2f5d8a;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;max-width:220px}',
      '#fix-gaveta-btn.aberto{display:inline-flex}',
      '.fix-gaveta-lateral{position:fixed !important;top:0 !important;left:0 !important;bottom:0 !important;width:84% !important;max-width:320px !important;height:100vh !important;overflow-y:auto !important;z-index:9999 !important;background:#fff !important;transform:translateX(-105%) !important;transition:transform .3s ease !important;box-shadow:4px 0 20px rgba(0,0,0,.25) !important;margin:0 !important;border-radius:0 !important}',
      '.fix-gaveta-lateral.aberta{transform:translateX(0) !important}',
      '.fix-conteudo-cheio{margin-left:0 !important;padding:0 14px 40px !important;width:100% !important;max-width:100% !important}'
    ].join('\n');
    document.head.appendChild(st);
  }

  // Descobre a barra lateral: o elemento com mais links de âncora (#) e fora do header
  function acharSidebar() {
    var melhor = null, melhorN = 3;
    var todos = document.querySelectorAll('aside, nav, div, section');
    Array.prototype.forEach.call(todos, function (el) {
      if (el.closest('header')) return;
      var links = el.querySelectorAll('a[href^="#"]');
      if (links.length > melhorN && el.textContent.trim().length > 50) {
        melhor = el; melhorN = links.length;
      }
    });
    return melhor;
  }

  function aplicar() {
    if (!isMobile()) return;
    var sidebar = acharSidebar();
    if (!sidebar || sidebar.classList.contains('fix-gaveta-lateral')) return;

    // Fundo escuro
    var overlay = document.createElement('div');
    overlay.id = 'fix-gaveta-overlay';
    document.body.appendChild(overlay);

    // Conteúdo = irmão do sidebar com mais texto
    var wrapper = sidebar.parentElement;
    var conteudo = null;
    if (wrapper) {
      conteudo = Array.prototype.slice.call(wrapper.children)
        .filter(function (f) { return f !== sidebar; })
        .sort(function (a, b) { return b.textContent.length - a.textContent.length; })[0] || null;
    }

    sidebar.classList.add('fix-gaveta-lateral');

    // Botão "☰ Capítulos"
    var btn = document.createElement('button');
    btn.id = 'fix-gaveta-btn';
    btn.type = 'button';
    btn.textContent = '☰ Capítulos';
    if (conteudo) {
      conteudo.classList.add('fix-conteudo-cheio');
      conteudo.insertBefore(btn, conteudo.firstChild);
    } else {
      wrapper.insertBefore(btn, sidebar);
    }
    btn.classList.add('aberto');

    function abrir() { sidebar.classList.add('aberta'); overlay.classList.add('ativa'); document.body.style.overflow = 'hidden'; }
    function fechar() { sidebar.classList.remove('aberta'); overlay.classList.remove('ativa'); document.body.style.overflow = ''; }

    btn.addEventListener('click', abrir);
    overlay.addEventListener('click', fechar);

    // Fecha ao escolher uma seção (links tipo #1-2, #2-2) — não fecha ao abrir capítulo
    sidebar.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (a && /^#\d+-\d+$/.test((a.getAttribute('href') || '').trim())) fechar();
    });
  }

  // Tenta agora e de novo quando o app.js criar a sidebar
  aplicar();
  var obs = new MutationObserver(aplicar);
  obs.observe(document.body, { childList: true, subtree: true });

  window.addEventListener('resize', function () {
    if (isMobile()) { aplicar(); return; }
    var s = document.querySelector('.fix-gaveta-lateral');
    if (s) { s.classList.remove('fix-gaveta-lateral', 'aberta'); }
    var o = document.getElementById('fix-gaveta-overlay');
    if (o) o.classList.remove('ativa');
    var b = document.getElementById('fix-gaveta-btn');
    if (b) b.classList.remove('aberto');
    document.body.style.overflow = '';
  });
})();


// ============ QUESTION: trocar versão do texto ============
function trocarVersaoPergunta(btn) {
  const box = btn.closest('.pergunta-texto');
  if (!box) return;
  box.querySelectorAll('.versao-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  box.querySelectorAll('.versao-texto').forEach(d => d.style.display = 'none');
  const alvo = box.querySelector('.versao-texto-' + btn.dataset.v);
  if (alvo) alvo.style.display = 'block';
}

// ============ LEITURAS: modal com o texto ============
function abrirLeituraModal(ref, texto) {
  let modal = document.getElementById('leitura-modal');
  if (modal) modal.remove();
  modal = document.createElement('div');
  modal.id = 'leitura-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:2000;';
  modal.innerHTML = `
    <div style="background:#fff;max-width:640px;width:90%;max-height:80vh;overflow-y:auto;padding:28px 32px;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px;">
        <h3 style="margin:0;color:var(--primary);">${ref}</h3>
        <button type="button" onclick="document.getElementById('leitura-modal').remove();" style="border:none;background:none;font-size:28px;line-height:1;cursor:pointer;color:#777;">&times;</button>
      </div>
      <p style="line-height:1.8;margin:0;">${texto}</p>
    </div>`;
  modal.addEventListener('click', function (e) { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
}

document.addEventListener('click', function (e) {
  const link = e.target.closest('.leitura-link');
  if (link) {
    e.preventDefault();
    abrirLeituraModal(link.getAttribute('data-ref'), link.getAttribute('data-texto'));
  }
});

// ============ BOTÃO VOLTAR AO TOPO (todas as páginas) ============
(function () {
  const btn = document.createElement('button');
  btn.id = 'btnVoltarTopo';
  btn.type = 'button';
  btn.title = 'Voltar ao topo';
  btn.setAttribute('aria-label', 'Voltar ao topo');
  btn.innerHTML = '&#8593;';
  document.body.appendChild(btn);

  function atualizar() {
    if (window.scrollY > 400) btn.classList.add('visivel');
    else btn.classList.remove('visivel');
  }
  window.addEventListener('scroll', atualizar, { passive: true });
  atualizar();

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
