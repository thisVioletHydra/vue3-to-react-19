import { PEOPLE } from "./shared";
import styles from "./SandboxPage.module.css";

// ДЕЛАТЬ: index в тексте «1. Анна», key всё равно person.id.
// НЕ ДЕЛАТЬ: путать «номер на экране» и key. Это разные вещи.

export function Ex04IndexInLabel() {
  return (
    <section className={styles.card}>
      <h2>4. номер в тексте, key всё равно id</h2>
      <p className={styles.note}>
        Индекс можно показать. Нельзя класть в key, если список двигается.
      </p>
      <ul>
        {PEOPLE.map((person, index) => (
          <li key={person.id}>
            {index + 1}. {person.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
