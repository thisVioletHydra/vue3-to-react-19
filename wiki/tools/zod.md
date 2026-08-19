# Zod

## Зачем

Схема данных. Парсишь неизвестное с формы или с API в тип, который TS уже не угадывает. Одна схема — и валидация формы, и узкий тип после успеха. Не `if (!title) errors.title = ...` на десять полей.

## Как не делать

- Валидировать только в голове и в `alert`.
- Дублировать правила: одни в if, другие в типах руками.
- `z.any()` на всю форму «потом».

## Как надо

```ts
const itemSchema = z.object({
  title: z.string().min(1),
  price: z.number().nonnegative(),
});

type ItemDraft = z.infer<typeof itemSchema>;
```

Связка с RHF: `@hookform/resolvers/zod`. На собесе: runtime-проверка + `z.infer`, не «TS сам на рантайме».

## Шаги

1. День 4: `npm install zod @hookform/resolvers`.
2. Схема create/edit рядом с формой, не в компоненте размазанная.
3. Невалидный submit — ошибки из схемы под полями, запрос не уходит.
4. После успеха в мутацию уходит уже узкий тип, не `string | undefined` с формы.
