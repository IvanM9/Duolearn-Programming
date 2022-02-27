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
            "select nuevo_tema($1,$2,$3,$4)",
            [modulo, lenguaje, concepto, titulo]);
        return 1;
    } catch (error) {
        console.log(error);
        return 0;
    }
}

// Se ejecuta para eliminar una actividad con una id especifica
activity.eliminarActividad = async (id) => {
    try {
        let datos = await pool.query("select eliminar_actividad($1)", [id]);
        return datos.rows[0].eliminar_actividad;
    } catch (error) {
        console.log(error);
        return 0;
    }
}

// Se elimina un tema con todas sus actividades
activity.eliminarTema = async (id) => {
    try {
        let datos = await pool.query("select eliminar_tema($1)", [id]);
        return datos.rows[0].eliminar_tema;
    } catch (error) {
        console.log(error);
        return 0;
    }

}

// Se modifican los datos de una actividad
activity.modificarActividad = async (id, tema, pregunta, opcion_correcta, opcion2, opcion3, opcion4, tipo) => {
    try {
        let datos = await pool.query(
            "select modificar_actividad($1,$2,$3,$4,$5,$6,$7,$8)",
            [id, tema, pregunta, opcion_correcta, opcion2, opcion3, opcion4, tipo]);
        return datos.rows[0].modificar_actividad;
    } catch (error) {
        console.log(error);
        return 0;
    }
}

// Se modifican los datos de un tema
activity.modificarTema = async (id, modulo, lenguaje, concepto, titulo) => {
    try {
        let datos = await pool.query("select modificar_tema($1, $2, $3, $4, $5)", [id, modulo, lenguaje, concepto, titulo]);
        return datos.rows[0].modificar_tema;
    } catch (error) {

    }
}

// Se obtiene todos los datos de la tabla temas
activity.obtenerTemas = async (modulo, lenguaje) => {
    try {
        let datos = await pool.query(
            "select obtener_temas($1,$2)",
            [modulo, lenguaje]);

        let aux = [];
        datos.rows.forEach(element => {
            aux.push(element.obtener_temas)
        });

        return aux;
    } catch (error) {
        return null;
    }
}

// Se obtiene todos los temas desde la base de datos
activity.listarTemas = async () => {
    try {
        let datos = await pool.query("select listar_temas()");
        let aux = [];
        datos.rows.forEach(element => {
            aux.push(element.listar_temas);
        });
        return aux;
    } catch (error) {
        return null;
    }
}
module.exports = activity;