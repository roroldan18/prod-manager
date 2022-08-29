import { IProduct } from './src/interfaces/interfaces';

export const products: IProduct[] = [
  {
    SKU: 1234567890123,
    name: 'Product 1',
    price: 100,
    type: 'DVD-disc',
    attributes:[{
          name:'size',
          measureUnit: 'MB',
          value: 100
        }
      ]
  },
]