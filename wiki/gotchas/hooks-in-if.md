# Хуки нельзя прятать в if

## В чём проблема

React узнаёт хуки **по порядку вызовов** между рендерами. Пропустил `useQuery` в одном запуске — сломал соответствие стейта. Во Vue composable в условии часто проглотят. Здесь нет.

`if (!id)` как условие хука ещё и truthy-магия. В этом репо явная сверка: `id !== undefined`.

## Как не делать

```ts
if (id !== undefined) {
  useQuery({ queryKey: ['item', id], queryFn });
}
```

Или `if (id) useQuery(...)` — и хук в условии, и неявный boolean.

## Как надо

Хук вызывается всегда. Условность — опция:

```ts
useQuery({
  queryKey: ['item', id],
  queryFn: () => getItem(id),
  enabled: id !== undefined,
});
```

На собесе: rules of hooks — порядок, не «можно в if если осторожно».
