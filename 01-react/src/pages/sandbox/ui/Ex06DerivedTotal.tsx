import { useState } from "react";

import styles from "./SandboxPage.module.css";

// ДЕЛАТЬ: total = price * qty на каждом рендере (как computed во Vue).
// НЕ ДЕЛАТЬ: useState(total) и синхронизировать в useEffect. Третий стейт разъедется.

export function Ex06DerivedTotal() {
  const [price, setPrice] = useState(100);
  const [qty, setQty] = useState(2);
  const total = price * qty;

  return (
    <section className={styles.card}>
      <h2>6. два стейта, сумма не в третьем</h2>
      <p className={styles.note}>total каждый рендер считается. Не useState(price * qty).</p>
      <label>
        цена
        <input
          type="number"
          value={price}
          onChange={(event) => {
            setPrice(Number(event.target.value));
          }}
        />
      </label>
      <label>
        шт
        <input
          type="number"
          value={qty}
          onChange={(event) => {
            setQty(Number(event.target.value));
          }}
        />
      </label>
      <p>итого: {total}</p>
    </section>
  );
}
