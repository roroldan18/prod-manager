let variables_entorno = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USERNAME: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    DB_PORT: process.env.DB_PORT || 3306,
    DB_MYSQL: process.env.DB_MYSQL || 'scandiweb'
}

export default variables_entorno;