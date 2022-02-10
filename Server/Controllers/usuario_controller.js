const Usuario = require("../Models/usuario");


const user = {
    
}
user.listarUsuarios = async(req, res) => {
    try {
        const datos = await Usuario.getUsers();
        console.log(datos);
        res.json(datos);
    } catch (error) {
        console.log(error);
    }
}
user.getUsuario=async (req, res)=>{
    const {usuario, clave}= req.body;
    let datos= await Usuario.getUser(usuario);
    if(datos.clave == clave){
        req.session.user =  usuario;
        res.json(datos);
        
    }
    else
        res.json();
}
user.cerrarSesion=(req,res)=>{
    req.session.destroy();
    res.json({menssage:"sesión cerrada"});
}

module.exports= {user};