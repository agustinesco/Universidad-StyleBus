//funcion que valida que este el mail para recuperar la contraseña
function validarRecupero() {
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (($("#nombrearticulo").val() == '')) {
        alert('Debe ingresar un correo para recuperar la contraseña');
    } else {
        if (!expr.test($("#nombrearticulo").val())) {
            alert('Formato de correo inválido');
        } else {
            location.href = "recuperarContraseña.html";
        }
    }
}



//funcion que valida que este todo completo para cargar
function validar() {
    var inputPass = $("#password").val();
    var inputUser = $("#nombrearticulo").val();
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var exprContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    
    let users = [{
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
   



  
    if (($("#nombrearticulo").val() == '') || ($("#password").val() == '')) {
        alert('Error en usuario y/o contraseña');
    } else {
        if (inputPass.length !== 8) {
            alert('La contraseña debe tener 8 caracteres');
        } else {
            if (!expr.test($("#nombrearticulo").val())) {
                alert('Formato de correo inválido');
            } else {
                if (!exprContra.test(inputPass)) {
                    alert('La contraseña debe tener al menos un caracter especial y una mayúscula');
                } else {
                    if (!( users.some((user) => user.user=== inputUser&& user.password===inputPass))) {
                        alert('Usuario o contraseña incorrecto');
                    } else {
                        location.href = "ingresoExitoso.html";
                }

                }
            }
        }
    }




}

