# window в серверном файле

## В чём проблема

`window`, `document`, `localStorage` в файле без `'use client'` падают на сервере. `typeof window !== 'undefined'` в серверном компоненте — запах: код не там.

## Как не делать

- Читать `localStorage` в `page.tsx` без client.
- Прятать DOM за `typeof window` и считать, что RSC это переживёт.

## Как надо

Браузерный API — остров. Серверная страница его не видит. Тема из `localStorage` — клиентский компонент после гидрации, не серверный HTML.
