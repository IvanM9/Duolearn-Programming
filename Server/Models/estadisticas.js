const { pool } = require("./conexion");

const Estadisticas = {
    

}

Estadisticas.getJava= async(usuario)=>{
    try {
        let datos = await pool.query("select obtener_puntaje_java($1)",[usuario]);
        return datos.rows[0].obtener_puntaje_java;
        
    } catch (error) {
        return null;
    }
}
Estadisticas.getCsharp= async(usuario)=>{
    try {
        let datos = await pool.query("select obtener_puntaje_csharp($1)",[usuario]);
        return datos.rows[0].obtener_puntaje_csharp;
    } catch (error) {
        return null;
    }
}
module.exports= {Estadisticas};