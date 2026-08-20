export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'ЦФА на депозит',
    price: 100_000,
    description: 'Номинал 100к, срок 12 мес',
  },
  {
    id: 'p2',
    title: 'Стейблкоин эмитента А',
    price: 1,
    description: '1:1 к рублю, proof-of-reserves',
  },
  {
    id: 'p3',
    title: 'Оферта брокера',
    price: 50_000,
    description: 'Минимальный лот для инвестора',
  },
  {
    id: 'p4',
    title: 'Compliance пакет',
    price: 0,
    description: 'KYB/KYC шаблоны для онбординга',
  },
];
