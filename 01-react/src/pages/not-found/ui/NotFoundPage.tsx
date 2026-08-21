// FSD: pages/not-found. Роут: *.
// EXPORT: default (под lazy, как остальные pages).
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <main>
      <p className={styles.notFound}>oops</p>
    </main>
  );
}
