const { Router } = require("express");
const actividades = require("../Controllers/actividades_controller");
const { estadisticas } = require("../Controllers/estadisticas_controller");
const { user } = require("../Controllers/usuario_controller");
const router = Router();

//usuarios
router.get("/admin/usuarios/listar", user.listarUsuarios);
router.post("/usuario/nuevo", user.nuevoUsuario);
router.get("/usuario/datos/:usuario", user.getUsuario);
router.put("/usuario/modificar", user.modificarUsuario);
router.post("/iniciar_sesion", user.iniciarSesion);

router.delete('/usuario/eliminar/:usuario', user.elimnarUsuario);
router.get("/recuperar_clave/:usuario", user.solicitarClave);
router.post("/cambio_clave", user.cambiarClave);


//actividades
router.post("/actividades/obtener", actividades.obtenerActividades);
router.post("/actividades/resolver", actividades.resolverActividad);
router.post("/actividades/agregar", actividades.agregarActividad);
router.post("/actividadades/temas", actividades.agregarTema);



//estadisticas
router.get("/usuario/estadisticas_java/:usuario", estadisticas.getJava);
router.get("/usuario/estadisticas_csharp/:usuario", estadisticas.getCsharp);





module.exports = router;
