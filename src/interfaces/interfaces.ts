export interface IProduct {
  SKU: number;
  name: string;
  price: number;
  type: typeProd
  attributes: AttrProduct[];
}

export type typeProd = 'DVD-disc' | 'Book' | 'Furniture';

export interface AttrProduct {
  name: string;
  measureUnit: string;
  value: number;
}