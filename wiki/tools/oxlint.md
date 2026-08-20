# oxlint

## Зачем

Линтер из **Oxc, на Rust**. Тот же конвейер, что у Vite: парсер и линт blazing fast, не ESLint на Node. `create-vite` в 2026 кладёт его из коробки.

ESLint не умер: hh.ru его пишет, antfu — это он. В банке 2019 будет ESLint. Здесь родной — oxlint, так и говори.

Твой стиль: в `if` только boolean. Селектор из шапки — `selector !== null`, не `if (!selector)`. Мозг не угадывает falsy.

Правило: `typescript/strict-boolean-expressions`. Без type-aware оно слепое. Type-aware — пакет `oxlint-tsgolint`.

## Как не делать

- `if (!selector)` / `if (items.length)` / `q && fetch(q)` на не-boolean.
- Думать, что шаблон Vite уже включил строгие boolean. По умолчанию там только хуки React.
- Оставлять дефолт правила `allowNullableObject: true` — он как раз пускает `if (selector)` на объекте/`null`.
- Выкидывать oxlint «потому что я на eslint». В этом репо он на месте, в чужом корпоративном — будет eslint, оба ответа валидны.

## Как надо

```ts
if (selector !== null) {
  // selector сужен, без магии
}

if (query !== '') {
  // строка, не if (query)
}
```

Конфиг: правило жёстче дефолта: `allowNullableObject/allowString/allowNumber: false`. `typeAware` в `.oxlintrc.json` нельзя — репо-корень выше `01-react/`, oxlint орёт. Поэтому скрипт: `oxlint --type-aware`. Автофиксом репо не размазываем. IDE орёт — правишь явно.

## Шаги

1. Открыть `01-react/.oxlintrc.json` — есть `strict-boolean-expressions`. Скрипт `pnpm lint` с `--type-aware`.
2. Намеренно написать `if (!maybeNode)` где `maybeNode` это `Element | null`, сохранить.
3. Увидеть ошибку линтера. Заменить на `maybeNode !== null`.
4. `cd 01-react && pnpm lint` — когда захочешь сам, в курсе за тебя не гоняем.
