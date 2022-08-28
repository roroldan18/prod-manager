import { Sequelize } from 'sequelize';
import variables_entorno from '../../config';


const db = new Sequelize(
	variables_entorno.DB_MYSQL,
	variables_entorno.DB_USERNAME,
	variables_entorno.DB_PASSWORD,
	{
			host: variables_entorno.DB_HOST,
			dialect: 'mysql'
	}
)

export const dbConnection = async ()  => {
	try {
			await db.authenticate();
			console.log('Application connected to MySQL')
	} catch (error:any) {
			throw new Error ( error );
	}
}


export default db;


