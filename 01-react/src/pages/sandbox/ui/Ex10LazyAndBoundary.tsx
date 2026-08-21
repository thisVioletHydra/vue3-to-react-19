import { Component, lazy, Suspense, useState, type ReactNode } from "react";

import { wait } from "./shared";
import styles from "./SandboxPage.module.css";

// ДЕЛАТЬ: lazy() только с default export. Вокруг — Suspense. Ошибку ловит ErrorBoundary, не Suspense.
// НЕ ДЕЛАТЬ: ждать, что fallback покажет throw. У Suspense нет слота error (в отличие от Vue).
// lazy кэширует чанк: «качаем» будет в основном первый раз.

const LazyHello = lazy(async () => {
  await wait(900);

  return import("./LazyHello");
});

class ExampleBoundary extends Component<
  { children: ReactNode; onReset: () => void },
  { message: string | null }
> {
  state: { message: string | null } = { message: null };

  static getDerivedStateFromError(error: Error) {
    return { message: error.message };
  }

  render() {
    if (this.state.message !== null) {
      return (
        <div>
          <p>Ошибка: {this.state.message}</p>
          <button
            type="button"
            onClick={() => {
              this.setState({ message: null });
              this.props.onReset();
            }}
          >
            Сброс
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function Boom({ armed }: { armed: boolean }) {
  if (armed === true) {
    throw new Error("Специально уронил дерево");
  }

  return <p>Пока живо. Жми «взорвать».</p>;
}

export function Ex10LazyAndBoundary() {
  const [armed, setArmed] = useState(false);
  const [lazyOn, setLazyOn] = useState(false);

  return (
    <section className={styles.card}>
      <h2>10. Suspense + lazy и ErrorBoundary</h2>
      <p className={styles.note}>
        lazy ждёт чанк (первый раз). Boundary ловит throw из ребёнка — у Suspense слота error нет.
      </p>
      <div className={styles.row}>
        <button
          type="button"
          onClick={() => {
            setLazyOn(true);
          }}
        >
          показать lazy
        </button>
        <button
          type="button"
          onClick={() => {
            setArmed(true);
          }}
        >
          взорвать
        </button>
      </div>
      {lazyOn === true ? (
        <Suspense fallback={<p>качаем чанк…</p>}>
          <LazyHello />
        </Suspense>
      ) : (
        <p>lazy ещё не включали</p>
      )}
      <ExampleBoundary
        onReset={() => {
          setArmed(false);
        }}
      >
        <Boom armed={armed} />
      </ExampleBoundary>
    </section>
  );
}
