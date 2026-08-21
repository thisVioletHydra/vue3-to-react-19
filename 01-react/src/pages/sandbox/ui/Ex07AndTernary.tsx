import { useState } from "react";

import { swatchStyle } from "./shared";
import styles from "./SandboxPage.module.css";

const ON_COLOR = {
  on: "#7aa2ff",
  off: "#9aa8bc",
} as const;

// ДЕЛАТЬ: {on === true && <p/>} и тернарник, когда есть ветка else.
// НЕ ДЕЛАТЬ: {count && <p/>} — ноль это falsy, блок пропадёт. Только явный boolean.

export function Ex07AndTernary() {
  const [on, setOn] = useState(true);
  const color = on === true ? ON_COLOR.on : ON_COLOR.off;

  return (
    <section className={styles.card} style={swatchStyle(color)}>
      <h2>7. && и тернарник</h2>
      <div className={styles.row}>
        <button type="button" onClick={() => setOn((prev) => prev === false)}>
          on = {String(on)}
        </button>
        <div className={styles.swatch} />
        <p className={styles.hex}>{color}</p>
      </div>
      {on === true && <p>&& : блок виден, пока true</p>}
      {on === true ? <p>тернарник: ветка true</p> : <p>тернарник: ветка false</p>}
    </section>
  );
}
