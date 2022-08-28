import { DataTypes } from 'sequelize';
import db from 'src/bin/connection';

const Type_Att = db.define('type_att', {
  type_product_idtype_product: {
    type: DataTypes.UUID,
  },
  attribute_idattribute: DataTypes.UUID,
},
{
  tableName: 'type_product_has_attribute',
  createdAt: false,
  updatedAt: false,
}
);

export default Type_Att;