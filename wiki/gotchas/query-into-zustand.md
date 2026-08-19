# Query: скопировал data в Zustand

## В чём проблема

Query уже кэш: ключ, `data`, `isPending`, `error`, инвалидация. Скопировал `data` в Zustand «чтобы было удобно» — два источника правды, ручной loading, протухший список после мутации.

Вторая дыра: ключ `['items', filters]` где `filters` — новый объект каждый рендер. Кэш не попадается, запросы бесконечные.

## Как не делать

- `useEffect(() => { setItems(data); }, [data])` из Query в стор.
- Класть товары в Zustand и самим писать refetch.
- Ключ из объекта-литерала.

## Как надо

Компонент читает `useQuery`. После create/update — `invalidateQueries`. Ключ из примитивов: `['items', page, q]`. Zustand — корзина, флаги UI. На собесе: server state vs client state; Query владеет сервером.
