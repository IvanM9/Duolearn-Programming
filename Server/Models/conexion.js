const {Pool} = require("pg");
require("dotenv").config();

//Configuración de la conexión a la base de datos
var pool = new Pool({
    user: process.env.USERDB,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: '5432'

})


module.exports = {pool};