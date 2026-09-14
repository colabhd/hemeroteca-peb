---
title: Perguntas Frequentes (FAQ)
description: Esclarecimentos detalhados sobre o acervo histórico, OCR e estrutura de dados da Hemeroteca PEB
---

---

### 1. O que é a Hemeroteca de Política Externa Brasileira?
É um acervo digital estruturado de reportagens, análises e editoriais publicados entre **1972 e 2010** nos principais veículos de imprensa do país, catalogados sob a ótica da diplomacia, comércio exterior e inserção internacional do Brasil.

---

### 2. Quais jornais compõem o corpus?
O acervo reúne prioritariamente três veículos de circulação nacional fundamentais para o período:
- **O Estado de S. Paulo** (OESP)
- **Folha de S. Paulo** (FSP)
- **Gazeta Mercantil** (GZM)
- Além de publicações especializadas como o **Jornal da Ciência** (SBPC)

---

### 3. Como os arquivos estão salvos e vinculados aos metadados?
Cada notícia catalogada no arquivo `METADADOS_FINAL.json` possui um código identificador único (ex.: `/002/997/001`) e aponta para os arquivos físicos armazenados nos storages do laboratório (`/media/hdvm08/`), contendo tanto a matriz de imagem em alta resolução (`.tif`) quanto o arquivo em PDF pesquisável com camada OCR (`.pdf`).

---

### 4. Por que o repositório usa o `fuzzywuzzy` no pipeline?
Como matérias idênticas podiam ser publicadas em edições regionais com pequenas variações de manchete ou erros tipográficos de digitalização, o script `tratamento/hemeroteca_07_removendo_arquivo_repetidos.py` utiliza algoritmos de similaridade difusa (*fuzzy matching*) com distância Levenshtein para identificar e eliminar matérias redundantes.

---

### 5. Como citar o acervo em dissertações, teses e artigos?
O repositório disponibiliza metadados formais de citação através do arquivo `CITATION.cff`:  
> *COLABHD; LABRI; CPPS. Hemeroteca de Política Externa Brasileira (1972-2010). Franca: Universidade Estadual Paulista (UNESP), 2026. DOI: 10.5281/zenodo.XXXXX. Disponível em: https://github.com/colabhd/hemeroteca-peb.*