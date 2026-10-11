# Guia Completo dos Scripts do Site

Este documento explica o que cada script faz e como você deve proceder a cada semana para publicar uma nova lição.

---

## 📁 Estrutura de Arquivos

```
compreendendo_a_biblia/
├── index.html              → Página inicial
├── licoes.html             → Lista de lições da Escola Sabatina
├── estudos.html            → Lista de estudos bíblicos por tema
├── estudo-detalhe.html     → Página de detalhe (lição ou estudo)
├── tema-biblia.html        → Tema "A Bíblia: Como estudá-la"
├── doutrinas.html          → Página de doutrinas
├── quiz.html               → Quiz da semana
├── estudo-professor.html   → Material para professores
├── css/
│   └── style.css           → Todos os estilos do site
└── js/
    ├── app.js              → Controlador principal (renderização, navegação)
    ├── data.js             → Dados principais (lições, estudos, versões)
    ├── data-loader.js      → Carregador de dados (JSON/JS)
    ├── respostas.js        → Respostas extraídas (textos entre parênteses)
    ├── licoes/             → Dados das lições individuais
    │   ├── licao-2026-4t-0.js
    │   └── licao-2026-4t-2.js
    └── dados/              → Dados dos capítulos e outros
        ├── dados-capitulo-1.js ... dados-capitulo-20.js
        ├── dados-dotrinas.js
        └── dados-quiz.js
```

---

## 📜 Detalhamento de Cada Script

### 1. `js/app.js` — Controlador Principal

**O que faz:**
- Renderiza todas as páginas do site (início, lições, estudos, doutrinas, quiz)
- Controla a navegação entre páginas
- Gerencia o seletor de versões bíblicas (NAA, NTLH, NVI, AFC)
- Controla a abertura/fechamento das respostas das perguntas
- Gerencia o menu mobile (botão hambúrguer)
- Cria o botão "voltar ao topo"
- Gerencia a gaveta lateral no celular (botão "☰ Capítulos" / "☰ Doutrinas")

**Quando modificar:**
- Quando quiser adicionar uma nova página
- Quando quiser mudar o comportamento de navegação
- Quando quiser adicionar novas funcionalidades ao site

---

### 2. `js/data.js` — Banco de Dados Principal

**O que faz:**
- Contém os arrays `LICOES`, `ESTUDOS`, `TEMAS` e `DOTRINOS`
- Cada lição tem: id, título, data, semana, versículo, texto, resumo, abertura, leituras, dias, perguntas, estudoProfessor
- Cada estudo tem: id, título, tema, versículo, texto, resumo, perguntas

**Quando modificar:**
- **A CADA SEMANA**: Adicionar uma nova lição no array `LICOES`
- Quando quiser adicionar um novo estudo bíblico
- Quando quiser adicionar uma nova doutrina

**Estrutura de uma lição:**
```javascript
{
  id: 2,
  titulo: "Título da Lição",
  data: "03 de Outubro de 2026",
  semana: "Lição 2 — 4º Trimestre 2026",
  versiculo: "Referência bíblica principal",
  texto: "Texto completo do versículo",
  resumo: "Resumo breve da lição",
  abertura: {
    versiculo: "Versículo para memorizar",
    periodo: "03 de outubro a 09 de outubro de 2026",
    resumo: "Texto da abertura",
    reflexao: "Reflexão inicial"
  },
  leituras: [
    { ref: "Gn 1:1", versoes: { naa: "...", ntlh: "...", nvi: "...", afc: "..." } }
  ],
  dias: [
    { dia: "Sábado", titulo: "Título do dia", resumo: "Resumo do dia" }
  ],
  perguntas: [
    { pergunta: "?", resposta: "..." }
  ],
  estudoProfessor: {
    titulo: "Título do material",
    slides: [...],
    aprofundamentos: [...]
  }
}
```

---

### 3. `js/data-loader.js` — Carregador de Dados

