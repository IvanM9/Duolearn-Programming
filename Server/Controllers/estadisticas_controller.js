const { Estadisticas } = require("../Models/estadisticas");

const estadisticas={}

estadisticas.getJava= async (req, res)=>{
    const {usuario} = req.body;
    let datos = await Estadisticas.getJava(usuario);
    if(datos!=null)
        res.json(datos);
    else
        res.json({menssage: 'error'});
}

module.exports = {estadisticas};