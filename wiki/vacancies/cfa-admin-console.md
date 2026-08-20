# Вакансия: ЦФА admin console (Vite SPA)

Разбор типичной финтех-вакансии 200–300к: мульти-тенантный admin, RBAC, compliance-формы, charts, WebSocket, Storybook. Стек вакансии — **Vite SPA**, не Next.

Курс: ядро [`../plan.md`](../plan.md) → трек 1b [`../plan-fintech.md`](../plan-fintech.md). Демо = этот репо, не зоопарк петов.

---

## Что уже закрывает ядро

| Вакансия | Курс |
| --- | --- |
| React + TypeScript, Hooks | ядро, дни 1–5 |
| Vite | [`../tools/vite.md`](../tools/vite.md) |
| Zustand или RTK | Zustand. RTK сознательно нет — на собесе: «в новых проектах Zustand + Query» |
| React Query | TanStack Query |
| Сложные формы | RHF + Zod; в 1b — многошаговая / условные поля |
| REST, тяжёлые API | Query + ключи; OpenAPI — одна страница в tools при 1b |

---

## Что добивает трек 1b

| Вакансия | Где |
| --- | --- |
| Tailwind | смена A |
| Error boundaries, Suspense | смена A + gotchas |
| Recharts / таймсерии | смена B |
| WebSocket real-time | смена B |
| RBAC / разный UI по роли | смена C |
| Storybook / demo компонентов | смена C |
| Admin-смысл капстоуна | журнал операций + дашборд + онбординг-форма |

---

## Честный gap (не врать в отклике)

- Нет 2–4 лет **commercial** React. Есть коммерция Vue 3 + этот репо как миграция и демо.
- Нет продакшен-финтеха (Тиньков/Альфа). Есть паттерны UI: роли, таблица с фильтрами, chart, WS-мок, тяжёлая форма.
- Vitest/Playwright в репо не пишем — знаешь зачем они в стеке, см. [`../tools/interview-tests.md`](../tools/interview-tests.md).
- gRPC на фронте — не модуль курса; одна фраза: «контракт как OpenAPI, клиент генерится / руками, стримы отдельно».
- Ant/Mantine/shadcn — не онбординг целой библиотеки; Tailwind + свои примитивы. На собесе: «сяду на Mantine за спринт, паттерн component library знаком».

---

## Как формулировать в отклике

Пометка: **SWE Frontend**.

Резюме (смысл, не копипаста):

- Коммерческий frontend на Vue 3 (Composition, Pinia, Router, TypeScript).
- Миграция стека на React 19: Vite, Zustand, TanStack Query, React Router, RHF+Zod.
- Демо: admin-console фрагмент — RBAC-UI, журнал операций, real-time лента, chart, Storybook.

Ссылка: этот GitHub + 2–3 скрина / Storybook demo после смены C.

Не писать: «4 года React в финтехе». Писать: «Vue в проде, React закрыт миграционным проектом такого уровня».

---

## Next

Для этой вакансии Next **не гейт**. Трек [`../../02-next/wiki/`](../../02-next/wiki/) — потом, под другие вакансии.
