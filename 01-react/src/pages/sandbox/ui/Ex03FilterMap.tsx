import { useState } from "react";

import { PEOPLE } from "./shared";
import styles from "./SandboxPage.module.css";

// ДЕЛАТЬ: сначала filter, потом map. Два прохода — норма.
// НЕ ДЕЛАТЬ: filter внутри JSX без переменной, если выражение не читается.

export function Ex03FilterMap() {
  const [query, setQuery] = useState("");

  const filtered = PEOPLE.filter((person) => {
    return person.name.toLowerCase().includes(query.trim().toLowerCase());
  });

  return (
    <section className={styles.card}>
      <h2>3. filter + map</h2>
      <input
        value={query}
        placeholder="фильтр по имени"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      <ul>
        {filtered.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </section>
  );
}
