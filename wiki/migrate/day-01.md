# Миграция Vue → React. День 1 без ребусов

Ты пишешь Vue 3 Composition. React здесь — те же задачи другим синтаксисом. Ниже разбор **того кода, что уже лежит в `01-react/`**, строка к строке с Vue в голове.

---

## Точка входа

| Vue | React |
| --- | --- |
| `index.html` + `createApp(App).mount('#app')` | `index.html` + `createRoot(...).render(<App />)` в `main.tsx` |

`main.tsx` — это твой `main.ts`. Один раз повесил приложение на `#root`.

### StrictMode — не магия и не «режим продакшена»

```tsx
<StrictMode>
  <App />
</StrictMode>
```

Обёртка **только для разработки**. React специально дважды монтирует/дергает эффекты в dev, чтобы ты ловил утечки (забытый cleanup). В проде один раз. На день 1 эффектов нет — StrictMode почти не заметен. Не выключай «потому что бесит», пока не поймёшь cleanup на дне 2.

Аналог во Vue нет один в один. Ближе всего: «dev-проверки, которых нет в prod build».

---

## Компонент = функция, не SFC

Vue:

```vue
<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <h1>{{ title }}</h1>
</template>
```

React:

```tsx
function ProductCard({ title }: { title: string }) {
  return (
    <h1>{title}</h1>
  );
}
```

Шаблон и скрипт — одна функция. `return` возвращает разметку (JSX), не данные родителю.

### Почему `return (` в круглых скобках

```tsx
return (
  <main>
    <h1>…</h1>
  </main>
);
```

JSX на несколько строк. Без скобок после `return` перевод строки = ASI в JS: `return;` и дальше мёртвый код. Скобки говорят: «возвращаю вот это целиком». Во Vue перевод строки в `<template>` такой проблемы не даёт.

Одна строка можно без скобок: `return <h1>{title}</h1>;`

---

## Props и «эмит»

Vue вниз: props. Вверх: `emit('add', id)` / `defineEmits`.

React вниз: аргумент функции. Вверх: **колбэк в props**. Отдельного `emit` нет.

```tsx
// родитель
<ProductCard
  product={product}
  onAddToList={(productId) => {
    setSelectedIds((prev) => [...prev, productId]);
  }}
/>
```

```tsx
// ребёнок
type Props = {
  product: Product;
  onAddToList: (productId: string) => void;
};

button onClick={() => { onAddToList(product.id); }}
```

### Что за `prop={() => ...}`

Это не специальный синтаксис React. Это обычная стрелочная функция в JS, переданная как значение пропа.

- `onAddToList={setSelectedIds}` — передал готовую функцию (если сигнатура совпадает).
- `onAddToList={(productId) => { ... }}` — передал **новую** функцию, которая внутри зовёт твой `setState`.

Во Vue то же самое по смыслу:

```vue
<ProductCard @add="(id) => selectedIds.push(id)" />
```

только сахар `@add` / `emit`. В React сахар нет — всегда явный колбэк.

`onClick={() => onAddToList(product.id)}` — «когда кликнут, вызови колбэк с id».  
Не `onClick={onAddToList(product.id)}` — это вызов **сразу при рендере**, не при клике.

---

## Стейт

Vue: `const query = ref('')` → `query.value = 'x'`, шаблон сам обновится.

React:

```tsx
const [query, setQuery] = useState('');
setQuery('x'); // нельзя query = 'x' и нельзя мутировать объект из стейта на месте
```

Инпут:

```tsx
<input value={query} onChange={(e) => setQuery(e.target.value)} />
```

Это твой `v-model` руками: значение вниз, изменение вверх.

Список/объект — только копией:

```tsx
setProducts((prev) => [...prev, newItem]);
```

не `products.push(newItem)`.

---

## children = слот

```tsx
<ProductCard …>
  <span>id: {product.id}</span>
</ProductCard>
```

Внутри карточки `{children}` — как `<slot />` по умолчанию.

---

## map + key

Vue: `v-for="p in list" :key="p.id"`.

React:

```tsx
{list.map((product) => (
  <ProductCard key={product.id} product={product} … />
))}
```

`key` — не prop для тебя в компоненте, React сам его ест для сверки списка. Ставь `id`, не индекс.

---

## Чего на дне 1 нет (и не ищи)

- `useEffect` / watch  
- роутер  
- Pinia → Zustand  
- fetch  

Сначала: функция-компонент, props, стейт, колбэк вверх, controlled input.
