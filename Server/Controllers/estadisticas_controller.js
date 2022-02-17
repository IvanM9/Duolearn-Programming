const { Estadisticas } = require("../Models/estadisticas");

const estadisticas={}

estadisticas.getJava= async (req, res)=>{
<<<<<<< HEAD
    const {usuario} = req.body;
    let datos = await Estadisticas.getJava(usuario);
=======
    let datos = await Estadisticas.getJava(req.session.user);
>>>>>>> jordan2
    if(datos!=null)
        res.json(datos);
    else
        res.json({menssage: 'error'});
}
<<<<<<< HEAD
estadisticas.getCsharp= async (req, res)=>{
    const {usuario} = req.body;
    let datos = await Estadisticas.getCsharp(usuario);
    if(datos!=null)
        res.json(datos);
    else
        res.json({menssage: 'error'});

}
=======

>>>>>>> jordan2
module.exports = {estadisticas};