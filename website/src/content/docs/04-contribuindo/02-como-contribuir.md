---
title: Como Contribuir
description: Áreas práticas de atuação na curadoria de dados e código da Hemeroteca PEB
---

Você pode colaborar com a Hemeroteca PEB em duas frentes de trabalho:

## 1. Curadoria e Qualidade dos Dados

- **Auditoria do `METADADOS_FINAL.json`:** Identificar registros com títulos cortados, datas divergentes ou siglas de jornais não mapeadas.
- **Conferência Temática:** Analisar pastas temáticas (como `03-brasil-argentina`) e verificar se reportagens sobre integração regional foram categorizadas adequadamente.
- **Revisão de Textos e Documentação:** Ajudar a manter as páginas deste site claras e com links funcionais.

---

## 2. Engenharia de Dados e Preservação

- **Aprimoramento do OCR:** Otimizar parâmetros do script `tratamento/hemeroteca_05_ocr.py` para melhorar o reconhecimento de notícias com tipografia degradada.
- **Injeção de Metadados:** Apoiar a padronização de campos XMP nos PDFs utilizando o `pikepdf`.
- **Website da Documentação:** Propor novos componentes e gráficos de visualização no tema Starlight.

---

## Fluxo de Envio

1. Abra uma **Issue** no repositório no GitHub descrevendo a sugestão ou correção.
2. Crie uma branch de trabalho no padrão `docs/` ou `feat/`.
3. Valide o build do site antes de abrir o Pull Request:
   ```bash
   cd website && npm run build
   ```