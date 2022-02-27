const Usuario = require("../Models/usuario");
const { google } = require("googleapis");
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
require('dotenv').config();


//Configuración para el envío de correos
const client_id = "670624648440-p8o6pnd7pan6cfi8922goq645pr9nnds.apps.googleusercontent.com";
const client_secret = "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";
const oAuth2 = new google.auth.OAuth2(
    client_id,
    client_secret,
    "https://developers.google.com/oauthplayground"
);
oAuth2.setCredentials({ refresh_token: "1//04n86mQeX3n5DCgYIARAAGAQSNwF-L9IrCtx-PWfdSOO-2xscnPX1wJ7jTMKRvRDoSc4NMP6NGQsYO3Odt9qXLG9J5zfN5N95U-0" });

//* Se crea el objeto/clase
const user = {}


//Se obtienen todos los usuarios
user.listarUsuarios = async (req, res) => {
    try {
        const datos = await Usuario.listarUsuarios();
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}

//Se obtiene los datos del usuario 
user.getUsuario = async (req, res) => {
    try {
        const { usuario } = req.params;
        console.log(usuario);
        if (usuario != null) {
            let datos = await Usuario.getUser(usuario);
            if (datos != null) {
                datos.estado = "1";
                res.json(datos);
            }
            else
                res.json({ estado: "0" });
        }
        else
            res.json({ estado: "0" });
    }
    catch (error) {
        console.error();
    }
}

//Se verifica que los datos no estén vacios y 
//se obtienen una verificación de que son correctos

user.iniciarSesion = async (req, res) => {
    try {
        const { usuario, clave } = req.body;
        if (usuario.length > 0 && clave.length > 0) {
            let datos = await Usuario.inciarSesion(usuario, clave);
            if (datos !== 0 && datos !== null) {
                res.json({ mensaje: "Sesion iniciada", estado: "1" });
            }
            else
                res.json({ mensaje: "Ingreso fallido", estado: "0" });
        }
        else
            res.json({ mensaje: "campos vacios", estado: "0" });
    }
    catch (error) {
        console.log(error);
    }
}

//Se obtienen todos los datos y luego se reemplaza con los valores actuales
user.modificarUsuario = async (req, res) => {
    try {
        const { usuario } = req.body;
        if (usuario != null) {
            const { nombres, apellidos, correo, fecha_nacimiento } = req.body;
            let status = await Usuario.modificarUser(usuario, nombres, apellidos, correo, fecha_nacimiento);
            console.log(status);
            if (status === 1)
                res.json({ mensaje: "Modificado con exito", estado: "1" });
            else
                res.json({ mensaje: "Modificación fallida ", estado: "0" });
        }
        else
            res.json({ mensaje: "El usuario no ha iniciado la sesión ", estado: "0" });
    } catch (error) {
        res.json({ mensaje: "Error: " + error, estado: "0" });
    }
}

//Se registra un nuevo usuario
user.nuevoUsuario = async (req, res) => {
    try {
        const { usuario, nombres, apellidos, correo, clave, fecha_nacimiento } = req.body;
        let status = await Usuario.registrarUser(usuario, nombres, apellidos, correo, clave, fecha_nacimiento);
        if (status === 1)
            res.json({ mensaje: "Registro correcto", estado: "1" });
        else
            res.json({ mensaje: "Registro fallido", estado: "0" });
    }
    catch (error) {
        console.log(error);
    }
}

//Se elimina un usuario
user.elimnarUsuario = async (req, res) => {
    try {
        const usuario = req.params.usuario;
        if (usuario != null) {
            let status = await Usuario.eliminarUser(usuario);
            if (status === 1) {
                res.json({ mensaje: "Eliminado con éxito ", estado: "1" });
            }
            else
                res.json({ mensaje: "Eliminación fallido ", estado: "0" });

        }
        else
            res.json({ mensaje: "El sesión no está iniciada", estado: "0" });
    } catch (error) {
        console.log(error);
    }
}


//Se envía un correo con una token temporal
user.solicitarClave = async (req, res) => {
    try {
        const { usuario } = req.params;
        if (usuario != null) {

            let link = await crearToken(usuario);
            // console.log(link);
            const access_Token = await oAuth2.getAccessToken();
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: "OAuth2",
                    user: "doulearnp@gmail.com",
                    clientId: client_id,
                    clientSecret: client_secret,
                    refreshToken: "1//04n86mQeX3n5DCgYIARAAGAQSNwF-L9IrCtx-PWfdSOO-2xscnPX1wJ7jTMKRvRDoSc4NMP6NGQsYO3Odt9qXLG9J5zfN5N95U-0",
                    accessToken: access_Token
                },
            });

            let datos = await Usuario.getUser(usuario);
            var mailOptions = {
                from: "'Duolearn Admin' <doulearnp@gmail.com>",
                to: datos.correo,
                subject: "Reseteo de su clave duolearn",
                text: "link de reseteo de su clave: " + link
            };

            await transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email enviado: ' + info.response);
                }
            });
            res.json({ estado: "1" });
        }
        else
            res.json({ estado: "0" });
    }
    catch (error) {
        console.log(error);
    }
}

// Se genera un nuevo token para el cambio de contraseña 
const crearToken = async (usuario) => {
    try {
        let resetToken = jwt.sign({ username: usuario }, "studentreset", { expiresIn: '10m' });
        await Usuario.asignarToken(usuario, resetToken);
        return "http://localhost:4200/olvide-contrasenia/" + resetToken

    } catch (error) {
        return null
    }
}

// Se ingresa nueva clave y se hace la verificación del token
user.resetearClave = async (req, res) => {
    try {
        const { usuario, nueva_clave } = req.body;
        const token = req.headers.reset;

        jwt.verify(token, "studentreset", async (err, decoded) => {
            await Usuario.asignarToken(usuario, null);

        });
        let status = await Usuario.resetClave(usuario, nueva_clave, token);
        if (status != null && status != 0)
            res.json({ mensaje: "clave cambiada exitosamente", estado: 1 });
        else
            res.json({ estado: "0" });

    } catch (error) {
        console.log(error);
        res.json({ estado: "0", error });
    }
}

//Cambio de clave
user.cambiarClave = async (req, res) => {
    try {
        const { usuario, clave_actual, clave_nueva } = req.body;
        let status = await Usuario.cambiarClave(usuario, clave_actual, clave_nueva);
        if (status === 1)
            res.json({ estado: "1" });
        else
            res.json({ estado: "0" });
    }
    catch (error) {
        console.log(error);
        res.json({ estado: "0" });
    }
}


module.exports = { user };