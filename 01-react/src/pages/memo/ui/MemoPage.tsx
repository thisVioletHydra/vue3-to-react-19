import { memo, useCallback, useMemo, useRef, useState } from "react";

import styles from "./MemoPage.module.css";

const ALL_USERS = ["Иван Иванов", "Пётр Петров", "Мария Сидорова", "Алексей Смирнов"] as const;

function useRenderCount() {
  const count = useRef(0);
  count.current += 1;

  return count.current;
}

type TableProps = {
  users: readonly string[];
  onEdit: (name: string) => void;
  label: string;
};

function TableBody({ users, onEdit }: Omit<TableProps, "label">) {
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <li key={user}>
          <span>{user}</span>
          <button type="button" onClick={() => onEdit(user)}>
            править
          </button>
        </li>
      ))}
    </ul>
  );
}

function HotTable({ users, onEdit, label }: TableProps) {
  const renders = useRenderCount();

  return (
    <div className={styles.table}>
      <p className={styles.badge}>
        {label}: рендер № {renders}
      </p>
      <TableBody users={users} onEdit={onEdit} />
    </div>
  );
}

const FrozenTable = memo(function FrozenTable({ users, onEdit, label }: TableProps) {
  const renders = useRenderCount();

  return (
    <div className={`${styles.table} ${styles.frozen}`}>
      <p className={styles.badge}>
        {label}: рендер № {renders}
      </p>
      <TableBody users={users} onEdit={onEdit} />
    </div>
  );
});

export default function MemoPage() {
  const parentRenders = useRenderCount();
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [picked, setPicked] = useState("никто");

  const hotUsers = ALL_USERS.filter((user) => {
    return user.toLowerCase().includes(search.toLowerCase());
  });

  const frozenUsers = useMemo(() => {
    return ALL_USERS.filter((user) => {
      return user.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  const hotEdit = (name: string) => {
    setPicked(name);
  };

  const frozenEdit = useCallback((name: string) => {
    setPicked(name);
  }, []);

  return (
    <div className={styles.page} data-theme={theme}>
      <header>
        <h1>Мемо</h1>
        <p className={styles.lead}>
          Родитель рендер № {parentRenders}. Выбран: {picked}.
        </p>
        <p className={styles.lead}>
          Тема / «править» — зелёная таблица не должна плюсовать номер. Поиск — обе плюсуют: массив
          другой.
        </p>
      </header>

      <ol className={styles.rules}>
        <li>
          <code>memo(Comp)</code> — не рисуй Comp, если пропы <strong>те же по ссылке</strong>{" "}
          (Object.is). Не «глубоко равны», а именно та же ячейка памяти.
        </li>
        <li>
          <code>useMemo(() =&gt; data, [deps])</code> — держи ту же ссылку на массив/объект, пока
          deps не сменились. Иначе каждый рендер = новый [] = memo бесполезен.
        </li>
        <li>
          <code>useCallback(fn, [deps])</code> — то же для функции. Без него{" "}
          <code>onEdit=&#123;() =&gt; …&#125;</code> каждый раз новая, memo снова рисует.
        </li>
      </ol>

      <div className={styles.controls}>
        <button
          type="button"
          onClick={() => {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
          }}
        >
          тема: {theme} (не должна трогать замороженную таблицу)
        </button>
        <input
          type="search"
          value={search}
          placeholder="поиск — обе таблицы имеют право перерисоваться"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      <div className={styles.grid}>
        <HotTable users={hotUsers} onEdit={hotEdit} label="Горячая, без memo" />
        <FrozenTable users={frozenUsers} onEdit={frozenEdit} label="memo + useMemo + useCallback" />
      </div>

      <section className={styles.when}>
        <h2>Когда надо</h2>
        <p>
          Ребёнок дорогой (большая таблица, график, список на сотни строк) и родитель часто
          рендерится из‑за чужого стейта (тема, инпут рядом, тик таймера).
        </p>
        <h2>Когда не надо</h2>
        <p>
          Четыре строки и кнопка — visor не греется. Или пропы и так новые каждый раз (свежий fetch).
          Не мемоизируй всё подряд: лишние deps и ложная уверенность.
        </p>
        <p className={styles.sleep}>
          Разбудили ночью: memo смотрит ссылки. Чтобы ссылка на данные не прыгала — useMemo. На
          колбэк — useCallback. Одно без другого обычно ничего не фризит.
        </p>
      </section>
    </div>
  );
}
