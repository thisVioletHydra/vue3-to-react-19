import { Outlet, useNavigate } from "react-router";

import { session } from "#/app/guards/Session";
import { useAdminNav } from "#/app/layouts/admin-layout/model/useAdminNav";
import { routes } from "#/app/routes";

import styles from "./AdminLayout.module.css";
import { AdminNav } from "./AdminNav";

export function AdminLayout() {
  const navigate = useNavigate();
  const { NAV } = useAdminNav();

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <p className={styles.brand}>Админка</p>
        <hr className={styles.line} />

        <AdminNav list={NAV} />

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
