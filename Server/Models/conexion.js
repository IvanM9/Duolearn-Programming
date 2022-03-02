const { Pool } = require("pg");
const url = require('url');
require("dotenv").config();

//Configuración de la conexión a la base de datos
var config;
if (process.env.DATABASE_URL) {
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: {
            rejectUnauthorized: false
        }
    };
}
else {
    config = {
        user: process.env.USERDB,
        host: process.env.HOST,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: '5432'
    }
}
var pool = new Pool(config)


module.exports = { pool };