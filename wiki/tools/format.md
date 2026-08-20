# Форматирование кода: oxlint ≠ prettier

## Коротко

**Oxlint** — линтер (ошибки, хуки, `!== null`). Как ESLint. Он **не** ровняет отступы и переносы.

**Oxfmt** — форматтер из того же Oxc (Rust), аналог Prettier, blazing fast. Им и ровняем код.

Раньше у тебя часто было: ESLint + Prettier (или prettier через eslint-plugin). Сейчас пара: **oxlint + oxfmt**.

## Команды в `01-react`

```bash
pnpm format        # переписать файлы
pnpm format:check  # только проверить
pnpm lint          # oxlint --type-aware
```

В Cursor/VS Code: поставь расширение Oxc / oxfmt если есть, или Format on Save на oxfmt. Пока можно гонять `pnpm format` руками после правок.

## Как не делать

- Ждать, что `pnpm lint` поправит пробелы — не поправит.
- Тащить Prettier «потому что привык», если уже есть oxfmt — два форматтера будут драться.
- Просить агента «пофиксить линтером весь репо» — у нас правило: линтер/формат ты сам.
