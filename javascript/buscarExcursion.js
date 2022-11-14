
window.onload = mostrar();
var ok_comprar = false;
var cuadro = "<div class='row'>";

function mostrar() {
    var filtronombre = $("#filtronombre").val();
    var filtrocategoria = $("#filtrocategoria").val();
    var filtroHora = $("#filtroHora").val();



    document.getElementById('mapid').innerHTML = "<div id='map'></div>";
    var location = [-34.521166, -58.700661];
    var map = L.map('map').setView(location, 15);

    const fechaActual = new Date();
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors '
    }).addTo(map);

    //filtrado de búsqueda
    var contador = 0;

    for (i = 0; i < talleres.length; i++) {
        var filtroExcursion = new Date($("#fechaExc").val());

        var fechaE = new Date(talleres[i].fecha);
        if (talleres[i].nombre.toLowerCase().includes(filtronombre.toLowerCase())) {
            if (talleres[i].categoria.includes(filtrocategoria)) {
               
                    if (filtroExcursion.getTime() <= fechaE.getTime() && (fechaActual <= filtroExcursion)) {
                        if (talleres[i].hora.includes(filtroHora)) {
                            var y = talleres[i].coodenada_x;
                            var x = talleres[i].coodenada_y;
                            var nombre = talleres[i].nombre;
                            var id = talleres[i].id;
                            var location = [y, x];
                            map.setView(location, 15);
                            var Marker = L.marker(location).bindPopup(talleres[i].nombre);
                            Marker.addTo(map);

                            var cuadro = cuadro + "<div class='col-lg-12 mb-3'> <div class='card w-100' id=" + id + " onclick=centrarmapa(" + y + "," + x + "," + id + ")>";
                            var cuadro = cuadro + "";
                            var cuadro = cuadro + "<div class='card-body'>";
                            var cuadro = cuadro + "<h4 class='card-title'>";
                            var cuadro = cuadro + "<a  >" + nombre + "</a> </h4>";
                            var cuadro = cuadro + "<p>" + talleres[i].direccion + "</p>";
                            var cuadro = cuadro + "<div  id='info" + id + "' style='display:none;'><a><img class='card-img-top imagen' src=" + talleres[i].foto + "></a> <p> <b>Telefono:</b> " + talleres[i].telefono + "</p> <p> <b>Horarios:</b> " + talleres[i].horario + "</p> <p> <b>Categorías:</b> " + talleres[i].categoria + "</p> <p> <b>Actividades ofrecidas:</b> " + talleres[i].actividades + "</p> <p> " + talleres[i].descripcion + "</p> </div>	";
                            var cuadro = cuadro + "</div>";
                            var cuadro = cuadro + "</div>";
                            var cuadro = cuadro + "</div>";
                            contador = contador + 1;
                        }
                    }
                    
                
            }
        }
        else{
            if(filtronombre!=""){
                cuadro = "<h5>Destino Incorrecto</h5> ";
                
            }
            
        }
        
        /*   if (!( talleres[i].nombre.toLowerCase().includes(filtronombre.toLowerCase())) || !( talleres[i].categoria.includes(filtrocategoria)) && ((filtroExcursion.getTime() > fechaE.getTime()) || (fechaActual>filtroExcursion)) && !(talleres[i].hora.includes(filtroHora)) ){
               //contador=0;
               cuadro = "<h5>Sin Resultados</h5> ";
               aja=0;
           }*/
    }
    
    console.log(cuadro);
    if (cuadro && (talleres.some((taller) => cuadro.includes(taller.nombre)))) {
        ok_comprar = true;

    }
    else {
        ok_comprar = false;
    }
    if (contador == 0) {
        cuadro = "<h5>Sin Resultados</h5> ";
    }
    cuadro = cuadro + "</div>";
    document.getElementById("vertalleres").innerHTML = cuadro;

}
function comprar() {
    if (ok_comprar) {

        location.href = "carrito.html";

    }
    else {
        alert('Revisar campos a ingresar');
    }
}
//centrado de mapa con las coordenadas y el id.
function centrarmapa(var1, var2, var3) {
    var ubicacion = [var1, var2];
    mostrar();      //restaurar 
    document.getElementById('mapid').innerHTML = "<div id='map'></div>";
    var map = L.map('map').setView(ubicacion, 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var Marker = L.marker(ubicacion).bindPopup('Ubicación del <b>Taller</b> seleccionado');
    Marker.addTo(map);

    var intro = document.getElementById(var3);
    var aux = "#info" + var3;
    intro.style.backgroundColor = "rgba(117, 131, 190, 0.623)";

    $(aux).toggle("slow");

}




