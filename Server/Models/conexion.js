const {Pool} = require("pg");
require("dotenv").config();


var pool = new Pool({
    user: process.env.USERDB,
    host: 'localhost',
    password: process.env.PASSWORD,
    database: 'DuolearnP',
    port: '5432'

})


module.exports = {pool};