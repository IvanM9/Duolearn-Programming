const { pool } = require("./conexion");

const Estadisticas = {}

//Se obtienen las calificaciones de java
Estadisticas.getJava= async(usuario)=>{
    try {
        let datos = await pool.query("select obtener_puntaje_java($1)",[usuario]);
        return datos.rows[0].obtener_puntaje_java;
        
    } catch (error) {
        return null;
    }
}

//Se obtienen las calificaciones de c#
Estadisticas.getCsharp= async(usuario)=>{
    try {
        let datos = await pool.query("select obtener_puntaje_csharp($1)",[usuario]);
        return datos.rows[0].obtener_puntaje_csharp;
    } catch (error) {
        return null;
    }
}

module.exports= {Estadisticas};