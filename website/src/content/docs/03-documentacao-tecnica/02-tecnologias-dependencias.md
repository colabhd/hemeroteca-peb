---
title: Tecnologias e Dependências
description: Especificação das bibliotecas do ambiente Conda, OCR e ferramentas de processamento
---

O **Hemeroteca PEB** opera sobre um ambiente Python controlado via Conda (`env_hemeroteca-peb`), combinando bibliotecas de processamento de imagem, análise textual e preservação digital.

## Dependências Principais (`environment.yml`)

| Biblioteca | Função no Pipeline | Aplicação Prática |
| :--- | :--- | :--- |
| **ocrmypdf** | Reconhecimento óptico de caracteres | Executa OCR em recortes de jornais escaneados, tornando o texto pesquisável |
| **pikepdf** | Manipulação profunda de PDFs | Insere metadados (XMP/Dublin Core) diretamente no cabeçalho binário dos arquivos |
| **fuzzywuzzy** | Correspondência difusa de strings | Compara títulos de matérias com distância Levenshtein para eliminar registros duplicados |
| **tinydb** | Banco de dados orientado a documentos | Estruturação e manipulação local dos registros em formato JSON sem sobrecarga de SGBD |
| **gitlab2zenodo** | Preservação e depósito digital | Automatiza a publicação de matrizes de dados abertos no repositório Zenodo |
| **numpy** | Processamento matricial | Operações auxiliares no tratamento de matrizes de imagem de recortes |

---

## Infraestrutura Web

- **Astro & Starlight:** Motor de geração do website estático, permitindo busca local ultrarrápida com **Pagefind**.
- **Servidores LabRI:** Hospedagem dos volumes de dados primários em discos dedicados (`/media/hdvm08/`) na estação `ipprivm01`.