let { pool } = require("./conexion");

const Usuario = {}

//Devuelve todos los usuario registrados
Usuario.listarUsuarios = async () => {
    try {
        let datos = await pool.query("select listar_usuarios()");
        return datos.rows;
    } catch (error) {
        console.log(error);
        return null;
    }
}

//Llama a la función para obtener los datos de 1 usuario
Usuario.getUser = async (usuario) => {
    try {
        let datos = await pool.query("select obtener_usuario($1)", [usuario]);
        if (datos.rowCount > 0)
            return datos.rows[0].obtener_usuario;
        else
            return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

//Se envian datos de inicio de sesión para su verificación
Usuario.inciarSesion = async (usuario, clave) => {
    try {
        let datos = await pool.query("select inicio_sesion($1,$2)", [usuario, clave]);
        return datos.rows[0].inicio_sesion;
    } catch (error) {
        console.log(error);
        return null;
    }
}

//Se envian los datos para hacer la actualización
Usuario.modificarUser = async (usuario, nombres, apellidos, correo, fecha_nacimiento) => {
    try {
        let datos = await pool.query("select modificar_usuario($1,$2,$3,$4,$5)",
            [usuario, nombres, apellidos, correo, fecha_nacimiento,]);
        return datos.rows[0].modificar_usuario;
    } catch (error) {
        console.log(error);
        return null;
    }
}

//Se envian los datos para registrar un nuevo usuario
Usuario.registrarUser = async (usuario, nombres, apellidos, correo, clave, fecha_nacimiento) => {
    try {
        let datos = await pool.query(
            "select nuevo_usuario($1,$2,$3,$4,$5,$6,$7)",
            [usuario, nombres, apellidos, correo, clave, 'estudiante', fecha_nacimiento]);
        return datos.rows[0].nuevo_usuario;
    } catch (error) {
        return null;
    }
}

//Se envía el usuario que se va a eliminar
Usuario.eliminarUser = async (usuario) => {
    try {
        let datos = await pool.query("select eliminar_usuario($1)", [usuario]);
        return datos.rows[0].eliminar_usuario;
    } catch (error) {
        console.log(error);
        return null;
    }
}

//Se envían las claves para hacer la comprobación y realizar el cambio
Usuario.cambiarClave = async (usuario, clave_actual, clave_nuevo) => {
    try {
        let datos = await pool.query("select cambiar_clave($1,$2,$3)", [usuario, clave_actual, clave_nuevo]);
        console.log(datos.rows);
        return datos.rows[0].cambiar_clave;
    } catch (error) {
        return null;
    }
}



module.exports = Usuario;
