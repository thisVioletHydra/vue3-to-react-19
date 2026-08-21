import { PEOPLE } from "./shared";
import styles from "./SandboxPage.module.css";

// ДЕЛАТЬ: key = стабильный id (как Vue :key="id").
// НЕ ДЕЛАТЬ: key={index}, если список фильтруют/удаляют/сортируют.

export function Ex01MapById() {
  return (
    <section className={styles.card}>
      <h2>1. map, key = id</h2>
      <p className={styles.note}>Как v-for + :key="id". Индекс в key не нужен.</p>
      <ul>
        {PEOPLE.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </section>
  );
}
