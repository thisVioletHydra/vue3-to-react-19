import { useState } from 'react';
import type { Product } from '../data/mockProducts';

type AddProductFormProps = {
  onAdd: (product: Omit<Product, 'id'>) => void;
};

export function AddProductForm({ onAdd }: AddProductFormProps) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const parsedPrice = Number(price);
        if (title === '' || Number.isNaN(parsedPrice)) {
          return;
        }

        onAdd({
          title,
          price: parsedPrice,
          description,
        });

        setTitle('');
        setPrice('');
        setDescription('');
      }}
    >
      <h2>Добавить позицию</h2>
      <label>
        Название
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </label>
      <label>
        Цена
        <input
          value={price}
          inputMode="decimal"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
      </label>
      <label>
        Описание
        <input
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </label>
      <button type="submit">Добавить</button>
    </form>
  );
}
