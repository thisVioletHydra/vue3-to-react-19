import { NavLink, Outlet, useNavigate } from "react-router";

import { session } from "#/app/guards/Session";
import { routes } from "#/app/routes";

import styles from "./AdminLayout.module.css";

const NAV = [
  { to: routes.adminPanel, label: "Каталог", end: true },
  { to: routes.adminUsers, label: "Юзеры", end: false },
  { to: routes.adminTables, label: "Таблицы", end: false },
  { to: routes.adminCharts, label: "Чарты", end: false },
  { to: routes.adminSettings, label: "Настройки", end: false },
  { to: routes.adminKit, label: "Песочница", end: false },
] as const;

export function AdminLayout() {
  const navigate = useNavigate();

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <p className={styles.brand}>Админка</p>
        <hr className={styles.line} />
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => {
                    return isActive ? `${styles.link} ${styles.active}` : styles.link;
                  }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className={styles.logout}
          onClick={() => {
            const confirmed = window.confirm("Вы уверены, что хотите выйти?");

            if (confirmed === false) {
              return;
            }

            session.clear();
            navigate(routes.login, { replace: true });
          }}
        >
          Выйти
        </button>
      </aside>
      <main className={styles.content}>
        <div className={styles.inner}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
