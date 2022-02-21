const { pool } = require("./conexion");

const mensajes = {}

// Se realiza la función para registrar un nuevo mensaje
mensajes.nuevoMensaje = async (usuario, mensaje, fecha) => {
    try {
        let status = await pool.query("select nuevo_mensaje($1,$2,$3)", [usuario, mensaje, fecha]);
        return status.rows[0].nuevo_mensaje;

    } catch (error) {
        return null;
    }

}

// Se obtienen todos los mensajes guardados
mensajes.obtenerMensajes = async () => {
    try {
        let datos = await pool.query("select obtener_chat()");
        let aux = [];
        datos.rows.forEach(elemet => {
            aux.push(elemet.obtener_chat);
        });
        return aux;
    } catch (error) {
        return null;
    }

}

module.exports = mensajes;