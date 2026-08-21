import { Ex01MapById } from "./Ex01MapById";
import { Ex02MapIndex } from "./Ex02MapIndex";
import { Ex03FilterMap } from "./Ex03FilterMap";
import { Ex04IndexInLabel } from "./Ex04IndexInLabel";
import { Ex05Tabs } from "./Ex05Tabs";
import { Ex06DerivedTotal } from "./Ex06DerivedTotal";
import { Ex07AndTernary } from "./Ex07AndTernary";
import { Ex08FetchStatus } from "./Ex08FetchStatus";
import { Ex09SuspenseUse } from "./Ex09SuspenseUse";
import { Ex10LazyAndBoundary } from "./Ex10LazyAndBoundary";
import styles from "./SandboxPage.module.css";

// Только сборка. Логика примеров — в Ex01…Ex10, общее — shared.ts.
// Не пихай стейт песочницы сюда: примеры независимые, как вкладки без роутера.

export default function SandboxPage() {
  return (
    <div className={styles.page}>
      <header>
        <h1>Песочница</h1>
        <p className={styles.lead}>10 коротких примеров. Ломай, смотри, что рисуется.</p>
      </header>
      <Ex01MapById />
      <Ex02MapIndex />
      <Ex03FilterMap />
      <Ex04IndexInLabel />
      <Ex05Tabs />
      <Ex06DerivedTotal />
      <Ex07AndTernary />
      <Ex08FetchStatus />
      <Ex09SuspenseUse />
      <Ex10LazyAndBoundary />
    </div>
  );
}
