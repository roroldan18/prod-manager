export interface IProduct {
  SKU: string;
  name: string;
  price: number;
  type: SchemaOptions
}

export type typeProd = 'DVD-disc' | 'Book' | 'Furniture';

interface SchemaOptionsGeneric<T extends typeProd>{
  name: T;
}
interface SchemaOptionsBook extends SchemaOptionsGeneric<'Book'>{
  attribute: attBook[];
}
interface SchemaOptionsFurniture extends SchemaOptionsGeneric<'Furniture'>{
  attribute: [
    attFurniture<'width'>,
    attFurniture<'height'>,
    attFurniture<'length'>
  ]
}
interface SchemaOptionsDVD extends SchemaOptionsGeneric<'DVD-disc'>{
  attribute: attDVD[];
}

type SchemaOptions = SchemaOptionsBook | SchemaOptionsFurniture | SchemaOptionsDVD;

interface attrProduct {
  name: string;
  measureUnit: string;
  value: number;
}
interface attBook extends attrProduct {
  name: 'weight',
  measureUnit: 'Kg',
}

interface attDVD extends attrProduct{
  name: 'size',
  measureUnit: 'MB',
}

type nameFurnitureAtt = 'width' | 'height' | 'length';
interface attFurniture<T extends nameFurnitureAtt> extends attrProduct {
  name: T,
  measureUnit: 'cm',
}

