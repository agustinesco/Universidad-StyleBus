window.onload = mostrar();
var viajesEncontrados= [];   
var aja=0;


function mostrar() {
    viajesEncontrados= []
    let filtronombre=$("#filtronombre").val(); 
    let filtroservicio=$("#filtroservicio").val(); 
    let filtroorigen=$("#filtroorigen").val();
    let filtroida=$("#filtroida").val();     
    let filtroCantPasaj=$("#filtroCantPasaj").val();  
    let filtroFechaSalida = new Date ($("#fechaSalida").val());
    let filtroFechaRegreso = new Date($("#fechaRegreso").val());
    let contenedorViajes = "<div class='row'>";
    const fechaActual = new Date();
    
    document.getElementById('mapid').innerHTML = "<div id='map'></div>";
    
    var location = [ -34.521166, -58.700661];
    var map = L.map('map').setView(location, 15);
    
  
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors '
    }).addTo(map);

    //filtrado de búsqueda
    artesanías.forEach(viaje => {
        let fechaSal = new Date(viaje.fSalida);
        let fechaReg = new Date (viaje.fRegreso);

        let viajeIncluyeNombre = viaje.nombre.toLowerCase().includes(filtronombre.toLowerCase())
        let viajeIncluyeServicio = viaje.tipoDeServicio.includes(filtroservicio)
        let viajeSaleDeOrigen = viaje.origen.includes(filtroorigen)
        let esIdaVuelta = viaje.idaVuelta.includes(filtroida)
        let omnibusConCapacidad = viaje.capacidad>(parseInt(filtroCantPasaj, 10)) || filtroCantPasaj === ""
        let fechaSalidaValida = (filtroFechaSalida.getTime() === fechaSal.getTime() && fechaActual <= filtroFechaSalida)
        let fechaLlegadaValida = filtroFechaRegreso.getTime() === fechaReg.getTime()

        if (viajeIncluyeNombre && viajeIncluyeServicio && viajeSaleDeOrigen && esIdaVuelta && omnibusConCapacidad && fechaLlegadaValida && fechaSalidaValida) {
            contenedorViajes += agregarViajeAHtml(viaje, map)
            viajesEncontrados.push(viaje)
        }

    })    
    if (viajesEncontrados.length === 0){
        contenedorViajes = "<h5>Sin Resultados</h5> ";
    }
    contenedorViajes += "</div>"
    console.log(contenedorViajes)
    document.getElementById("contenedorViajes").innerHTML = contenedorViajes;
}


function comprar(){
    if (aja == 0){
        alert ('No ha seleccionado ningún viaje');
    }
    else if(viajesEncontrados.length !== 0){
        location.href ="agregarPasajeros.html";
    }
}

function agregarViajeAHtml(viaje, map) {
    
        ({nombre, id, coodenada_x, coodenada_y, terminal, foto, precio, horario, tipoDeServicio} = viaje)
        let location = [coodenada_x , coodenada_y];
        let Marker=L.marker(location).bindPopup(nombre);
        Marker.addTo(map);

        return `
        <div class='col-lg-12 mb-3'> 
            <div class='card w-100' id=${id} onclick=centrarmapa(${coodenada_x},${coodenada_y},${id})>
                <div class='card-body'>
                    <h4 class='card-title'>
                    <a>${nombre}</a></h4>
                    <p>${terminal}</p>
                    <div id='info${id}' style='display:none;'><a><img class='card-img-top imagen' src=${foto}></a> <p> <b>Precio:</b> ${precio}</p> <p> <b>Horario:</b> ${horario}</p> <p> <b>Categorías:</b> ${tipoDeServicio}</p> <p> <b>Terminal:</b> ${terminal}</p>  
                    </div>
                </div>
            </div>
        </div>
        `
        
}

    //centrado de mapa con las coordenadas y el id.
function centrarmapa(coordenada_x, coordenada_y, id_viaje)  {
    var terminal = [coordenada_x , coordenada_y];
    mostrar();      //restaurar 
    document.getElementById('mapid').innerHTML = "<div id='map'></div>";
    var map = L.map('map').setView(terminal, 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var Marker=L.marker(terminal).bindPopup('Ubicación del <b>Taller</b> seleccionado'); 
    Marker.addTo(map);
   
    var intro = document.getElementById(id_viaje);
    var aux = "#info"+id_viaje;
    intro.style.backgroundColor = "rgba(117, 131, 190, 0.623)"; 

    $(aux).toggle("slow");
    aja = 1
}


