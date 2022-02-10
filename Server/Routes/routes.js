const {Router}= require("express");
const { estadisticas } = require("../Controllers/estadisticas_controller");
const {user, session} = require("../Controllers/usuario_controller");
const router = Router();


router.get("/listar", user.listarUsuarios);
router.get("/usuario", user.getUsuario);
router.get("/java", estadisticas.getJava);
router.get("/cerrar", user.cerrarSesion);

module.exports = router;
