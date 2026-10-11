═══════════════════════════════════════════════
CONTEXTO DE RETOMADA — Cole isto no início do chat
═══════════════════════════════════════════════

PROJETO: Compreendendo a Bíblia
Site estático (GitHub Pages: github.com/adilsonleandro/compreendendo_a_biblia)
mantido por scripts Python locais, em:
C:\Users\adilson.rosa\OneDrive - Adventistas\01_projetos\compreendendo_a_biblia

1) ACESSO
- Conecte ao meu Google Drive (conta adilsonrosaleandro@gmail.com).
- A pasta do projeto no Drive chama-se "compreendendo_a_biblia".
  Localize-a e trabalhe direto nela (ler E gravar arquivos).
- Pastas-chave: js/licoes/ (lições), js/dados/ (quizzes e dados),
  kahoot/ (JSON+CSV dos quizzes), licao/ (material do professor),
  img/licoes/ (capas).

2) ARQUITETURA (já implantada e funcionando)
- Lições: js/licoes/licao-AAAA-T-N.js (um arquivo por semana, histórico
  preservado) + lista LICOES no js/data.js (a nova entra como primeira).
- Quiz por lição: js/dados/dados-quiz-AAAA-T-lN.js grava
  window.QUIZ_REGISTRO['licao-AAAA-T-N']; js/dados/quiz-atual.js é o
  ponteiro do quiz da semana; quiz.html carrega os dados + o ponteiro
  + app.js nessa ordem. Os botões "Quiz da Semana" das lições apontam
  para quiz.html?licao=N (o app.js normaliza o id: aceita "2" ou
  "licao-2026-4t-2").
- QUIZ_PEDIR_NOME = false no app.js (nome do participante: deixar
  preparado para ativar no futuro).

3) ROTINA SEMANAL (scripts na raiz do projeto)
1. Colar material do professor em licao/licao_professor.txt (+ capa
   em licao/imagem_licao.png) — monto no NotebookLM antes
2. python atualizar_licao.py        (lição da semana, via CPB + Gemini)
3. python atualizar_professor.py    (material do professor)
4. python gerar_kahoot.py           (7 perguntas via Gemini — validar depois)
5. python novo_quiz.py kahoot/licao-AAAA-T-N-kahoot.json  (ativa o quiz)
6. python publicar.py               (git add/commit/push — SEMPRE por último)
Observações: o gerar_kahoot.py descobre a lição sozinho (flags: --url,
--data, --teste). O novo_quiz.py cria o arquivo de dados, atualiza o
ponteiro e insere a linha <script> no quiz.html sozinho.

4) ESTADO ATUAL (11/10/2026)
- Quiz por lição funcionando (lições 2 e 3 testadas e publicadas).
- app.js atualizado no Drive e no GitHub.
- PENDENTE: chave do Gemini está hardcoded nos scripts — migrar para
  variável de ambiente (os.environ.get) em atualizar_licao.py,
  atualizar_professor.py e gerar_kahoot.py.
- PENDENTE: testar na semana da lição 4 (aguardar publicação na CPB).

5) COMO VOCÊ (assistente) ME AJUDA AQUI
- Validar as perguntas do quiz contra o conteúdo oficial da lição CPB.
- Ler/editar arquivos do projeto pelo Drive e me devolver edições no
  formato "ANTES / SUBSTITUIR POR".
- Eu sou leigo em programação: explique sempre de forma simples,
  passo a passo, e me diga exatamente em qual arquivo e onde colar.

═══════════════════════════════════════════════
