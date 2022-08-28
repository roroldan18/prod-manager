import { DataTypes } from 'sequelize';
import db from 'src/bin/connection';

const Prod_Att = db.define('prod_att', {
  product_SKU: DataTypes.UUID,
  attribute_idattribute: DataTypes.UUID,
  value: DataTypes.NUMBER
},
{
  tableName: 'product_has_attribute',
  createdAt: false,
  updatedAt: false,
}
);

export default Prod_Att;