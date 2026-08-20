# Error Boundary и Suspense

## Зачем

Вакансии пишут Suspense, error boundaries «на автомате». Boundary ловит throw **в рендере** дочернего дерева и показывает fallback. Suspense — ждём ленивый чанк / данные (где поддерживается), не крутим спиннер руками на каждый lazy.

## Как не делать

- Один Boundary на весь app и тишина в консоли — пользователь видит пустой экран без смысла.
- Ждать, что Boundary поймает ошибку в `onClick` или в `async` без проброса.
- `Suspense` вокруг всего подряд без lazy/resource.

## Как надо

Boundary на layout или на виджет дашборда. Fallback: «что-то сломалось» + retry. `React.lazy` + `Suspense` на тяжёлый chart/страницу. Async ошибки — через state/Query error UI, не через Boundary.

## Шаги

1. Смена A: класс `ErrorBoundary` (или тонкая обёртка) вокруг outlet.
2. Намеренно throw в дочернем рендере — видишь fallback.
3. `lazy` на один маршрут/виджет + Suspense fallback.
4. Прочитать [error-boundary-limits](../gotchas/error-boundary-limits.md).
