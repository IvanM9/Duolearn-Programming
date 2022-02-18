const activity = require("../Models/actividades");
const fs = require('fs-extra');
const cloudinary = require('cloudinary');
const actividades = {};

//Configuración del storage para las imágenes
cloudinary.config({
    cloud_name: 'dj86hmqil',
    api_key: '622768815493224',
    api_secret: '1e80pHQ9aT3ea-bOd_irltBWlNY'
});


//Se obtiene las actividades por medio de varios restricciones
actividades.obtenerActividades = async (req, res) => {

    const { modulo, lenguaje, tipo, usuario } = req.body;
    let datos = await activity.obtenerActividades(modulo, lenguaje, tipo, usuario);

    if (datos != null) {
        res.json(datos);
    }
    else
        res.json({ mensaje: "vacio", estado: "0" });
}

// Se envían los datos para registrar la actividad y su nota correspondiente
actividades.resolverActividad = async (req, res) => {
    const { usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje } = req.body;
    if (usuario != null) {
        let datos = await activity.resolverActividad(usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje);

        if (datos == 1)
            res.json({ estado: "1" });
        else
            res.json({ estado: "0" });
    }
    else
        res.json({ mensaje: "Usuario desconectado", estado: "0" });
}

//Se inserta una nueva actividad a la base de datos
actividades.agregarActividad = async (req, res) => {
    const { tema, pregunta, opcion_correcta, opcion2, opcion3, opcion4, tipo } = req.body;
    let status, _pregunta, _opcion1;
    switch (tipo) {
        case "elegir-error":
            _pregunta = (await cloudinary.v2.uploader.upload(req.files[0].path)).secure_url;
            _opcion1 = opcion_correcta;
            break;
        case "pares":
            _pregunta = (await cloudinary.v2.uploader.upload(req.files[0].path)).secure_url;
            _opcion1 = (await cloudinary.v2.uploader.upload(req.files[1].path)).secure_url;
            break;
        default:
            _pregunta = pregunta;
            _opcion1 = opcion_correcta;
            break;
    }

    status = await activity.añadirActividad(
        tema,
        _pregunta,
        _opcion1,
        opcion2,
        opcion3,
        opcion4,
        tipo);

    req.files.forEach(async element => {
        await fs.unlink(element.path);
    });

    res.json({ estado: status });
}

// Se inserta un nuevo tema 
actividades.agregarTema= async(req,res)=>{
    const {modulo, lenguaje, titulo, concepto} = req.body;
    await activity.añadirTema(modulo, lenguaje, titulo, concepto);
}
module.exports = actividades;