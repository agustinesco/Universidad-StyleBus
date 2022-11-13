window.onload = mostrar();
var contador= 0;   
var salidaIncorrecta = 0;
var aja=1;
function mostrar() {
    var filtronombre=$("#filtronombre").val(); 
    var filtroservicio=$("#filtroservicio").val(); 
    var filtroorigen=$("#filtroorigen").val();
    var filtroida=$("#filtroida").val();     
    var filtroCantPasaj=$("#filtroCantPasaj").val();  
    var filtroFechaSalida = new Date ($("#fechaSalida").val());
    var filtroFechaRegreso = new Date($("#fechaRegreso").val());
    var artesanía = "<div class='row'>";
    const fechaActual = new Date();
    
    document.getElementById('mapid').innerHTML = "<div id='map'></div>";
    var location = [ -34.521166, -58.700661];
    var map = L.map('map').setView(location, 15);
  
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors '
    }).addTo(map);


    console.log($("#fechaRegreso").val());
    
    if(filtroCantPasaj<0){
        alert('nooooooooo');
    }
    //filtrado de búsqueda
    for (i = 0; i < artesanías.length; i++) {

        aja=1;
        var fechaSal = new Date (artesanías[i].fSalida);
        var fechaReg = new Date (artesanías[i].fRegreso);
        if ( artesanías[i].nombre.toLowerCase().includes(filtronombre.toLowerCase())){
            
            if ( artesanías[i].tipoDeServicio.includes(filtroservicio)){
                if ( artesanías[i].origen.includes(filtroorigen)){
                    if ( artesanías[i].idaVuelta.includes(filtroida)){
                        if ( artesanías[i].capacidad>(parseInt(filtroCantPasaj, 10)) ||filtroCantPasaj==""){
                            if ( (filtroFechaSalida.getTime() <= fechaSal.getTime()) && (fechaActual<=filtroFechaSalida)){
                                if ( filtroFechaRegreso.getTime() === fechaReg.getTime() || $("#fechaRegreso").val() ==""){
                var nombre =  artesanías[i].nombre ;
                var id =  artesanías[i].id ;
                var y =  artesanías[i].coodenada_x ;
                var x =  artesanías[i].coodenada_y ;
                
                var location = [y , x];
                map.setView(location, 15);
                var Marker=L.marker(location).bindPopup(artesanías[i].nombre);
                Marker.addTo(map);

                var artesanía = artesanía + "<div class='col-lg-12 mb-3'> <div class='card w-100' id="+id+" onclick=centrarmapa("+y+","+x+","+id+")>";       
                var artesanía = artesanía + "";
                var artesanía = artesanía + "<div class='card-body'>";
                var artesanía = artesanía + "<h4 class='card-title'>";
                var artesanía = artesanía + "<a  >"+nombre+"</a> </h4>";
                var artesanía = artesanía + "<p>"+artesanías[i].terminal+"</p>";
                var artesanía = artesanía + "<div  id='info"+id+"' style='display:none;'><a><img class='card-img-top imagen' src="+artesanías[i].foto+"></a> <p> <b>Precio:</b> "+artesanías[i].precio+"</p> <p> <b>Horario:</b> "+artesanías[i].horario+"</p> <p> <b>Categorías:</b> "+artesanías[i].tipoDeServicio+"</p> <p> <b>Terminal:</b> "+artesanías[i].terminal+"</p>  </div>	";
                var artesanía = artesanía + "</div>";
                var artesanía = artesanía + "</div>";
                var artesanía = artesanía + "</div>";
                contador = contador + 1;
            }
        }
        }
        }
        }
        }
        
    }
    if ( !(artesanías[i].nombre.toLowerCase().includes(filtronombre.toLowerCase())) || (( artesanías[i].capacidad<(parseInt(filtroCantPasaj, 10)) ) )){
        artesanía = "<h5>Sin Resultados</h5> ";
        aja = 0;
    }
    
    }
    if (contador == 0){
        artesanía = "<h5>Sin Resultados</h5> ";
    }
    var artesanía = artesanía + "</div>";
    document.getElementById("verartesanías").innerHTML = artesanía;
}
function comprar(){
    if (aja == 0){
        alert ('No ha seleccionado ningún viaje');
    }
    else if(contador!=0){
        location.href ="agregarPasajeros.html";
    }
}
    //centrado de mapa con las coordenadas y el id.
function centrarmapa(var1, var2, var3)  {
    var terminal = [var1 , var2];
    mostrar();      //restaurar 
    document.getElementById('mapid').innerHTML = "<div id='map'></div>";
    var map = L.map('map').setView(terminal, 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var Marker=L.marker(terminal).bindPopup('Ubicación del <b>Taller</b> seleccionado'); 
    Marker.addTo(map);
   
    var intro = document.getElementById(var3);
    var aux = "#info"+var3;
    intro.style.backgroundColor = "rgba(117, 131, 190, 0.623)"; 

    $(aux).toggle("slow");
}


