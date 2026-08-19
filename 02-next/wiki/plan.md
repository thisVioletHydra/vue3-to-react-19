# Трек 2. Next.js App Router — 3 смены × 8 часов

Не стартуем, пока не закрыт блок «Ядро» в [`../../wiki/progress.md`](../../wiki/progress.md).

Общее по Next уже было. Здесь — не тащить SPA-мозг в App Router. Приложение появится в день 1 трека.

Стек: **App Router, RSC, Server Actions**. Острова — Zustand / Query только где без хуков нельзя. Тот же каталог: список, фильтры, деталка, create/update.

Auth, i18n, сокеты — не в спринт.

Тулзы: [App Router](tools/next-app-router.md), [RSC](tools/rsc.md), [Server Actions](tools/server-actions.md).

---

## Зачем Next после SPA

Vite рисует в браузере. Next собирает HTML списка на сервере. Серверный компонент не в бандле клиента, может `fetch` без Query.

Ошибка: `'use client'` на корень и жизнь как в Vite. Тогда Next — дорогой React Router.

---

## День 1. App Router + RSC

Файлы: `layout`, `page`, `loading`, `error`, `not-found`. Список и деталка — серверный fetch. Фильтры и корзина — острова.

Готчи: [import убивает сервер](gotchas/import-kills-server.md), [async только на сервере](gotchas/async-server-only.md), [window в сервере](gotchas/window-on-server.md).

Чек: в дереве не всё client. Список приходит HTML-ом.

---

## День 2. Actions, кэш, Query

Форма → Server Action → `revalidatePath` / `revalidateTag`. Route Handler — когда action тесен.

С Next 15 дефолт `fetch` — `no-store`. Кэш включаешь явно.

Готчи: [сериализация](gotchas/non-serializable-props.md), [кэш не 2024](gotchas/fetch-cache-default.md), [cookies/searchParams](gotchas/cookies-dynamic.md), [Query поверх сервера](gotchas/query-over-rsc.md).

---

## День 3. Капстоун

Тот же каталог на App Router. Готча: [синглтон на сервере](gotchas/server-singleton.md).
