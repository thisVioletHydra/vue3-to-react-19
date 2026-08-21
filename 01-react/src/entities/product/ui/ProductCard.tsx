// EXPORT: named (не default). Карточка — entity UI, в lazy страницы не целиком.

import type { ReactNode } from "react";

import type { Product } from "../model/mockProducts";

import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
  children?: ReactNode;
  onAddToList: (productId: string) => void;
};

export function ProductCard({ product, children, onAddToList }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.price}>{product.price.toLocaleString("ru-RU")} ₽</p>
      <p className={styles.description}>{product.description}</p>
      {children}
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          onAddToList(product.id);
        }}
      >
        В список
      </button>
    </article>
  );
}
