# Server Actions

## Зачем

Форма бьёт серверную функцию без ручного API-роута на каждый create. После записи — `revalidatePath` / `revalidateTag`.

## Как не делать

- Забыть revalidate — форма прошла, список старый.
- Action на всё, включая стрим и чужой POST — тогда Route Handler.
- Передавать обычную JS-функцию с сервера как onClick. Action — отдельный протокол.

## Как надо

`action` на форме или вызов из клиента. Явный кэш/теги, потом revalidate. Query на острове не дублирует этот список без причины.

## Шаги

1. День 2 трека: форма create → action.
2. `revalidateTag('items')` или `revalidatePath`.
3. Список на сервере обновился без ручного invalidateQueries.
4. Если нужен внешний вебхук — Route Handler, не action.
