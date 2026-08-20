# Трек 1b. Финтех admin console — 3 смены × 8 часов

Стартуем после ядра: блок **Ядро** в [`progress.md`](progress.md) закрыт. План ядра — [`plan.md`](plan.md). Карта вакансии — [`vacancies/cfa-admin-console.md`](vacancies/cfa-admin-console.md).

Код всё ещё в `01-react/`. Капстоун по смыслу — **мини admin console**, не магазин: роли, журнал операций, дашборд + live, compliance-форма. Это демо для отклика.

В чате: «го финтех» / «смена A».

---

## Смена A. Tailwind, UI-примитивы, Error Boundary, Suspense

Тулзы: [tailwind](tools/tailwind.md), [error-boundary-suspense](tools/error-boundary-suspense.md).

Готча: [error-boundary-limits](gotchas/error-boundary-limits.md).

- Подключить Tailwind. Новые экраны на utility-классах; CSS Modules не раздувать.
- Примитивы: Button, Input, Table-обёртка — без Ant/MUI-онбординга.
- `ErrorBoundary` на layout/странице. `Suspense` + lazy на тяжёлый кусок (дашборд или chart-заглушка).

Чек: страница не роняет всё дерево при throw в дочернем рендере. Fallback виден. Стили без глобальной каши имён.

---

## Смена B. Recharts + WebSocket-мок

Тулзы: [recharts](tools/recharts.md), [websocket](tools/websocket.md).

Готча: [ws-stale-closure](gotchas/ws-stale-closure.md).

- Таймсерия + бар на мок-данных (Recharts).
- Live-лента статусов / «orderbook» на ~20 строк.
- Хук `useWsChannel`: подписка, cleanup, reconnect-политика простая. В dev — MockWebSocket или `setInterval`-имитация, без обязательного отдельного сервера.
- Не класть WS-поток в Query как «серверный стейт списка с REST». Query — HTTP-кэш; WS — подписка с cleanup.

Чек: Strict Mode не оставляет висящих таймеров. Смена «канала» чистит прошлую подписку. График обновляется без копирования всего в Zustand без нужды.

---

## Смена C. RBAC-UI, тяжёлая форма, Storybook

Тулзы: [rbac-ui](tools/rbac-ui.md), [storybook](tools/storybook.md), снова [react-hook-form](tools/react-hook-form.md) / [zod](tools/zod.md).

Готча: [role-in-render](gotchas/role-in-render.md).

- Роль в Zustand: `issuer | broker | investor | compliance | regulator`. Меню и колонки таблицы зависят от роли.
- Многошаговая compliance-форма (KYB/KYC-паттерн): условные поля по шагу и типу, Zod на схему.
- Storybook: 2–3 сториса (карточка/строка таблицы/chart). Demo-страница в приложении.
- README репо под отклик «SWE Frontend» + ссылка на карту вакансии.

Чек: смена роли меняет UI без `if (role) useQuery`. Форма не через `ref.getValues()`. Storybook поднимается локально.

---

## Готово к Vite-финтех отклику

Когда смена C закрыта и ядро закрыто — можно кидать репо в отклик с пометкой SWE Frontend. Next не обязателен. Vitest/Playwright — знать словами: [interview-tests](tools/interview-tests.md).
