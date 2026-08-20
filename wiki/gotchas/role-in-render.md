# Роль в рендере: не прятать хуки

## В чём проблема

`if (role === 'compliance') useQuery(...)` ломает правила хуков: порядок вызовов прыгает при смене роли. То же с `if (canEdit) useForm()`. RBAC на UI — это что **рисуем**, не что **вызываем** из хуков.

## Как не делать

```ts
if (role === 'compliance') {
  useQuery({ queryKey: ['sanctions'] });
}
```

Или две разные страницы-копии с одинаковыми хуками «чтобы проще».

## Как надо

Хук всегда:

```ts
useQuery({
  queryKey: ['sanctions'],
  enabled: role === 'compliance',
});
```

Меню/колонки — фильтр конфига по роли. На собесе: UI hide ≠ server deny; `enabled` для запросов.
