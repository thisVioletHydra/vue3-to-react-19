// Экран каталога. Роут: /catalog. Рамка: AdminLayout.
// Почему page, не feature: тут склейка (поиск + карточки + форма), не одно действие.
//
// EXPORT default — короткий lazy (вариант А), см. app/router.tsx:
//   lazy(() => import("./CatalogPage"))
// Named тоже можно (вариант Б) — тогда в lazy нужен .then → { default: m.CatalogPage }.
//
// TODO руками: перенеси стейт + разметку из app/App.tsx сюда.

export default function CatalogPage() {
  return null;
}
