// ============================================================
// CARREGADOR DE DADOS — Compreendendo a Bíblia
// Carrega os arquivos JSON com os dados dos estudos
// ============================================================

const DataLoader = {
  // Cache dos dados carregados
  cache: {
    capitulos: null,
    licoes: null,
    estudos: null
  },

  // Carrega todos os dados necessários
  async loadAll() {
    try {
      const [capitulos, licoes, estudos] = await Promise.all([
        this.loadCapitulos(),
        this.loadLicoes(),
        this.loadEstudos()
      ]);
      
      this.cache.capitulos = capitulos;
      this.cache.licoes = licoes;
      this.cache.estudos = estudos;
      
      return true;
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      return false;
    }
  },

  // Carrega os capítulos do tema Bíblia
  async loadCapitulos() {
    try {
      const response = await fetch('data/capitulo-1.json');
      if (!response.ok) throw new Error('Erro ao carregar capítulos');
      const data = await response.json();
      // Garante a estrutura { capitulos: [...] } independente do formato do JSON
      return data.capitulos ? data : { capitulos: Array.isArray(data) ? data : [data] };
    } catch (error) {
      // Se o fetch falhar (ex.: site aberto pelo file://, que bloqueia CORS),
      // usa os dados que já existem no data.js — assim a página funciona sempre
      console.warn('JSON não carregado; usando TEMA_BIBLIA do data.js:', error);
      return TEMA_BIBLIA;
    }
  },
  

  // Carrega as lições da Escola Sabatina
  async loadLicoes() {
    // Por enquanto, as lições estão no data.js
    // Futuramente, podem ser movidas para JSON
    return LICOES;
  },

  // Carrega os estudos bíblicos
  async loadEstudos() {
    // Por enquanto, os estudos estão no data.js
    // Futuramente, podem ser movidas para JSON
    return ESTUDOS;
  },

  // Retorna os dados em cache
  getCapitulos() {
    return this.cache.capitulos;
  },

  getLicoes() {
    return this.cache.licoes;
  },

  getEstudos() {
    return this.cache.estudos;
  }
};
