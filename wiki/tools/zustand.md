# Zustand

## Зачем

Твоя Pinia: стор = стейт + экшены, хук с селектором, без Redux-обвязки. Клиентский стейт далеко от клика: корзина, сайдбар. Не ответ API.

## Как не делать

- Класть товары с сервера в стор. См. [query-into-zustand](../gotchas/query-into-zustand.md).
- `useStore()` без селектора. См. [zustand-select-all](../gotchas/zustand-select-all.md).
- `let cart = []` в модуле вместо стора. См. [module-singleton](../gotchas/module-singleton.md).
- Context «как стор». См. [context-not-store](../gotchas/context-not-store.md).

## Как надо

```ts
export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (id) => set((s) => ({ items: [...s.items, id] })),
}));

const count = useCartStore((s) => s.items.length);
```

## Шаги

1. День 3: `npm install zustand` в `01-react`.
2. Стор корзины, селектор на счётчик в хедере.
3. Добавить с карточки, перейти на деталку — счётчик живой.
4. Список товаров в стор не копировать. Если потянуло — стоп, это Query.
