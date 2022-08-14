export interface IProduct {
  SKU: string;
  name: string;
  price: number;
  type: DVDDisc | Book | Furniture;
}

export interface IType<T, A, U, V>{
  name: T;
  nameAttribute: A;
  measureUnit: U;
  value: V;
}

type DVDDisc = IType<'DVD-disc', 'size', 'MB', number> ;
type Book = IType<'Book', 'weight', 'Kg', number>;
type Furniture = IType<'Furniture', 'Dimensions', 'cm', `${number}x${number}x${number}`>;