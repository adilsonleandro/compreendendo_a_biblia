@echo off
cd /d "C:\Users\adilson.rosa\OneDrive - Adventistas\01_projetos\compreendendo_a_biblia"
"C:\Users\adilson.rosa\AppData\Local\Python\pythoncore-3.14-64\python.exe" "C:\Users\adilson.rosa\OneDrive - Adventistas\01_projetos\compreendendo_a_biblia\atualizar_licao.py" >> logs_licao.txt 2>&1
"C:\Users\adilson.rosa\AppData\Local\Python\pythoncore-3.14-64\python.exe" "C:\Users\adilson.rosa\OneDrive - Adventistas\01_projetos\compreendendo_a_biblia\publicar.py" >> logs_licao.txt 2>&1
"C:\Users\adilson.rosa\AppData\Local\Python\pythoncore-3.14-64\python.exe" "C:\Users\adilson.rosa\OneDrive - Adventistas\01_projetos\compreendendo_a_biblia\gerar_kahoot.py" >> logs_licao.txt 2>&1
