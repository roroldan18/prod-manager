import { DataTypes } from 'sequelize';
import db from 'src/bin/connection';

const Product = db.define('product', {
  SKU: {
    type: DataTypes.NUMBER,
    primaryKey: true
  },
  name: DataTypes.STRING,
  price: DataTypes.NUMBER,
  type_product_idtype_product: DataTypes.UUID,
},
{
  tableName: 'product',
  createdAt: false,
  updatedAt: false,
}
);

export default Product;