import { DataTypes } from 'sequelize';
import db from 'src/bin/connection';

const Attribute = db.define('attribute', {
  idattribute: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  name: DataTypes.STRING,
  measureUnit: DataTypes.STRING
},
{
  tableName: 'attribute',
  createdAt: false,
  updatedAt: false,
}
);

export default Attribute;