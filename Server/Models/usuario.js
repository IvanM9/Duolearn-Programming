let { pool } = require("./conexion");

const Usuario = {
    "id": null,
    "nombres": null,
    "apellidos": null,
    "correo": null,
    "clave": null,
    "fecha_nacimiento": null,
    "tipo": null
}

Usuario.getUsers = async () => {
    try {
        let datos = await pool.query("select listar_usuarios()");
        //console.log(datos.rows[0].listar_usuarios);
        return datos.rows;
    } catch (error) {
        console.log(error);
        return null;
    }
}

Usuario.getUser = async (usuario) =>{
    try {
        let datos = await pool.query("select obtener_usuario($1)",[usuario]);
        return datos.rows[0].obtener_usuario;
    } catch (error) {
        return null;
    }
}
module.exports = Usuario;
