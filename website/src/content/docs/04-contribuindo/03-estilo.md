---
title: Guia de estilo (padronização das contribuições)
description: Padronização das contribuições do projeto Hemeroteca PEB
---

Para garantir a organização, rastreabilidade e manutenibilidade de um projeto open source como a Hemeroteca PEB, criamos uma padronização das contribuições realizadas no código.

## Criando a branch

Padrão de branch: `issue-N/seu-nome` (use seu user do github):

```bash
git checkout main
git pull origin main
git checkout -b issue-3/rafaelrdealmeida
```

**Regra**: uma issue = uma branch = um PR.

---

## Trabalhando na sua issue

Com o ambiente configurado e a branch criada, execute as alterações necessárias para resolver o problema:

1. **Faça commits pequenos e descritivos:** Escreva mensagens de commit claras que expliquem o que foi alterado.
2. **Siga o padrão do código:** Mantenha a formatação e as boas práticas já existentes no projeto.
3. **Execute os testes:** Garanta que suas alterações não quebraram funcionalidades existentes executando os testes locais:

```bash
uv run pytest -m "not e2e"
```

---

##  Commits

Atenção! Antes de fazer o `add`, verifique se não está enviando os outputs da coleta para o Git! Verifique se eles estão sendo armazenados em alguma pasta presente no `.gitignore` 

```bash
git add .
git commit -m "feat(issue-3): mapa de nulos por coluna"
```

Use **conventional commits** breves:

- `feat(issue-N): ...` análise nova.
- `fix(issue-N): ...` correção.
- `docs(issue-N): ...` só texto/leitura.

---

## Push e Pull Request

```bash
git push -u origin issue-3/rafaelrdealmeida
```

No GitHub:

1. Abra o PR contra `main`.
2. Título: `Issue #N: descrição curta` (ex.: `Issue #3: mapa de nulos`).
3. Corpo:

```
Closes #N

## O que fiz
- coletas/mercosul.py

## Observações
Um parágrafo curto, detalhando as observações (se houver)
```

## Saiba mais

- Leia sobre [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) 
- Leia nosso [guia de contribuições](https://github.com/colabhd/uso-geral/blob/main/CONTRIBUTING.md)
