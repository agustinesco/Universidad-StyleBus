var cargaDatos = document.getElementById("cargarCBU");
var tarjcheck = document.getElementById("categ1");
var cuentCheck = document.getElementById("categ2");
var nomTarjeta = document.getElementById("nombreTarjeta");
var numTarjeta = document.getElementById("numTarjeta");
var fecTarjeta = document.getElementById("fechaTarjeta");
var codTarjeta = document.getElementById("codTarjeta");
//si apretas en cuentaBancaria..

document.getElementById("categ2").addEventListener("click", function (e) {
    if (cargaDatos.disabled == true) {
        cargaDatos.disabled = false;
    } else {
        cargaDatos.disabled = true;
    }
});

//si apretas en tarjeta..
document.getElementById("categ1").addEventListener("click", function (e) {
    if (nomTarjeta.disabled == true) {
        nomTarjeta.disabled = false;
        numTarjeta.disabled = false;
        fecTarjeta.disabled = false;
        codTarjeta.disabled = false;
    } else {
        nomTarjeta.disabled = true;
        numTarjeta.disabled = true;
        fecTarjeta.disabled = true;
        codTarjeta.disabled = true;
    }
});

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
//funcion que valida que este todo completo para cargar
function validar() {

    var inputContra = $("#password").val();
    var inputNombre = $("#nombre").val();
    var inputApellido = $("#apellido").val();
    var inputCalle = $("#direccionCalle").val();
    var inputDireNum = $("#direccionNum").val();
    var inputDocu = $("#docu").val();
    var inputFechaNac = $("#nacimiento").val();
    var checkboxTarjeta = $('#tarjeta').val();
    var checkboxCuenta = $('#cuentaBancaria').val();
    var tarjeta = $('#categ1').val();
    var cuentaB = $('#categ2').val();
    var nombreTar = $("#nombreTarjeta").val();
    var numTarj = $("#numTarjeta").val();
    var fechaTarj = $("#fechaTarjeta").val();
    var codTarj = $("#codTarjeta").val();
    var cbu = $("#cargarCBU").val();

    const fechaActual = new Date();

    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var exprContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){7,15}$/;

    if ($('input[type=checkbox]:checked').length === 0) {
        alert('Debe seleccionar al menos un método de pago');
    } else {
        if (inputNombre.length > 40 || inputNombre.length < 2 || isNaN(inputNombre) == false) {
            alert('Debe ingresar un nombre válido');
        } else {
            if (inputApellido.length > 40 || inputApellido.length < 2 || isNaN(inputApellido) == false) {
                alert('Debe ingresar un apellido válido');
            } else {
                if (inputCalle.length > 50 || inputCalle.length < 2) {
                    alert('Debe ingresar una dirección válida');
                } else {
                    if (inputDireNum.length > 4 || inputDireNum.length < 3 || isNaN(inputDireNum) == true) {
                        alert('Debe ingresar un número de dirección válido');
                    } else {
                        if (inputDocu.length > 8 || inputDocu.length < 7 || isNaN(inputDocu) == true) {
                            alert('DNI inválido o incompleto');
                        } else {
                            if (Date.parse(fechaActual) < Date.parse(inputFechaNac) || inputFechaNac == "") {
                                alert('Debe ingresar su fecha de nacimiento');
                            } else {
                                if ($('#categ1').is(':checked') && (nombreTar == "" || nombreTar.length > 40 || nombreTar.length < 2 || numTarj == "" || numTarj.length != 16 || isNaN(numTarj) == true || fechaTarj == "" || Date.parse(fechaTarj) < Date.parse(fechaActual) || codTarj == "" || codTarj.length != 3 || isNaN(codTarj) == true)) {
                                    alert('Datos de la tarjeta incompletos o erróneos');
                                } else {
                                    if ($('#categ2').is(':checked') && (cbu == "" || cbu.length != 22 || isNaN(cbu) == true)) {
                                        alert('Datos de la cuenta bancaria o MercadoPago incompletos o erróneos');
                                    } else {
                                        if (!expr.test($("#correo").val())) {
                                            alert('Debe ingresar una dirección válida de correo');
                                        } else {
                                            if (inputContra.length < 7) {
                                                alert('La contraseña debe tener 7 caracteres como mínimo');
                                            } else {
                                                if (!exprContra.test(inputContra)) {
                                                    alert('La contraseña debe tener al menos un caracter especial y una mayúscula');
                                                } else {
                                                    alert('Se registró correctamente');
                                                    //location.href ="cargaExitosa.html";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}



