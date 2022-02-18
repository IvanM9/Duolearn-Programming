const { pool } = require("./conexion");

const activity = {};

//Se llama a la función para obtener las actividades
activity.obtenerActividades = async (modulo, lenguaje, tipo, usuario) => {
    try {
        let datos = await pool.query(
            "select obtener_actividades($1, $2, $3, $4)",
            [tipo, modulo, lenguaje, usuario]);
        let aux = [];
        for (let index = 0; index < datos.rowCount; index++) {
            aux.push(datos.rows[index].obtener_actividades);
        }
        console.log(aux);
        return aux;
    } catch (error) {
        return null
    }

}

//Se envian los datos de la actividad a la base de datos
activity.resolverActividad = async (usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje) => {
    try {
        let datos = await pool.query("select usar_actividad($1,$2,$3,$4,$5,$6,$7)",
            [usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje]);
        return datos.rows[0].usar_actividad;
    } catch (error) {
        return null;
    }
}

//Se envian los datos para crear una nueva actividad
activity.añadirActividad = async (tema, pregunta, opcion_correcta, opcion2, opcion3, opcion4, tipo) => {
    try {
        const status = await pool.query(
            "select agregar_actividad($1,$2,$3,$4,$5,$6,$7)",
            [tema, pregunta, opcion_correcta, opcion2, opcion3, opcion4, tipo]);
        //* Se cambió la función en la base de datos
        return status.rows[0].agregar_actividad;
    } catch (error) {
        console.log(error);
        return 0;
    }
}


//Se envían los datos para crear un nuevo tema 
activity.añadirTema = async (modulo, lenguaje, titulo, concepto) => {
    try {
        await pool.query(
            "perform agregar_tema($1,$2,$3,$4)",
            [modulo, lenguaje, concepto, titulo]);
        return 1;
    } catch (error) {
        console.log(error);
        return 0;
    }
}
module.exports = activity;