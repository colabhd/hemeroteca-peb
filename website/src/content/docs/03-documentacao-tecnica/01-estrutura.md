---
title: Estrutura do Projeto
description: Arquitetura de arquivos, organização do pipeline de tratamento e estrutura do banco de dados
---

A **Hemeroteca PEB** organiza quase quatro décadas de matérias jornalísticas através de um pipeline que integra armazenamento em disco, metadados estruturados e interface de consulta.

## Árvore do Repositório

```text
hemeroteca-peb/
├── tratamento/            # Pipeline de scripts em Python para tratamento do acervo
│   ├── hemeroteca_01_ajuste_renomear.py          # Padronização de nomes de arquivos
│   ├── hemeroteca_01d_pdf_tif.py                 # Conversão de matrizes PDF para TIF
│   ├── hemeroteca_02_inserir_no_banco_json.py    # Ingestão em formato documental
│   ├── hemeroteca_03_json_mesclar.py             # Mesclagem de lotes parciais
│   ├── hemeroteca_03b_nome_pela_sigla.py         # Mapeamento de siglas de periódicos
│   ├── hemeroteca_04_normalizar_encode.py        # Conversão de codificação para UTF-8
│   ├── hemeroteca_05_ocr.py                      # Reconhecimento óptico de caracteres
│   ├── hemeroteca_06_vincular_metadados.py       # Injeção de metadados em PDFs (pikepdf)
│   ├── hemeroteca_07_removendo_arquivo_repetidos.py # Desduplicação fuzzy (fuzzywuzzy)
│   └── verificar_*.txt                           # Lotes de conferência humana por pesquisador
├── json/                  # Bases parciais geradas por período e veículo
├── website/               # Portal estático de documentação (Astro + Starlight)
│   ├── src/content/docs/  # Conteúdo dos manuais e páginas em Markdown
│   └── astro.config.mjs   # Configuração do Starlight
├── METADADOS_FINAL.json   # Banco consolidado com todos os registros catalogados
├── environment.yml        # Especificação das dependências do Conda
├── CITATION.cff           # Metadados de citação acadêmica
└── README.md              # Apresentação do projeto e instruções gerais
```

---

## O Esquema de Dados (`METADADOS_FINAL.json`)

Cada notícia do acervo é registrada como um objeto contendo chaves padronizadas:

| Campo | Exemplo Real | Descrição Técnica |
| :--- | :--- | :--- |
| `tema` | `03-brasil-argentina` | Eixo temático da política externa para organização de pastas |
| `data` | `26/11/2004` | Data de veiculação no jornal original |
| `jornal` | `Gazeta Mercantil` | Nome por extenso da publicação |
| `jornal_sigla` | `GZM` ou `SBPC` | Sigla padronizada utilizada na composição do nome do arquivo |
| `titulo_noticia` | `Agrale investirá US$ 10 milhões...` | Manchete tratada da matéria |
| `nome_arquivo_pdf`| `2009-12-17-GZM-Agrale_investira...pdf` | Nome padronizado do arquivo digital (`AAAA-MM-DD-SIGLA-Titulo-pXX`) |
| `quant_pags` | `1` | Quantidade de páginas do recorte de jornal |
| `verifica_ocr` | `true` | Indicador booleano de texto pesquisável |
| `codigo_bd` | `/002/997/001` | Identificador de catalogação do acervo no LabRI |
| `dir_arquivo` | `/media/hdvm08/bd/002/...` | Rota absoluta de armazenamento no storage do laboratório |