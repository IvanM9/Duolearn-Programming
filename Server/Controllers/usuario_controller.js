const Usuario = require("../Models/usuario");
require('dotenv').config();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:'false',
    auth: {
        user: process.env.CORREO,
        pass: process.env.CLAVE_CORREO
    },
    tls: {
        rejectUnauthorized: false,
      },
});
const user = {

}
user.listarUsuarios = async (req, res) => {
    try {
        const datos = await Usuario.listarUsuarios();
        console.log(datos);
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}
user.getUsuario = async (req, res) => {
    //console.log(req.session);
    const {usuario} = req.body;
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

user.iniciarSesion = async (req, res) => {
    const { usuario, clave } = req.body;
    if (usuario.length > 0 && clave.length > 0) {
        let datos = await Usuario.inciarSesion(usuario, clave);
        if (datos !== 0 && datos !== null) {
            //req.session.user = usuario;
            //console.log(req.session.user);
            res.json({ mensaje: "Sesion iniciada", estado: "1" });
        }
        else
            res.json({ mensaje: "Ingreso fallido", estado: "0" });
    }
    else
        res.json({ mensaje: "campos vacios", estado: "0" });
}

user.modificarUsuario = async (req, res) => {
    try {
        const {usuario}=req.body;
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
user.cerrarSesion = (req, res) => {
    req.session.destroy();
    res.json({ mensaje: "sesión cerrada" });
}
user.nuevoUsuario = async (req, res) => {
    const { usuario, nombres, apellidos, correo, clave, fecha_nacimiento } = req.body;
    let status = await Usuario.registrarUser(usuario, nombres, apellidos, correo, clave, fecha_nacimiento);
    if (status === 1)
        res.json({ mensaje: "Registro correcto", estado: "1" });
    else
        res.json({ mensaje: "Registro fallido", estado: "0" });
}
user.elimnarUsuario = async (req, res) => {
    const {usuario} = req.body;
    if (usuario != null) {
        let status = await Usuario.eliminarUser(usuario);
        if (status === 1) {
            req.session.destroy();
            res.json({ mensaje: "Eliminado con éxito ", estado: "1" });
        }
        else
            res.json({ mensaje: "Eliminación fallido ", estado: "0" })

    }
    else
        res.json({ mensaje: "El sesión no está iniciada", estado: "0" })
}
user.solicitarClave = async (req, res) => {
    const { usuario } = req.body;
    let datos = await Usuario.obtenerClave(usuario);
    if (datos != null) {
        let correo = Usuario.getUser(usuario).correo;
        var mailOptions = {
            from: "'Duolearn Admin' <"+process.env.CORREO+">",
            to: correo,
            subject: 'Duolearn: recuperación de clave',
            text: 'Su contraseña es: ' + datos
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
module.exports = { user };