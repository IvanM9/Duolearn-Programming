const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const session = require('express-session');


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({secret:"student", resave: true, saveUninitialized: true}));

app.use("/api/",require("./Routes/routes"));

app.listen(process.env.PORT);
console.log("http://localhost:"+process.env.PORT);



