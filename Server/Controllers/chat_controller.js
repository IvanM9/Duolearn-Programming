const mensajes = require("../Models/chat");

const chat = {}

// Se obtienen el texto y los datos del nuevo mensaje
chat.nuevoMensaje = async (req, res) => {
    try {
        const { usuario, mensaje, fecha } = req.body;
        let status = await mensajes.nuevoMensaje(usuario, mensaje, fecha);
        if (status != null)
            res.json(status);
        else
            res.json({ estado: 0 });
    } catch (error) {
        res.json({ estado: 0 });
    }
}

// Se obtiene toda la conversación
chat.obtenerMensajes = async (req, res) => {
    try {
        let datos = await mensajes.obtenerMensajes();
        if (datos != null)
            res.json(datos);
        else
            res.json({ estado: 0 });
    } catch (error) {

    }
}

module.exports = chat;