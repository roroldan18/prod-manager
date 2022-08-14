import { IProduct } from './src/interfaces/interfaces';

export const products: IProduct[] = [
  {
    SKU: '123',
    name: 'Product 1',
    price: 100,
    type: {
      name: 'DVD-disc',
      nameAttribute: 'size',
      measureUnit: 'MB',
      value: 100
    }
  },
  {
    SKU: '456',
    name: 'Product 2',
    price: 200,
    type: {
      name: 'Book',
      nameAttribute: 'weight',
      measureUnit: 'Kg',
      value: 200
    }
  },
  {
    SKU: '789',
    name: 'Product 3',
    price: 300,
    type: {
      name: 'Furniture',
      nameAttribute: 'Dimensions',
      measureUnit: 'cm',
      value: '30x30x30'
    }
  },
  {
    SKU: '101112',
    name: 'Product 4',
    price: 400,
    type: {
      name: 'Furniture',
      nameAttribute: 'Dimensions',
      measureUnit: 'cm',
      value: '40x40x40'
    }
  },
  {
    SKU: '131415',
    name: 'Product 5',
    price: 500,
    type: {
      name: 'Book',
      nameAttribute: 'weight',
      measureUnit: 'Kg',
      value: 500
    }
  },
  {
    SKU: '161718',
    name: 'Product 6',
    price: 600,
    type: {
      name: 'DVD-disc',
      nameAttribute: 'size',
      measureUnit: 'MB',
      value: 600
    }
  },
  {
    SKU: '19202122',
    name: 'Product 7',
    price: 700,
    type: {
      name: 'Book',
      nameAttribute: 'weight',
      measureUnit: 'Kg',
      value: 700
    }
  },
  {
    SKU: '23242526',
    name: 'Product 8',
    price: 800,
    type: {
      name: 'Furniture',
      nameAttribute: 'Dimensions',
      measureUnit: 'cm',
      value: '50x50x50'
    }
  }
]