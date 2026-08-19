# Next App Router

## Зачем

Файловый роутинг вместо React Router. `layout` живёт при смене `page` — не Vue keep-alive, модель Next.

## Как не делать

- Вешать `'use client'` на корень.
- Ждать Pages Router как основной путь 2026.
- Копировать SPA-роуты один в один без layout/loading/error.

## Как надо

`app/layout.tsx`, `app/catalog/page.tsx`, `app/catalog/[id]/page.tsx`, рядом `loading` / `error` / `not-found`.

## Шаги

1. Когда трек открыт: `create-next-app` в `02-next` (App Router, TS).
2. Три маршрута + общий layout.
3. Список — серверный page, не client.
4. Чек: смена деталки не размонтирует layout.
