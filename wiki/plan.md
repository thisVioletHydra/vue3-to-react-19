# Трек 1. React SPA — 5 смен × 8 часов

Не учебник фронта. HTML, CSS, JS, TypeScript с нуля не входят. Только дельта Vue 3 Composition → React 19.

Стек ядра: **Vite + React 19 + TypeScript + React Router + Zustand + TanStack Query + React Hook Form + Zod**. Redux нет.

Вёрстка: день 1–4 можно CSS Modules; **с капстоуна и трека 1b — Tailwind** ([tools/tailwind.md](tools/tailwind.md)). Не тащим Ant/MUI целиком.

Один проект на все дни в `01-react/`. Сначала каталог (фильтры в URL, пагинация, деталка, create/edit). После ядра — [трек 1b](plan-fintech.md): admin console под Vite-финтех вакансии (роли, chart, WS, Storybook).

Как учимся: чат «го» → код → wiki → пуш в репо после дня/темы. Демо-пет = этот репо, не зоопарк.

Когда Vue-привычка врёт — [gotchas/](gotchas/). Тулзы — [tools/](tools/). Прогресс — [progress.md](progress.md).

Карта вакансии ЦФА: [vacancies/cfa-admin-console.md](vacancies/cfa-admin-console.md).

**Next не гейт для Vite-финтех.** Трек [`../02-next/wiki/`](../02-next/wiki/) — опционально после ядра+1b, под другие вакансии. Ядро закрыто = можно идти в 1b, не обязательно в Next.

---

## Зачем другой фреймворк в голове

В Vue 3 объект живой. `ref` / `reactive` — прокси. Пишешь `user.name = 'Борис'`, Vue обновляет шаблон. Компонент не перезапускается как функция.

`watch` для экрана не нужен. Watch — побочка во внешний мир. Вычисления — `computed`.

В React прокси нет. Компонент — **функция**. Снимок пропсов и стейта → JSX. Экран меняется после `setUser({ ...user, name: 'Борис' })`: React вызывает функцию ещё раз. Мутация `user.name = 'Борис'` у объекта из `useState` — ссылка та же, рендера нет.

Две Vue-привычки:

- Крутить объект на месте, как `reactive`. В React живой только новый вызов после setter.
- Считать `double` в `useEffect`, как в `watch`. Пиши `const double = count * 2` в теле функции. Данные с сервера — Query, не эффект.

`ref()` Vue ≠ `useRef` React. Реактивное значение — `useState`. Разбор: [gotchas/useref-no-rerender.md](gotchas/useref-no-rerender.md).

---

## Карта Vue → React

- `<script setup>` + шаблон → `function Card({ title }: Props) { return (...); }`
- `defineProps` → аргумент функции
- `defineEmits` → колбэк `onUpdate`
- слот → `children`
- `v-if` / `v-for` → условие и `.map` + стабильный `key`
- `v-model` → `value` + `onChange`
- `ref()` / `reactive()` → `useState`
- `computed` → выражение в теле функции
- `watch` → почти никогда; внешний мир — `useEffect`; сервер — Query
- composable → `useSomething`
- `provide` / `inject` → Context, не стор
- Pinia → Zustand
- Vue Router → React Router, `<Outlet />`

---

## День 1. Рендер, JSX, стейт

Сначала прочитай гайд и чеклист — не мой коммит:

- [migrate/day-01.md](migrate/day-01.md) — Vue рядом с React
- [checklists/day-01.md](checklists/day-01.md) — задания руками

Тулзы: [Vite](tools/vite.md), [oxlint](tools/oxlint.md), [format / oxfmt](tools/format.md).

Готчи: [ребёнок не return](gotchas/child-no-return.md), [controlled input](gotchas/controlled-input.md), [key](gotchas/key-identity.md), [useRef](gotchas/useref-no-rerender.md).

В репо уже скелет каталога. Ты его **ломаешь и чинишь** по чеклисту. Я не сдаю день за тебя.

---

## День 2. Эффекты + роутер

Тулза: [react-router](tools/react-router.md).

Готчи: [stale closure](gotchas/stale-closure.md), [батч setState](gotchas/setstate-batch.md), [объект в депах](gotchas/effect-object-deps.md), [Strict Mode](gotchas/strict-mode-double-effect.md).

Один ручной fetch с abort. Потом Query его заменит. Layout, список, деталка, фильтры в URL.

Чек: `double` в рендере. Фильтры переживают F5.

---

## День 3. Zustand + Query

Тулзы: [zustand](tools/zustand.md), [tanstack-query](tools/tanstack-query.md).

Готчи: [селектор](gotchas/zustand-select-all.md), [data в стор](gotchas/query-into-zustand.md), [хуки в if](gotchas/hooks-in-if.md), [синглтон](gotchas/module-singleton.md), [context не стор](gotchas/context-not-store.md).

Чек: один query-ключ на две страницы. Корзина живёт при переходах.

---

## День 4. Формы + FSD

Тулзы: [react-hook-form](tools/react-hook-form.md), [zod](tools/zod.md), [css-modules](tools/css-modules.md) (если ещё без Tailwind).

Готчи: [проп в useState](gotchas/props-to-usestate.md), форма не через ref — снова [child-no-return](gotchas/child-no-return.md).

Слои: `app` / `pages` / `widgets` / `features` / `entities` / `shared`. Фича не импортит соседнюю фичу.

---

## День 5. Капстоун ядра

Дожать пагинацию, пустое/ошибка/лоадер. Можно начать Tailwind на новых экранах.

**Дальше не Next по умолчанию** — [трек 1b финтех](plan-fintech.md): admin console, charts, WS, RBAC, Storybook. Next — когда ядро+1b закрыты и вакансия про App Router.

Выход из ядра — чек в [progress.md](progress.md), блок «Ядро».
