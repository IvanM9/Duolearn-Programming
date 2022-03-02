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
    try {
        const { modulo, lenguaje, tipo, usuario } = req.body;
        let datos = await activity.obtenerActividades(modulo, lenguaje, tipo, usuario);
        if (datos != null) {
            res.json(datos);
        }
        else
            res.json({ mensaje: "vacio", estado: "0" });
    }
    catch (error) {
        console.log(error);
    }
}


// Se envían los datos para registrar la actividad y su nota correspondiente
actividades.resolverActividad = async (req, res) => {
    try {

        const { usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje } = req.body;
        if (usuario != null) {
            let datos = await activity.resolverActividad(usuario, id_actividad, fecha, minutos, intentos, num_actividad, puntaje);
            res.json({ estado: datos });

        }
        else
            res.json({ mensaje: "Usuario desconectado", estado: "0" });
    }
    catch (error) {
        console.log(error);
    }
}

//Se inserta una nueva actividad a la base de datos
actividades.agregarActividad = async (req, res) => {
    try {
        const { tema, pregunta, opcion_correcta, opcion2, opcion3, opcion4, tipo } = req.body;
        let status, _pregunta, _opcion1;
        switch (tipo) {
            case "encontrar-error":

                _pregunta = (await cloudinary.v2.uploader.upload(req.files[0].path)).secure_url.trim();

                _opcion1 = opcion_correcta;
                break;
            case "pares":
                _pregunta = (await cloudinary.v2.uploader.upload(req.files[0].path)).secure_url.trim();
                _opcion1 = (await cloudinary.v2.uploader.upload(req.files[1].path)).secure_url.trim();
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
            tipo
        );


        if (req.files != undefined) {
            req.files.forEach(async element => {
                await fs.unlink(element.path);
            });
        }


        res.json({ estado: status });

    }
    catch (error) {
        console.log(error);
    }
}

// Se inserta un nuevo tema 
actividades.agregarTema = async (req, res) => {
    try {
        const { modulo, lenguaje, titulo, concepto } = req.body;
        let status = await activity.añadirTema(modulo, lenguaje, titulo, concepto);
        if (status != null)
            res.json({ estado: status });
        else
            res.json({ estado: 0 });
    }
    catch (error) {
        console.log(error);
        res.json({ estado: 0 });
    }
}

// Se modifica un tema
actividades.modificarTema = async (req, res) => {
    try {
        const { id, modulo, lenguaje, titulo, concepto } = req.body;
        let status = await activity.modificarTema(id, modulo, lenguaje, titulo, concepto);
        res.json({ estado: status });
    } catch (error) {
        res.json({ estado: "0" });
    }
}

// Se modifica una actividad
actividades.modificarActividad = async (req, res) => {
    try {
        const { id, tema, pregunta, opcion_correcta, opcion2, opcion3, opcion4, tipo } = req.body;
        let status = await activity.modificarActividad(id, tema, pregunta, opcion_correcta, opcion2, opcion3, opcion4, tipo);
        res.json({ estado: status });
    } catch (error) {
        res.json({ estado: "0" });
    }
}

// Se elimina una actividad
actividades.eliminarActividad = async (req, res) => {
    try {
        const { id } = req.params;
        let status = await activity.eliminarActividad(id);
        res.json({ estado: status });
    } catch (error) {
        res.json({ estado: "0" });
    }
}

// Se elimina un tema
actividades.eliminarTema = async (req, res) => {
    try {
        const { id } = req.params;
        let status = await activity.eliminarTema(id);
        res.json({ estado: status });
    } catch (error) {
        res.json({ estado: "0" });
    }
}

// Se obtiene una la teoría correspondiente al módulo y al lenguaje
actividades.obtenerTemas = async (req, res) => {
    try {
        const { modulo, lenguaje } = req.body;
        let datos = await activity.obtenerTemas(modulo, lenguaje);
        if (datos != null) {
            res.json(datos);
        }
        else
            res.json({ estado: 0 });
    } catch (error) {
        console.log(error);
        res.json({ estado: 0 });
    }
}

// Obtenemos todos los temas registrados
actividades.listarTemas = async (req, res) => {
    try {
        let datos = await activity.listarTemas();
        if (datos != null)
            res.json(datos);
        else
            res.json({ estado: 0 });
    } catch (error) {
        console.log(error);
        res.json({ estado: 0 });
    }
}
module.exports = actividades;