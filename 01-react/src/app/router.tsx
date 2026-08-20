// Карта роутов (пиши сам в App.tsx или здесь).
// Сначала: pnpm add react-router
// Потом в main.tsx оберни <BrowserRouter> вокруг <App />
//   ИЛИ используй createBrowserRouter + <RouterProvider />
//
// Дерево (Vue Router nested routes ≈ children + Outlet):
//
//   /login          → AuthLayout → LoginPage     (гость)
//   /catalog        → AdminLayout → CatalogPage  (нужна «сессия»)
//   /               → Navigate to="/login"       (дефолт = логин)
//   *               → NotFoundPage               (404)
//
// Guard «авторизован?»:
//   простой вариант на старте — функция RequireAuth:
//     if (localStorage.getItem("auth") !== "1") return <Navigate to="/login" replace />
//     return <Outlet />
//   вешаешь RequireAuth родителем над AdminLayout (или внутрь AdminLayout).
//
// Logout в сайдбаре AdminLayout:
//   localStorage.removeItem("auth"); navigate("/login");
//
// App.tsx после роутера должен стать тонким: только Routes, без каталога.
// Каталог целиком уезжает в pages/CatalogPage.tsx (copy-paste из текущего App).

export {};
