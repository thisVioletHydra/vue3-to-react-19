import { useState } from "react";

import styles from "./SandboxPage.module.css";

// ДЕЛАТЬ: key по id, если строка живая (инпут внутри).
// НЕ ДЕЛАТЬ: key={index} — React путает DOM. Удали «зелёный», текст в инпуте прилипнет к соседу.

export function Ex02MapIndex() {
  const [indexItems, setIndexItems] = useState(["черный", "зелёный", "белый"]);

  return (
    <section className={styles.card}>
      <h2>2. map, key = индекс — ломается</h2>
      <p className={styles.note}>
        Удали «зелёный»: инпут прилипнет не к тому пункту. key=id так не делает.
      </p>
      <ul>
        {indexItems.map((item, index) => (
          <li key={index}>
            <input defaultValue={item} />
            <button
              type="button"
              onClick={() => {
                setIndexItems((prev) => prev.filter((_item, i) => i !== index));
              }}
            >
              удалить
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          setIndexItems(["черный", "зелёный", "белый"]);
        }}
      >
        сбросить список
      </button>
    </section>
  );
}
