var Datos;
// Evento de click para verificar que los campos no estén vacios
$("#boton").click(() => {
    Datos = {
        "Nombres": $("#nombres").val(),
        "Apellidos": $("#apellidos").val(),
        "Pais": $("#inputGroupSelect01").val(),
        "Correo": $("#InputEmail").val(),
        "Contraseña": $("#InputPassword1").val(),
        "Contraseña2": $("#InputPassword2").val()
    };

    if (verficarCampos()) {
        if (Datos.Contraseña === Datos.Contraseña2)
        {
            console.log(Datos);
        }

        else
            console.log("Las contraseñas no son iguales");
    }
    else
        alert("Faltan campos por llenar");
});

// Se verifica que los campos recibidos no estén vacios
const verficarCampos = () => {
    let completos = true;
    for (const x in Datos) {
        if (Datos[x].trim() === "") {
            completos = false;
            break;
        }
    }
    return completos;
};

