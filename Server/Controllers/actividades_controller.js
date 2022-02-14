const activity = require("../Models/actividades");

const actividades = {};

actividades.obtenerActividades = async (req, res) => {
    const { actividad } = req.body;
    let datos = await activity.obtenerActividades(actividad);
    if (datos != null) {
        res.json(datos);
    }
    else
        res.json({ mensaje: "vacio", estado: "0" });
}
actividades.resolverActividad = async (req, res) => {
    const {usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje } = req.body;
    if (usuario != null) {
        let datos = await activity.resolverActividad(usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje);
        if (datos == 1)
            res.json({ estado: "1" });
        else
            res.json({ estado: "0" });
    }
    else
        res.json({ mensaje: "Usuario desconectado", estado: "0" });
}

module.exports = actividades;