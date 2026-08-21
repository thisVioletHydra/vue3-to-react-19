// FSD: app — сборка приложения (роутер, layout'ы, провайдеры).
// Сейчас тут ещё каталог дня 1 — временно. Цель: каталог → pages/catalog, здесь Outlet.
//
// EXPORT App: default ок (точка входа / корневой element роутера).
// Фичи/entities ниже — только named через их public API (index.ts).

import { useState } from "react";

import { MOCK_PRODUCTS, ProductCard, type Product } from "../entities/product";
import { AddProductForm } from "../features/add-product";
import { SearchField } from "../features/search-products";

import styles from "./App.module.css";

function createId(): string {
  return `p-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

export default function App() {
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const normalizedQuery = query.trim().toLowerCase();
  const visibleProducts =
    normalizedQuery === ""
      ? products
      : products.filter((product) => {
          return product.title.toLowerCase().includes(normalizedQuery);
        });

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Каталог · день 1</h1>
        <p className={styles.hint}>
          Стейт в родителе, поиск контролируемый, «эмит» = колбэк вверх. Без useEffect.
        </p>
      </header>

      <SearchField value={query} onChange={setQuery} />
      <p className={styles.meta}>
        В списке: {selectedIds.length}. Найдено: {visibleProducts.length}.
      </p>
      <section className={styles.grid} aria-label="Позиции">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToList={(productId) => {
              setSelectedIds((prev) => {
                if (prev.includes(productId)) {
                  return prev;
                }
                return [...prev, productId];
              });
            }}
          >
            <span className={styles.badge}>id: {product.id}</span>
          </ProductCard>
        ))}
      </section>
      <AddProductForm
        onAdd={(draft) => {
          setProducts((prev) => [
            ...prev,
            {
              id: createId(),
              ...draft,
            },
          ]);
        }}
      />
    </main>
  );
}
