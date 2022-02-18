const {Pool} = require("pg");
require("dotenv").config();

//Configuración de la conexión a la base de datos
var pool = new Pool({
    user: process.env.USERDB,
    host: 'localhost',
    password: process.env.PASSWORD,
    database: 'DuolearnP',
    port: '5432'

})


module.exports = {pool};