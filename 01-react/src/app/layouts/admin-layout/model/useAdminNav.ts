// Это COMPOSABLE, в React = custom hook. Имя с use, иначе правила хуков не действуют.
//
// Vue:
//   const { items } = useAdminNav()
//   items — ref, в шаблоне реактивен сам
//
// React:
//   const { items } = useAdminNav()
//   items — обычный массив ЭТОГО рендера.
//   «Реактивность» = хук внутри вызвал useState/useSyncExternalStore,
//   компонент перерисовался, деструктуризация дала уже новые значения.
//   Отдельного Proxy/ref нет. Деструктурить можно, не потеряешь обновления.
//
// Сюда: данные и вычисления. JSX не клади.
// Сейчас пункты статичные — хук почти бесполезен, это тренировка.
// Потом сюда же: фильтр по роли, пункт «Песочница» только для admin, etc.
//
// Layout:
//   const { items } = useAdminNav()
//   <AdminNav items={items} />

export function useAdminNav() {
  // const items = [ { to: routes.adminPanel, label: "Каталог", end: true }, … ]

  return {
    items: [] as { to: string; label: string; end: boolean }[],
  };
}
