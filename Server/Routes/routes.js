const { Router } = require("express");
const actividades = require("../Controllers/actividades_controller");
const chat = require("../Controllers/chat_controller");
const { estadisticas } = require("../Controllers/estadisticas_controller");
const { user } = require("../Controllers/usuario_controller");
const router = Router();

// Admin
router.get("/admin/usuarios/listar", user.listarUsuarios);
router.post("/admin/temas/agregar", actividades.agregarTema);
router.put("/admin/temas/modificar", actividades.modificarTema);
router.delete("/admin/temas/eliminar/:id", actividades.eliminarTema);
router.post("/admin/actividades/agregar", actividades.agregarActividad);
router.put("/admin/actividades/modificar", actividades.modificarActividad);
router.delete("/admin/actividades/eliminar/:id", actividades.eliminarActividad);
router.get("/admin/temas/obtener", actividades.listarTemas);


//usuarios
router.post("/usuario/nuevo", user.nuevoUsuario);
router.get("/usuario/datos/:usuario", user.getUsuario);
router.put("/usuario/modificar", user.modificarUsuario);
router.post("/iniciar_sesion", user.iniciarSesion);

router.delete('/usuario/eliminar/:usuario', user.elimnarUsuario);
router.post("/resetear_clave", user.resetearClave);
router.post("/cambio_clave", user.cambiarClave);
router.get("/solicitar_clave/:usuario", user.solicitarClave);


//actividades
router.post("/actividades/obtener", actividades.obtenerActividades);
router.post("/actividades/resolver", actividades.resolverActividad);
router.post("/temas/obtener", actividades.obtenerTemas);


//estadisticas
router.get("/usuario/estadisticas_java/:usuario", estadisticas.getJava);
router.get("/usuario/estadisticas_csharp/:usuario", estadisticas.getCsharp);

// Foro - chat
router.post("/chat/nuevo", chat.nuevoMensaje);
router.get("/chat/obtener", chat.obtenerMensajes);




module.exports = router;
