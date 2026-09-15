---
title: Roadmap de Funcionalidades
description: Metas de expansão cronológica, indexação em texto completo e preservação da Hemeroteca
---

O desenvolvimento da **Hemeroteca PEB** está estruturado em cinco fases de modernização técnica:

## Visão Geral das Fases

```text
[Fase 1: Digitalização e JSON] ➔ [Fase 2: Documentação Starlight] ➔ [Fase 3: Recoll Full-Text] ➔ [Fase 4: Expansão Pós-2010] ➔ [Fase 5: Zenodo/InvenioRDM]
```

---

### Fase 1 — Digitalização e Consolidação Estrutural (Concluída)
- [x] Extração e microfilmagem de matérias de O Estado de S. Paulo, Folha de S. Paulo, Gazeta Mercantil e Jornal da Ciência (1972 a 2010)
- [x] Pipeline de renomeação padronizada no formato `AAAA-MM-DD-SIGLA-Titulo-pXX`
- [x] Consolidação de todas as entradas em `METADADOS_FINAL.json`
- [x] Desduplicação de matérias repetidas com algoritmo de similaridade fuzzy (`fuzzywuzzy`)

---

### Fase 2 — Modernização da Documentação e Governança (Fase Atual)
- [x] Migração do portal de documentação para Astro e Starlight
- [ ] Publicação das matrizes de metadados para download aberto no site
- [ ] Atualização dos guias de equipe e canais de solicitação de dados

---

### Fase 3 — Indexação em Texto Completo com Recoll (Planejado)
- [ ] Homologação de 100% dos recortes com camada pesquisável via `ocrmypdf`
- [ ] Ingestão do acervo nos índices temáticos do **Recoll Desktop Search** do LabRI
- [ ] Disponibilização de consultas por operadores booleanos e recortes temporais no texto integral das notícias

---

### Fase 4 — Expansão Cronológica Pós-2010 (Médio Prazo)
- [ ] Integração com os spiders do **NewsCloud** para cobrir o período de 2011 até o tempo presente
- [ ] Exportação consolidada dos dados em formato colunar (**Parquet**) para análises quantitativas no Pandas

---

### Fase 5 — Preservação Digital Aberta (Longo Prazo)
- [ ] Depósito formal dos lotes de metadados no repositório **Zenodo** utilizando o conector `gitlab2zenodo`
- [ ] Ingestão das matrizes completas no repositório institucional **InvenioRDM** da UNESP
- [ ] Atribuição de DOIs para coleções temáticas específicas (ex.: Acordo Nuclear Brasil-Alemanha, Rodada Uruguai do GATT, Criação do Mercosul)