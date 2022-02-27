const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: false }));
const fecha = Date.now();
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, files, cb) => {
        cb(null, fecha + path.extname(files.originalname));
    }
})
app.use(multer({ storage }).array('images'));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/", require("./Routes/routes"));

const puerto = process.env.PORT ? process.env.PORT : 2000;
app.listen(puerto);

console.log("http://localhost:" + puerto);

