import { useState } from "react";

import { swatchStyle, wait } from "./shared";
import styles from "./SandboxPage.module.css";

type Status = "idle" | "pending" | "error" | "empty" | "ok";

const STATUS_COLOR: Record<Status, string> = {
  idle: "#9aa8bc",
  pending: "#e6b84d",
  error: "#ff5c7a",
  empty: "#c5cad3",
  ok: "#3ecf8e",
};

// ДЕЛАТЬ: один status, от него и UI и --swatch.
// НЕ ДЕЛАТЬ: isLoading + isError + isEmpty кучей булов. Они врут друг другу.
// Это не Suspense: сами крутим pending → ok/error.

export function Ex08FetchStatus() {
  const [status, setStatus] = useState<Status>("idle");
  const [rows, setRows] = useState<string[]>([]);

  return (
    <section className={styles.card} style={swatchStyle(STATUS_COLOR[status])}>
      <h2>8. статусы загрузки без Suspense</h2>
      <div className={styles.row}>
        <div className={styles.swatch} />
        <p className={styles.hex}>
          {status} · {STATUS_COLOR[status]}
        </p>
      </div>
      <div className={styles.row}>
        <button
          type="button"
          onClick={() => {
            setStatus("pending");
            setRows([]);
            void wait(700).then(() => {
              setRows(["строка 1", "строка 2"]);
              setStatus("ok");
            });
          }}
        >
          ок
        </button>
        <button
          type="button"
          onClick={() => {
            setStatus("pending");
            void wait(500).then(() => {
              setRows([]);
              setStatus("empty");
            });
          }}
        >
          пусто
        </button>
        <button
          type="button"
          onClick={() => {
            setStatus("pending");
            void wait(500).then(() => {
              setStatus("error");
            });
          }}
        >
          ошибка
        </button>
      </div>
      {status === "idle" ? <p>ещё не жали</p> : null}
      {status === "pending" ? <p>грузим…</p> : null}
      {status === "error" ? <p>сервер отвалился</p> : null}
      {status === "empty" ? <p>список пустой</p> : null}
      {status === "ok" ? (
        <ul>
          {rows.map((row) => (
            <li key={row}>{row}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
