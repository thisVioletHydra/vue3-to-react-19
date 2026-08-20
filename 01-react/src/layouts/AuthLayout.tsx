// LAYOUT ≠ PAGE.
// Layout = рамка вокруг страницы (как layout во Vue Router).
// Сюда НЕ кладёшь форму логина — форма живёт в pages/LoginPage.tsx.
//
// Задача layout'а:
// 1) общая разметка (центрирование, фон)
// 2) <Outlet /> — дырка как <router-view />, туда роутер вставит LoginPage
//
// Сначала: pnpm add react-router
// Потом раскомментируй import + <Outlet />.
//
// В роутах примерно так (пишешь сам в App / app/router.tsx):
//   { path: "/login", element: <AuthLayout />, children: [
//     { index: true, element: <LoginPage /> },
//   ]}

// import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main>
      {/* TODO после установки роутера: <Outlet /> */}
      сюда потом Outlet
    </main>
  );
}
