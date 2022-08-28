import { DataTypes } from 'sequelize';
import db from 'src/bin/connection';

const Type = db.define('type', {
  idtype_product: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  name: DataTypes.STRING,
},
{
  tableName: 'type_product',
  createdAt: false,
  updatedAt: false,
}
);

export default Type;