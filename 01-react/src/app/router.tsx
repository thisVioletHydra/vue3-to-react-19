// FSD карта (слои сверху вниз, импорт только вниз / вбок на shared — не вверх):
//
//   app/          роутер, layout'ы, провайдеры, тонкий App
//   pages/        целые экраны под URL (login, catalog, not-found)
//   widgets/      (пока пусто) крупные блоки из нескольких фич
//   features/     действия юзера (add-product, search-products)
//   entities/     сущности бизнеса (product)
//   shared/       (пока пусто) ui-kit, lib, api-клиент
//
// Где что в роутере (пиши/правишь сам):
//   /login     → AuthLayout  + LoginPage
//   /catalog   → AdminLayout + CatalogPage   (+ guard auth)
//   /          → Navigate → /login
//   *          → NotFoundPage
//
// Сейчас у тебя App как element "/" — ок для дня 1, но это НЕ финальная схема.
// Цель: App тонкий или вообще только RouterProvider в main; страницы = pages/*.
//
// --- ЛЕНИВАЯ ЗАГРУЗКА (code-split) ---
// Смысл: JS экрана качается, когда юзер реально пошёл на URL, а не весь бандл сразу.
// React.lazy ВСЕГДА ждёт module.default. Отсюда два рабочих варианта.
//
// Вариант А — page с export default (как LoginPage сейчас). Коротко:
//
//   const LoginPage = lazy(() => import("../pages/login/ui/LoginPage"));
//   // import() вернул { default: LoginPage } — lazy доволен.
//
// Вариант Б — page только named export. Тоже ок, но обёртка:
//
//   const LoginPage = lazy(() =>
//     import("../pages/login").then((m) => ({ default: m.LoginPage })),
//   );
//   // index.ts отдал { LoginPage }, мы руками кладём его в default.
//
// Что НЕ миф: default на page-модуле экономит .then. Имена роутов (/login vs /sign-in)
// на lazy не влияют вообще.
// Что миф: «файл обязан называться LoginPage иначе lazy сломается». Имя файла — вкусовщина.
//
// Layouts/features обычно НЕ lazy — они маленькие и нужны сразу.
// Лениво режут тяжёлые pages (каталог, дашборд).
//
// В роутере потом примерно так (сам вставишь, когда дойдёшь):
//
//   const CatalogPage = lazy(() => import("../pages/catalog/ui/CatalogPage"));
//   { path: "catalog", element: (
//     <Suspense fallback={null}>
//       <CatalogPage />
//     </Suspense>
//   )}
//
// Без <Suspense> вокруг lazy-компонента React орнёт. fallback — что показать, пока чанк качается.

import { createBrowserRouter } from "react-router";

import App from "./App";
import { AdminLayout } from "./layouts/admin-layout";
import { AuthLayout } from "./layouts/auth-layout";
import { NotFoundPage } from "../pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "auth",
        element: <AuthLayout />,
      },
      {
        path: "admin",
        element: <AdminLayout />,
      },
    ],
  },
]);
