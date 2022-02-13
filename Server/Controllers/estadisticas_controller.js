const { Estadisticas } = require("../Models/estadisticas");

const estadisticas={}

estadisticas.getJava= async (req, res)=>{
    let datos = await Estadisticas.getJava(req.session.user);
    if(datos!=null)
        res.json(datos);
    else
        res.json({menssage: 'error'});
}

module.exports = {estadisticas};