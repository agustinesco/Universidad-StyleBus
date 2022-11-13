const users = [{
    user: "fran@gmail.com",
    password: "Fr4nalv!"
},
{
    user: "daniel@gmail.com",
    password: "D@nielr!"
},
{
    user: "sofi@gmail.com",
    password: "S0f!afer"
},
{
    user: "maria@gmail.com",
    password: "Mar1al!a"
}]


//funcion que valida que este el mail para recuperar la contraseña
function validarRecupero() {
    let inputUser =  $("#nombreusuario").val()
    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ((inputUser == '')) {
        alert('Debe ingresar un correo para recuperar la contraseña');
    } else if (!expr.test(inputUser)) {
        alert('Formato de correo inválido');
    } else if (!( users.some((user) => user.user=== inputUser))) {
        alert('Ese no es un usuario actual del sistema');
    } else {
        location.href = "recuperarContraseña.html";
    }
}

//funcion que valida que este todo completo para cargar
function validar() {
    let inputPass = $("#password").val();
    let inputUser = $("#nombreusuario").val();
    let exprUsuario = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let exprContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
   
    let usaurioOContraceñaVacio = (inputUser == '') || (inputPass == '')
    let contraseñaLargoIncorrecto = inputPass.length !== 8
    let usuarioFormatoIncorrecto = !exprUsuario.test(inputUser)
    let contraFormatoIncorrecto = !exprContra.test(inputPass)
    let usuarioNoEncontrado = !( users.some((user) => user.user=== inputUser&& user.password===inputPass))
  
    if (usaurioOContraceñaVacio) {
        alert('El usuario y la contraseña son obligatorios');
    } else if (contraseñaLargoIncorrecto) {
        alert('La contraseña debe tener 8 caracteres');
    }
     else if (usuarioFormatoIncorrecto) {
        alert('Formato de correo inválido');
    }
     else if (contraFormatoIncorrecto) {
        alert('La contraseña debe tener al menos un caracter especial y una mayúscula');
    }
     else if (usuarioNoEncontrado) {
        alert('Usuario o contraseña incorrecto');
    }
     else{
        location.href = "ingresoExitoso.html";
    }
}

