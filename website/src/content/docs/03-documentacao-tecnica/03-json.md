---
title: Arquivos JSON
description: Informações do arquivo JSON
---

## Informações do arquivo json

As informações que compõem as notícias documentadas foram convertidas em metadados passíveis de serem acessados e visualizados através do arquivo json em que foram inseridos, podendo ser checados no repositório gitlab referente a [documentação do projeto](https://gitlab.com/unesp-labri/projeto/hemeroteca-peb).
Abaixo, está uma tabela explicando o conteúdo presente nos metadados que compõem a hemeroteca.



|Metadados|Tipo| Descrição|
|---|---|---|
|`tema`|`string`|Temática na qual a notícia foi vinculada¹|
|`data`|`string`|Data no formato dd/mm/aaaa²|
|`jornal`|`string`|Nome por extenso do jornal|
|`jornal_sigla`|`string`|Sigla do jornal*|
|`titulo_noticia`|`string`|Título notícia|
|`nome_arquivo_tif`|`list`|Nome fornecido ao arquivo no formato tif|
|`nome_arquivo_pdf`|`string`|Nome fornecido ao arquivo no formato pdf|
|`quant_pags`|`integers`|Quantidade de páginas|
|`verifica_ocr`|`bool`|Com OCR (`True`) ou sem OCR (`False`)|
|`paragrafos`|`string`|"NA"³|
|`autoria`|`string`|"NA"³|
|`dir_bd`|`string`|Localização do arquivo json|
|`dir_arquivo`|`string`|Localização dos arquivos tifs|
|`dir_arquivo_pdf`|`string`|Localização dos arquivos pfds|
|`codigo_bd`|`string`|Código de identificação desta base de dados|

¹As notícias da hemeroteca estão instruídos em 12 temas. Para mais detalhes veja o item [Tema](https://labriunesp.org/docs/projetos/dados/hemeroteca-peb/infos/projetos/dados/hemeroteca-peb/infos/temas) da hemeroteca.
²A ausência do dia e/ou do mês e/ou do ano , que é representada pelo número zero (0), por exmeplo, uma notícia que tenha apenas ano será tratada como `00/00/2006`.
³As chaves de parágrafos de autoria apresentam como valores `"NA"`,pois a identificação da autoria e a extração dos parágrafos não foram realizadas.

## Pesquisando na base de dados 

1. Qual a quantidade de notícias por jornal?
2. Quantas notícias apresentam informações incompletas em suas datas?
3. Quais jornais estão inclusos na hemeroteca?
4. Qual a quantidade de notícias por tema?
5. Qual a quantidade de temas por ano?
6. Qual a quantidade de notícias por ano?
7. Quantas páginas cada notícia apresenta?
8. Quantos e quais jornais aparecem a cada ano?
9. Quais períodos de maior interação com cada região?
10. Quantas e quais notícias de eventos de conflito há com determinado país?
11. Quantas e quais notícias de eventos pacíficos há com determinado país?
12. Busca por palavras-chave no título

