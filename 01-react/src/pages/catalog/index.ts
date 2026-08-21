// PUBLIC API каталога. Снаружи: import { CatalogPage } from "../pages/catalog"
// Stub: разметку из app/App.tsx перенесёшь сам в ui/CatalogPage.tsx
//
// lazy вариант А (default в ui):
//   const CatalogPage = lazy(() => import("./ui/CatalogPage"));
// lazy вариант Б (через эту дверь):
//   const CatalogPage = lazy(() =>
//     import("../pages/catalog").then((m) => ({ default: m.CatalogPage })),
//   );

export { default as CatalogPage } from "./ui/CatalogPage";
