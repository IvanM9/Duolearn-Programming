const Usuario = require("../Models/usuario");


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
    if (req.session.user != null) {
        let datos = await Usuario.getUser(req.session.user);
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
    if (usuario.length > 0 && clave.length) {
        let datos = await Usuario.inciarSesion(usuario, clave);
        console.log(datos);
        if (datos !== 0 && datos !== null) {
            req.session.user = usuario;
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
        if (req.session.user != null) {
            const { nombres, apellidos, correo, fecha_nacimiento } = req.body;
            let status = await Usuario.modificarUser(req.session.user, nombres, apellidos, correo, fecha_nacimiento);
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
    if (req.session.user != null) {
        let status = await Usuario.eliminarUser(req.session.user);
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
module.exports = { user };