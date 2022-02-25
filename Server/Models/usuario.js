let { pool } = require("./conexion");

const Usuario = {}

//Devuelve todos los usuario registrados
Usuario.listarUsuarios = async () => {
    try {
        let aux = [];
        let datos = await pool.query("select listar_usuarios()");
        datos.rows.forEach(element => {
            aux.push(element.listar_usuarios);
        });
        return aux;
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
        return datos.rows[0].cambiar_clave;
    } catch (error) {
        return null;
    }
}

// Se alamacena el token en la base de datos
Usuario.asignarToken = async (usuario, token) => {
    try {
        let status = await pool.query("select agregar_token($1,$2)", [usuario, token]);
        return status.rows[0].agregar_token;
    } catch (error) {
        console.log(error);
        return 0;
    }

}

// Se compara el token con el almacenado en la base de datos
// Se cambia la contraseña
Usuario.resetClave = async (usuario, nueva_clave, token) => {
    try {
        let status = await pool.query("select reset_clave($1,$2,$3)", [usuario, nueva_clave, token]);
        return status.rows[0].reset_clave;
    } catch (error) {
        return 0;
    }
}


module.exports = Usuario;
