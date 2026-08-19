# React Server Components

## Зачем

HTML и fetch на сервере, без гидрации всего дерева. Бандл клиента меньше. Остров — кнопка, фильтр, корзина.

## Как не делать

- Импорт серверного списка в клиентский файл. См. [import-kills-server](../gotchas/import-kills-server.md).
- `async` на клиенте. См. [async-server-only](../gotchas/async-server-only.md).
- Колбэк с сервера пропом. См. [non-serializable-props](../gotchas/non-serializable-props.md).

## Как надо

Page async, `fetch` там. Клиентская обёртка принимает `children`. Хуки только за `'use client'`.

## Шаги

1. Серверный fetch списка в `page.tsx`.
2. Кнопка корзины — отдельный клиентский файл.
3. Не импортировать page-список из кнопки.
4. В DevTools бандл кнопки есть, код fetch списка — нет.
