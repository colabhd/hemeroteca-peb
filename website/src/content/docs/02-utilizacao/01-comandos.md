---
title: Comandos
description: Guia prático de comandos para execução do pipeline de tratamento, OCR e manipulação do acervo
---

Esta página reúne a referência dos comandos utilizados para operar o pipeline de processamento em lote da **Hemeroteca PEB**, desde a renomeação de imagens até a validação do banco consolidado.

As rotinas devem ser executadas no ambiente Conda oficial (`env_hemeroteca-peb`).

## 1. Ativação do Ambiente

```bash
# Ativar o ambiente com as dependências científicas (ocrmypdf, pikepdf, fuzzywuzzy)
conda activate env_hemeroteca-peb
```

---

## 2. Pipeline de Tratamento em Lote (`tratamento/`)

Os scripts numerados da pasta `tratamento/` executam etapas sequenciais de higienização e enriquecimento do acervo:

### Etapa 1: Renomeação e Conversão de Formatos
Padroniza os nomes de arquivos no formato cronológico `AAAA-MM-DD-SIGLA-Titulo-pXX` e gera matrizes TIF a partir de PDFs escaneados:

```bash
# Ajuste e renomeação padronizada dos recortes
python tratamento/hemeroteca_01_ajuste_renomear.py

# Conversão em lote entre formatos PDF e TIF
python tratamento/hemeroteca_01d_pdf_tif.py
```

### Etapa 2: Resolução de Siglas e Encodings
Normaliza caracteres especiais para UTF-8 e resolve siglas de jornais (ex.: `SBPC` ➔ Jornal da Ciência; `GZM` ➔ Gazeta Mercantil):

```bash
# Normalização de encoding para UTF-8
python tratamento/hemeroteca_04_normalizar_encode.py

# Mapeamento de nomes completos a partir das siglas dos periódicos
python tratamento/hemeroteca_03b_nome_pela_sigla.py
```

### Etapa 3: OCR e Reconhecimento Óptico de Caracteres
Aplica o `ocrmypdf` sobre as páginas escaneadas para tornar o texto pesquisável:

```bash
python tratamento/hemeroteca_05_ocr.py
```

### Etapa 4: Injeção de Metadados e Desduplicação
Insere metadados estruturados nos arquivos com `pikepdf` e identifica notícias duplicadas via similaridade de strings com `fuzzywuzzy`:

```bash
# Injetar metadados diretamente no interior dos PDFs
python tratamento/hemeroteca_06_vincular_metadados.py

# Detectar e listar arquivos redundantes
python tratamento/hemeroteca_07_removendo_arquivo_repetidos.py
```

---

## 3. Validação da Base Consolidada (`METADADOS_FINAL.json`)

Para inspecionar o arquivo principal de metadados antes de gerar relatórios:

```bash
# Validar a sintaxe do JSON consolidado
python -m json.tool METADADOS_FINAL.json > /dev/null && echo "JSON Válido!"

# Contar o número de notícias catalogadas e verificar chaves
python -c "import json; d = json.load(open('METADADOS_FINAL.json'))['METADADOS_FINAL.json']; print(f'Total de matérias: {len(d)}')"
```

---

## 4. Comandos do Website (Astro / Starlight)

Executados a partir do diretório `website/`:

```bash
cd website
npm install
npm run dev
npm run build
```