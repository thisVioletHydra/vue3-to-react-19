import { useState } from "react";

import { swatchStyle } from "./shared";
import styles from "./SandboxPage.module.css";

const TAB_COLOR = {
  a: "#7aa2ff",
  b: "#3ecf8e",
} as const;

// ДЕЛАТЬ: стейт → объект цветов → style={{ "--swatch": color }} на карточке.
// Квадрат в CSS: background: var(--swatch). Не хардкодь цвет в трёх классах.
// НЕ ДЕЛАТЬ: два булева isA/isB. Один tab: "a" | "b".

export function Ex05Tabs() {
  const [tab, setTab] = useState<"a" | "b">("a");

  return (
    <section className={styles.card} style={swatchStyle(TAB_COLOR[tab])}>
      <h2>5. переключение стейта</h2>
      <p className={styles.note}>
        Стейт tab → цвет в коде → CSS-переменная --swatch. Квадрат показывает текущий.
      </p>
      <div className={styles.row}>
        <button type="button" onClick={() => setTab("a")}>
          вкладка A
        </button>
        <button type="button" onClick={() => setTab("b")}>
          вкладка B
        </button>
        <div className={styles.swatch} />
        <p className={styles.hex}>{TAB_COLOR[tab]}</p>
      </div>
      {tab === "a" ? <p>Контент A</p> : <p>Контент B</p>}
    </section>
  );
}
