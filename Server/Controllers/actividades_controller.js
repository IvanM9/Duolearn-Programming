const activity = require("../Models/actividades");

const actividades = {};

actividades.obtenerActividades = async (req, res) => {
<<<<<<< HEAD

    const { modulo, lenguaje, tipo, usuario } = req.body;
    let datos = await activity.obtenerActividades(modulo, lenguaje, tipo, usuario);

=======
    const { actividad } = req.body;
    let datos = await activity.obtenerActividades(actividad);
>>>>>>> jordan2
    if (datos != null) {
        res.json(datos);
    }
    else
        res.json({ mensaje: "vacio", estado: "0" });
}
actividades.resolverActividad = async (req, res) => {
<<<<<<< HEAD

    const {usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje } = req.body;
    if (usuario != null) {
        let datos = await activity.resolverActividad(usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje);

=======
    if (req.session.user != null) {
        const { id_actividad, fecha, minutos, intentos, num_actividad, puntaje } = req.body;
        let datos = await activity.resolverActividad(req.session.user, id_actividad, fecha, minutos, intentos, num_actividad, puntaje);
>>>>>>> jordan2
        if (datos == 1)
            res.json({ estado: "1" });
        else
            res.json({ estado: "0" });
    }
    else
        res.json({ mensaje: "Usuario desconectado", estado: "0" });
}

module.exports = actividades;