**O que faz:**
- Carrega os arquivos JSON com os dados dos capítulos
- Se o fetch falhar (ex.: site aberto via file://), usa os dados do `data.js` como fallback
- Disponibiliza os dados para o `app.js`

**Quando modificar:**
- Geralmente não precisa modificar
- Apenas se quiser mudar a forma como os dados são carregados

---

### 4. `js/respostas.js` — Respostas Extraídas

**O que faz:**
- Contém um array com as respostas extraídas dos textos entre parênteses
- Usado para consultar rapidamente as respostas das lições

**Quando modificar:**
- Quando quiser atualizar as respostas manualmente
- Não é necessário modificar a cada semana (as respostas já estão nas perguntas das lições)

---

### 5. `js/licoes/licao-2026-4t-0.js` e `licao-2026-4t-2.js`

**O que Fazem:**
- Contêm os dados das lições individuais do 4º trimestre 2026
- Estrutura similar à do `data.js`, mas separada em arquivos menores

**Quando modificar:**
- Quando quiser adicionar lições específicas
- Ou quando quiser manter as lições organizadas em arquivos separados

---

### 6. `js/dados/dados-capitulo-1.js` a `dados-capitulo-20.js`

**O que Fazem:**
- Cada arquivo contém os dados de um capítulo do estudo "A Bíblia: Como estudá-la e compreendê-la"
- Estrutura: id, título, seções, perguntas (com versões bíblicas)

**Quando modificar:**
- Quando quiser adicionar um novo capítulo
- Quando quiser atualizar as perguntas de um capítulo existente

---

### 7. `js/dados/dados-dotrinas.js`

**O que Faz:**
- Contém os dados das doutrinas (crenças fundamentais da Igreja Adventista)
- Estrutura: grupos de doutrinas com perguntas e respostas

**Quando modificar:**
- Quando quiser adicionar uma nova doutrina
- Quando quiser atualizar as perguntas de uma doutrina existente

---

### 8. `js/dados/dados-quiz.js`

**O que faz:**
- Contém as perguntas e respostas do quiz da semana
- Estrutura: perguntas com alternativas e resposta correta

**Quando modificar:**
- **A CADA SEMANA**: Atualizar as perguntas do quiz

---

## 🔄 Fluxo Semanal: O Que Fazer a Cada Lição

### Toda Sexta-feira ou Sábado (Dia da Lição)

```
┌─────────────────────────────────────────────────────────────┐
│                    FLUXO DA LIÇÃO SEMANAL                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1. OBTER O CONTEÚDO                                         │
│     ├─ Acessar: https://mais.cpb.com.br/licao-adultos/     │
│     ├─ Copiar o título, versículo, período e resumo         │
│     └─ Copiar as perguntas (as respostas estão entre        │
│        parênteses no texto original)                        │
│                                                              │
│  2. ADICIONAR A LIÇÃO                                        │
│     └─ Abrir: js/data.js                                    │
│     └─ Adicionar novo objeto no array LICOES                │
│        (seguir a estrutura mostrada acima)                  │
│                                                              │
│  3. ATUALIZAR O QUIZ                                         │
│     └─ Abrir: js/dados/dados-quiz.js                       │
│     └─ Substituir as perguntas pelas da nova lição           │
│                                                              │
│  4. TESTAR O SITE                                            │
│     └─ Abrir: index.html no navegador                       │
│     └─ Verificar se a nova lição aparece na lista           │
│     └─ Testar no celular (botão "☰ Capítulos")              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 Checklist Semanal

| Passo | Arquivo | Ação |
|---|---|---|
| 1 | — | Acessar o site da CPB e copiar o conteúdo da lição |
| 2 | `js/data.js` | Adicionar novo objeto no array `LICOES` |
| 3 | `js/dados/dados-quiz.js` | Atualizar as perguntas do quiz |
| 4 | `index.html` | Testar se tudo está funcionando |
| 5 | Celular | Testar o botão "☰ Capítulos" ou "☰ Doutrinas" |

---

## 🎯 Resumo: Por Onde Começar

**Para publicar uma lição semanal:**

1. **`js/data.js`** — Adicionar a nova lição (título, versículo, perguntas, respostas, abertura)
2. **`js/dados/dados-quiz.js`** — Atualizar o quiz com as novas perguntas

**Para adicionar um novo estudo bíblico:**

1. **`js/data.js`** — Adicionar no array `ESTUDOS`

**Para adicionar uma nova doutrina:**

1. **`js/dados/dados-dotrinas.js`** — Adicionar nova doutrina

**Para adicionar um novo capítulo (tema A Bíblia):**

1. **`js/dados/dados-capitulo-X.js`** — Criar novo arquivo

---

## ⚠️ Importante

- Sempre teste o site após fazer alterações
- O site funciona localmente (file://) então o `data-loader.js` tem fallback para os dados do `data.js`
- As respostas das perguntas estão entre **parênteses** no texto original da lição
- O botão "☰ Capítulos" só aparece em telas menores que 768px (celulares e tablets)

---

Última atualização: 11 de Outubro de 2026