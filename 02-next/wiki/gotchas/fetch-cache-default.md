# Дефолт кэша — не статья 2024 года

## В чём проблема

До Next 15 `fetch` на сервере кэшировался молча. Страница не обновлялась после POST. С Next 15 дефолт — как `no-store`. Сниппет «просто fetch, Next закэширует» из старого гайда работает наоборот.

`next dev` врёт относительно прода. Router Cache в браузере может показать старый RSC после мутации.

## Как не делать

- Копировать гайд Next 13/14 про автоматический кэш.
- Проверять кэш только в `next dev`.
- Забыть `revalidatePath` / `revalidateTag` после action.

## Как надо

Свежее по умолчанию. Кэш явно: `cache: 'force-cache'`, `next: { revalidate: 60 }`, `next: { tags: ['items'] }`. После мутации — revalidate, при необходимости `router.refresh()`. Спорное — `next build && next start`. Next 16 + `cacheComponents` — ещё и `"use cache"`, если флаг включён.
