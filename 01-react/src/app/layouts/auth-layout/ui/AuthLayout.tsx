// FSD: app/layouts/auth-layout — рамка гостевых экранов.
// LAYOUT ≠ PAGE. Форма логина → pages/login (не сюда).
//
// EXPORT: named (см. ../index.ts). Default не нужен.
//
// Задача layout'а:
// 1) общая разметка (центрирование, фон)
// 2) <Outlet /> — дырка как <router-view />, туда роутер вставит LoginPage
//
// Роутер уже стоит. Раскомментируй Outlet, когда повесишь children в router.tsx:
//   path: "login", element: <AuthLayout />, children: [{ index: true, element: <LoginPage /> }]

import { Outlet } from "react-router";

import styles from "./AuthLayout.module.css";

export function AuthLayout() {
  return (
    <main className={`${styles.screen} ${styles.background}`}>
      <Outlet />
    </main>
  );
}
