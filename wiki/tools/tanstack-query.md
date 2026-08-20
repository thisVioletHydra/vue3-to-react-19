# TanStack Query

## Зачем

Серверный стейт: кэш по ключу, дедуп, `isPending` / `error` / `data`, инвалидация после мутации, пагинация. Во Vue ты это частично делал watch + fetch + loading-ref. Здесь библиотека владеет жизненным циклом запроса. В вакансиях часто «React Query» — это оно.

## Как не делать

- Fetch в `useEffect` на каждую страницу после дня 2 (день 2 — специально один раз руками).
- Копировать `data` в Zustand.
- Ключ `['items', filters]` объектом каждый рендер.
- `if (id) useQuery(...)`.

## Как надо

Ключ из примитивов: `['items', page, q]`. Мутация → `invalidateQueries`. Нет id — `enabled: id !== undefined`. Провайдер `QueryClientProvider` в корне.

## Шаги

1. День 3: `pnpm add @tanstack/react-query`.
2. `QueryClient` + провайдер в `main` / `app`.
3. Список и деталка на `useQuery` с общим префиксом ключа.
4. Create через `useMutation`, после успеха инвалидация списка. Две страницы не бьют API дважды на один ключ — чек.
