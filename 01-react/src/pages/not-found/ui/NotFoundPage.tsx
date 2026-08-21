import { Link } from "react-router";

import { routes } from "#/app/routes";

import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles.screen}>
      <p className={styles.code} aria-hidden="true">
        404
      </p>
      <h1 className={styles.title}>Роут сбежал</h1>
      <p className={styles.text}>
        Такого адреса нет. Сессия тут ни при чём — просто URL мимо карты.
      </p>
      <Link className={styles.back} to={routes.root}>
        На корень
      </Link>
    </main>
  );
}
