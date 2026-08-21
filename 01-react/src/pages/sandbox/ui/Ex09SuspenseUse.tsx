import { Suspense, use, useMemo, useState } from "react";

import { waitValue } from "./shared";
import styles from "./SandboxPage.module.css";

// ДЕЛАТЬ: fallback у Suspense, пока промис не resolve. Дети вызывают use(promise).
// НЕ ДЕЛАТЬ: создавать new Promise() прямо в JSX — бесконечный ререндер.
// waitTick в deps И в тексте, иначе линтер орёт «лишняя зависимость».

function SuspendedText({ promise }: { promise: Promise<string> }) {
  const text = use(promise);

  return <p>{text}</p>;
}

export function Ex09SuspenseUse() {
  const [waitTick, setWaitTick] = useState(0);

  const waitPromise = useMemo(() => {
    return waitValue(800, `Данные приехали через use() · тик ${String(waitTick)}`);
  }, [waitTick]);

  return (
    <section className={styles.card}>
      <h2>9. Suspense + use(promise)</h2>
      <p className={styles.note}>
        Пока промис не resolve — fallback. Как Vue async setup + Suspense.
      </p>
      <button
        type="button"
        onClick={() => {
          setWaitTick((prev) => prev + 1);
        }}
      >
        запросить ещё раз
      </button>
      <Suspense fallback={<p>ждём промис…</p>}>
        <SuspendedText promise={waitPromise} />
      </Suspense>
    </section>
  );
}
