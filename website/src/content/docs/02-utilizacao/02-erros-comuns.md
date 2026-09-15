---
title: Erros Comuns
description: Resolução de problemas conhecidos na execução dos scripts de OCR, caminhos de disco e metadados
---

Esta seção detalha problemas frequentes na execução do pipeline da Hemeroteca e suas soluções técnicas.

---

## 1. Falha no caminho do disco rígido local (`/media/hdvm08/`)

**Sintoma:**  
Scripts de tratamento acusam `FileNotFoundError` ao tentar localizar arquivos PDF ou TIF das notícias.

**Causa:**  
No `METADADOS_FINAL.json`, as rotas físicas apontam para a estrutura de montagem dos storages do laboratório (ex.: `/media/hdvm08/bd/002/997/001/`). Se o disco não estiver montado ou você estiver executando fora da estação de trabalho correspondente, o arquivo não será encontrado.

**Solução:**  
Verifique os pontos de montagem no terminal:
```bash
df -h | grep hdvm08
```
Caso esteja trabalhando em outro servidor, ajuste a variável de caminho no script ou aponte para o diretório local correspondente.

---

## 2. Erro de dependência no OCR (`ocrmypdf` ausente)

**Sintoma:**  
Ao rodar `hemeroteca_05_ocr.py`, o terminal retorna:  
`ModuleNotFoundError: No module named 'ocrmypdf'`

**Causa:**  
O comando foi executado no ambiente base do Anaconda em vez do ambiente Conda específico do projeto.

**Solução:**  
Ative o ambiente correto antes de rodar os scripts:
```bash
conda activate env_hemeroteca-peb
```

---

## 3. Erro de Encoding ao ler matérias antigas (`UnicodeDecodeError`)

**Sintoma:**  
Falha ao abrir ou mesclar arquivos JSON parciais acusando bytes inválidos na faixa `0x93` ou `0xe3`.

**Causa:**  
Recortes históricos processados em sistemas legados utilizavam codificação Windows-1252 ou ISO-8859-1.

**Solução:**  
Execute o script de normalização de encode antes de realizar a mesclagem dos bancos:
```bash
python tratamento/hemeroteca_04_normalizar_encode.py
```

---

## 4. Conflito de sintaxe no Starlight v0.39+ no Website

**Sintoma:**  
`AstroUserError: Invalid config passed to starlight integration. Found an autogenerate object with a label.`

**Causa:**  
O `website/astro.config.mjs` utiliza sintaxe legada com `label` e `autogenerate` juntos no mesmo nível.

**Solução:**  
Envolva a propriedade dentro de `items: [{ autogenerate: { directory: '...' } }]`.