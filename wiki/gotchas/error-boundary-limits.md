# Error Boundary: что ловит, что нет

## В чём проблема

Boundary ловит ошибки **во время рендера** дочернего дерева (и в lifecycle классовых детей). Не ловит: обработчики событий, async/await после await, сам Boundary, серверный рендер в части случаев. Люди ставят Boundary и ждут, что любой `throw` в `onClick` покажет fallback.

## Как не делать

- `onClick={() => { throw new Error('x') }}` и ждать красный fallback Boundary.
- Глотать ошибку Query в пустоту, надеясь на Boundary.
- Один немой Boundary без «повторить» / лога.

## Как надо

Рендер-падения виджета — Boundary. Ошибки клика и fetch — `try/catch` / `isError` у Query / error UI. На собесе: «Boundary ≠ catch на всё приложение».
