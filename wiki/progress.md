# Прогресс. React

Календарные дни в [plan.md](plan.md) — порядок, не обязаловка. За вечер можно закрыть пять понятных тем. Zustand можно жевать отдельно.

Тема закрыта, когда без файла говоришь: в чём дыра, как не делать, как надо.

В чате: «го» / «закрыл useref» / «давай zustand». После закрытия сюда ставится `[x]`.

Next не начинаем, пока не закрыт блок **Ядро**.

---

## Ядро (гейт на Next)

- [ ] Модель рендера: мутация `useState` молчит, нужен setter и новый объект
- [ ] Данные вверх: колбэк / lift state, не `return` ребёнка и не `ref.getValues()`
- [ ] `useRef` ≠ Vue `ref()`
- [ ] Вычисление в теле функции, не в `useEffect`
- [ ] Фильтры каталога переживают F5 (когда появится роутер)

---

## Готчи

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

## Тулзы

Прочитал файл и один раз потрогал в каталоге.

- [ ] [vite](tools/vite.md)
- [ ] [oxlint](tools/oxlint.md)
- [ ] [react-router](tools/react-router.md)
- [ ] [zustand](tools/zustand.md)
- [ ] [tanstack-query](tools/tanstack-query.md)
- [ ] [react-hook-form](tools/react-hook-form.md)
- [ ] [zod](tools/zod.md)
- [ ] [css-modules](tools/css-modules.md)

---

## Капстоун

- [ ] Каталог: список, фильтры в URL, пагинация, деталка, create/edit
- [ ] Без шпаргалки: Zustand vs Query, зачем `key`, данные вверх
