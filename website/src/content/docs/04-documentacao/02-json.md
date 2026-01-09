---
title: "Arquivo JSON"
description: "Informações sobre a estrutura de metadados do arquivo JSON."
slug: "docs/json"
---

As informações que compõem as notícias documentadas foram convertidas em metadados passíveis de serem acessados e visualizados através do arquivo JSON em que foram inseridos, podendo ser checados no repositório GitLab referente à documentação do projeto.

Abaixo, está uma tabela explicando o conteúdo presente nos metadados que compõem a hemeroteca.

## Dicionário de Dados

| Metadados | Tipo | Descrição |
| :--- | :--- | :--- |
| `tema` | String | Temática na qual a notícia foi vinculada¹ |
| `data` | String | Data no formato dd/mm/aaaa² |
| `jornal` | String | Nome por extenso do jornal |
| `jornal_sigla` | String | Sigla do jornal* |
| `titulo_noticia` | String | Título da notícia |
| `nome_arquivo_tif` | List | Nome fornecido ao arquivo no formato tif |
| `nome_arquivo_pdf` | String | Nome fornecido ao arquivo no formato pdf |
| `quant_pags` | Integers | Quantidade de páginas |
| `verifica_ocr` | Bool | Com OCR (`True`) ou sem OCR (`False`) |
| `paragrafos` | String | "NA"³ |
| `autoria` | String | "NA"³ |
| `dir_bd` | String | Localização do arquivo json |
| `dir_arquivo` | String | Localização dos arquivos tifs |
| `dir_arquivo_pdf` | String | Localização dos arquivos pdfs |
| `codigo_bd` | String | Código de identificação desta base de dados |

### Notas sobre os campos:

1.  **Temas:** As notícias da hemeroteca estão instruídos em 12 temas. Para mais detalhes veja o item [Temas da hemeroteca](/docs/projetos/dados/hemeroteca-peb/documentacao/temas).
2.  **Datas:** A ausência do dia e/ou do mês e/ou do ano é representada pelo número zero (0). Por exemplo, uma notícia que tenha apenas ano será tratada como `00/00/2006`.
3.  **Campos "NA":** As chaves de `paragrafos` e `autoria` apresentam como valores "NA", pois a identificação da autoria e a extração dos parágrafos não foram realizadas nesta etapa.

---

## Pesquisando na base de dados

Com a estrutura de dados acima, é possível realizar diversas consultas analíticas. Abaixo estão exemplos de perguntas que podem ser respondidas utilizando este banco de dados:

*   Qual a quantidade de notícias por jornal?
*   Quantas notícias apresentam informações incompletas em suas datas?
*   Quais jornais estão inclusos na hemeroteca?
*   Qual a quantidade de notícias por tema?
*   Qual a quantidade de temas por ano?
*   Qual a quantidade de notícias por ano?
*   Quantas páginas cada notícia apresenta?
*   Quantos e quais jornais aparecem a cada ano?
*   Quais períodos de maior interação com cada região?
*   Quantas e quais notícias de eventos de conflito há com determinado país?
*   Quantas e quais notícias de eventos pacíficos há com determinado país?
*   Busca por palavras-chave no título.

---
<p style="font-size: 0.9em; color: gray;">
  Last updated on 10/15/2025 by Rafael de Almeida
</p>