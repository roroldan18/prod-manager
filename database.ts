import { IProduct } from './src/interfaces/interfaces';

export const products: IProduct[] = [
  {
    SKU: '1234567890123',
    name: 'Product 1',
    price: 100,
    type: {
      name: 'DVD-disc',
      attribute: [
        {
          name:'size',
          measureUnit: 'MB',
          value: 100
        }
      ]
    }
  },
  {
    SKU: '456',
    name: 'Product 2',
    price: 200,
    type: {
      name: 'Book',
      attribute: [
        {
          name:'weight',
          measureUnit: 'Kg',
          value: 200
        }
      ]
    }
  },
  {
    SKU: '789',
    name: 'Product 3',
    price: 300,
    type: {
      name: 'Furniture',
      attribute: [
        {
          name:'width',
          measureUnit: 'cm',
          value: 30
        },
        {
          name:'height',
          measureUnit: 'cm',
          value: 30
        },
        {
          name:'length',
          measureUnit: 'cm',
          value: 30
        },
      ]
    }
  },
  {
    SKU: '101112',
    name: 'Product 4',
    price: 400,
    type: {
      name: 'Furniture',
      attribute: [
        {
          name:'width',
          measureUnit: 'cm',
          value: 40
        },
        {
          name:'height',
          measureUnit: 'cm',
          value: 40
        },
        {
          name:'length',
          measureUnit: 'cm',
          value: 40
        },
      ]
    }
  },
  {
    SKU: '131415',
    name: 'Product 5',
    price: 500,
    type: {
      name: 'Book',
      attribute: [
        {
          name: 'weight',
          measureUnit: 'Kg',
          value: 500
        }
      ]
    }
  },
  {
    SKU: '161718',
    name: 'Product 6',
    price: 600,
    type: {
      name: 'DVD-disc',
      attribute: [
        {
          name: 'size',
          measureUnit: 'MB',
          value: 600
        }
      ]
    }
  },
  {
    SKU: '19202122',
    name: 'Product 7',
    price: 700,
    type: {
      name: 'Book',
      attribute: [
        {
          name: 'weight',
          measureUnit: 'Kg',
          value: 700
        }
      ]
    }
  },
  {
    SKU: '23242526',
    name: 'Product 8',
    price: 800,
    type: {
      name: 'Furniture',
      attribute: [
        {
          name:'width',
          measureUnit: 'cm',
          value: 50
        },
        {
          name:'height',
          measureUnit: 'cm',
          value: 50
        },
        {
          name:'length',
          measureUnit: 'cm',
          value: 50
        },
      ]
    }
  }
]