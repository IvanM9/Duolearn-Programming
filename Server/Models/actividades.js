const { pool } = require("./conexion");

const activity = {};

<<<<<<< HEAD
activity.obtenerActividades = async (modulo, lenguaje, tipo, usuario) => {
    try {
        let datos = await pool.query("select obtener_actividades($1, $2, $3, $4)", [tipo, modulo,lenguaje, usuario]);
=======
activity.obtenerActividades = async (actividad) => {
    try {
        let datos = await pool.query("select obtener_actividades($1)", [actividad]);
>>>>>>> jordan2
        let aux = [];
        for (let index = 0; index < datos.rowCount; index++) {
            aux.push(datos.rows[index].obtener_actividades);
        }
        return aux;
    } catch (error) {
        return null
    }

}

activity.resolverActividad = async (usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje) => {
    try {
        let datos = await pool.query("select usar_actividad($1,$2,$3,$4,$5,$6,$7)",
            [usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje]);
        return datos.rows[0].usar_actividad;
    } catch (error) {
        return null;
    }


}

module.exports = activity;