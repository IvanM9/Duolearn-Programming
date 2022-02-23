const { Estadisticas } = require("../Models/estadisticas");

const estadisticas={}


estadisticas.getJava= async (req, res)=>{
    const usuario = req.params.usuario;
    console.log(usuario);
    let datos = await Estadisticas.getJava(usuario);
    if(datos!=null)
        res.json(datos);
    else
        res.json({menssage: 'error'});
}


estadisticas.getCsharp= async (req, res)=>{
    const {usuario} = req.params;
    let datos = await Estadisticas.getCsharp(usuario);
    if(datos!=null)
        res.json(datos);
    else
        res.json({menssage: 'error'});

}
module.exports = {estadisticas};