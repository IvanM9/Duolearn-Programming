let { pool } = require("./conexion");

const Usuario = {}


Usuario.listarUsuarios = async () => {
    try {
        let datos = await pool.query("select listar_usuarios()");
        //console.log(datos.rows[0].listar_usuarios);
        return datos.rows;
    } catch (error) {
        console.log(error);
        return null;
    }
}

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
Usuario.inciarSesion = async (usuario, clave) => {
    try {
        let datos = await pool.query("select inicio_sesion($1,$2)", [usuario, clave]);
        return datos.rows[0].inicio_sesion;
    } catch (error) {
        console.log(error);
        return null;
    }
}
Usuario.modificarUser = async (usuario, nombres, apellidos, correo, fecha_nacimiento) => {
    try {
        //console.log(usuario+" "+nombres+" "+ apellidos+" "+ correo+" "+ fecha_nacimiento);
        let datos = await pool.query("select modificar_usuario($1,$2,$3,$4,$5)",
            [usuario, nombres, apellidos, correo, fecha_nacimiento,]);
        return datos.rows[0].modificar_usuario;
    } catch (error) {
        console.log(error);
        return null;
    }
}
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
Usuario.eliminarUser = async (usuario) => {
    try {
        let datos = await pool.query("select eliminar_usuario($1)", [usuario]);
        return datos.rows[0].eliminar_usuario;
    } catch (error) {
        console.log(error);
        return null;
    }
}
Usuario.cambiarClave = async (usuario, clave_actual, clave_nuevo) =>{
    try {
        let datos = await pool.query("select cambiar_clave($1,$2,$3)", [usuario, clave_actual, clave_nuevo]);
        console.log(datos.rows);
        return datos.rows[0].cambiar_clave;
    } catch (error) {
        return null;
    }
}
Usuario.obtenerClave = async(usuario)=>{
    try {
        let datos = await pool.query("select obtener_clave($1)",[usuario]);
        return datos.rows[0].obtener_clave;
    } catch (error) {
        return null;
    }
}

module.exports = Usuario;
