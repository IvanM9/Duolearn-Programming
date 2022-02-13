const { Router } = require("express");
const actividades = require("../Controllers/actividades_controller");
const { estadisticas } = require("../Controllers/estadisticas_controller");
const { user } = require("../Controllers/usuario_controller");
const router = Router();

//usuarios
router.get("/admin/usuarios/listar", user.listarUsuarios);
router.post("/usuario/nuevo", user.nuevoUsuario);
router.get("/usuario/datos", user.getUsuario);
router.put("/usuario/modificar", user.modificarUsuario);
router.post("/iniciar_sesion", user.iniciarSesion);
router.get("/cerrar_sesion", user.cerrarSesion);
router.delete('/usuario/eliminar', user.elimnarUsuario);
router.post("/recuperar_clave", user.solicitarClave)


//actividades
router.get("/actividades/obtener", actividades.obtenerActividades);
router.post("/actividades/resolver", actividades.resolverActividad);


//estadisticas
router.get("/usuario/estadisticas_java", estadisticas.getJava);



module.exports = router;
