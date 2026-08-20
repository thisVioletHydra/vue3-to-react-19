# Прогресс. React

Календарные дни — порядок, не обязаловка. Тема закрыта, когда без файла: дыра / как не делать / как надо.

В чате: «го» / «закрыл useref» / «го финтех». После закрытия — `[x]`.

**Vite-финтех отклик:** ядро + трек 1b. Next не обязателен.

---

## Ядро (гейт на 1b и на Next)

- [ ] Модель рендера: мутация `useState` молчит, нужен setter и новый объект
- [ ] Данные вверх: колбэк / lift state, не `return` ребёнка и не `ref.getValues()`
- [ ] `useRef` ≠ Vue `ref()`
- [ ] Вычисление в теле функции, не в `useEffect`
- [ ] Фильтры каталога переживают F5 (когда появится роутер)

---

## Готчи ядра

- [ ] [child-no-return](gotchas/child-no-return.md)
- [ ] [useref-no-rerender](gotchas/useref-no-rerender.md)
- [ ] [controlled-input](gotchas/controlled-input.md)
- [ ] [key-identity](gotchas/key-identity.md)
- [ ] [stale-closure](gotchas/stale-closure.md)
- [ ] [setstate-batch](gotchas/setstate-batch.md)
- [ ] [props-to-usestate](gotchas/props-to-usestate.md)
- [ ] [effect-object-deps](gotchas/effect-object-deps.md)
- [ ] [strict-mode-double-effect](gotchas/strict-mode-double-effect.md)
- [ ] [hooks-in-if](gotchas/hooks-in-if.md)
- [ ] [context-not-store](gotchas/context-not-store.md)
- [ ] [zustand-select-all](gotchas/zustand-select-all.md)
- [ ] [query-into-zustand](gotchas/query-into-zustand.md)
- [ ] [module-singleton](gotchas/module-singleton.md)

---

## Тулзы ядра

- [ ] [vite](tools/vite.md)
- [ ] [oxlint](tools/oxlint.md)
- [ ] [react-router](tools/react-router.md)
- [ ] [zustand](tools/zustand.md)
- [ ] [tanstack-query](tools/tanstack-query.md)
- [ ] [react-hook-form](tools/react-hook-form.md)
- [ ] [zod](tools/zod.md)
- [ ] [css-modules](tools/css-modules.md)

---

## Капстоун ядра

- [ ] Каталог: список, фильтры в URL, пагинация, деталка, create/edit
- [ ] Без шпаргалки: Zustand vs Query, зачем `key`, данные вверх

---

## Трек 1b — финтех ([plan-fintech.md](plan-fintech.md))

Карта вакансии: [vacancies/cfa-admin-console.md](vacancies/cfa-admin-console.md).

### Готчи 1b

- [ ] [error-boundary-limits](gotchas/error-boundary-limits.md)
- [ ] [ws-stale-closure](gotchas/ws-stale-closure.md)
- [ ] [role-in-render](gotchas/role-in-render.md)

### Тулзы 1b

- [ ] [tailwind](tools/tailwind.md)
- [ ] [error-boundary-suspense](tools/error-boundary-suspense.md)
- [ ] [recharts](tools/recharts.md)
- [ ] [websocket](tools/websocket.md)
- [ ] [rbac-ui](tools/rbac-ui.md)
- [ ] [storybook](tools/storybook.md)
- [ ] [interview-tests](tools/interview-tests.md) — прочитать, код тестов не пишем

### Чек 1b

- [ ] Смена A: Tailwind + Error Boundary + Suspense
- [ ] Смена B: Recharts + WS-мок с cleanup
- [ ] Смена C: роли UI + многошаговая форма + Storybook
- [ ] README готов к отклику «SWE Frontend»

---

## Готово к Vite-финтех отклику

- [ ] Ядро + 1b закрыты
- [ ] Репо запушен, скрины / Storybook demo на месте
- [ ] Формулировка в отклике честная (Vue коммерция + этот демо)

---

## Next (опционально)

Не блокер для ЦФА/Vite-вакансий. Когда понадобится — [`../02-next/wiki/`](../02-next/wiki/).

- [ ] Ядро закрыто (обязательно)
- [ ] 1b желательно закрыт
- [ ] Старт App Router по next-плану
