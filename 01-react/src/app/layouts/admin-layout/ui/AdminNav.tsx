import { NavLink } from "react-router";

import styles from "./AdminLayout.module.css";

// Это КОМПОНЕНТ (= Vue SFC), не composable.
// Сюда: разметка списка. Логику «какие пункты» можно принять пропом
// или взять из хука useAdminNav (см. ../model/useAdminNav.ts).
//
// Что вырезать из AdminLayout: <nav>…</nav> целиком + цикл NAV.map.
// Что оставить в layout: brand, hr, логаут, Outlet.
//
// Проп как Vue props: { items } — родитель кидает массив, ты рисуешь.
//   Vue:  <AdminNav :items="items" />
//   React: <AdminNav items={items} />
//
// Цикл:
//   Vue:  v-for="item in items" :key="item.to"
//   React: items.map((item) => <li key={item.to}>…</li>)
// key = :key, стабильный id (to), не индекс.
//
// Стили те же: styles.nav / .list / .link / .active — это CSS модуля layout'а,
// пока не плоди второй css. Потом вынесешь, если разъедутся.
//
// В конце layout: <AdminNav items={…} /> вместо текущего <nav>.

type AdminNavProps = {
  list: readonly { to: string; label: string; end: boolean }[];
};

export function AdminNav({ list }: AdminNavProps) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {list.map((f) => (
          <li key={f.to}>
            <NavLink
              to={f.to}
              end={f.end}
              className={({ isActive }) => {
                return isActive ? `${styles.link} ${styles.active}` : styles.link;
              }}
            >
              {f.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
