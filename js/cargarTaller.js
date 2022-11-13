
var normalizador='http://servicios.usig.buenosaires.gob.ar/normalizar?direccion=';
// normalizar la direccion

$("#normalizar").click(function(){
    normalizardireccion();

});

function normalizardireccion(){
    var direccion=$("#direccion").val();
    contenido.innerHTML=' <thead> <tr> <th >Seleccione una de las siguientes direcciones  </th> <th></th> </tr> <tr>';

    fetch(normalizador+direccion)
    .then(res => res.json())
    .then(data => {
        for (var i = 0; i < data.direccionesNormalizadas.length; i++){
        console.log(data.direccionesNormalizadas[i])
        contenido.innerHTML += ` <td> ${data.direccionesNormalizadas[i].direccion} </td>
        <td>   <input type="radio" id="seleccion" name="seleccion" onclick="vermapa('${data.direccionesNormalizadas[i].direccion}')" value="${data.direccionesNormalizadas[i].direccion}"> </td>     
        `
    }
    contenido.innerHTML += '<tr> </thead>   ';
})

}


function vermapa(val){
    document.getElementById('mapid').innerHTML = "<div id='map'></div>";
    divT = document.getElementById("mapid");
    divT.style.display = ""; 
    document.getElementById("enviar").className = "btn btn-success btn-block";

    fetch(normalizador+val)
    .then(res => res.json())
    .then(data => {
        console.log(data.direccionesNormalizadas[0])
        if(data.direccionesNormalizadas.length == 1 ){

            var x =  data.direccionesNormalizadas[0].coordenadas.x ;
            var y =  data.direccionesNormalizadas[0].coordenadas.y ;
            var location = [y , x];
            var map = L.map('map').setView(location, 15);
        
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            var Marker=L.marker(location).bindPopup("Aca esta tu taller");
            Marker.addTo(map);
    }
    else { document.getElementById('mapid').innerHTML = "<div id='mapid'><br> <b>No se puede mostrar el mapa</b> <br> Se debe ingresar en el formato Calle + Altura + , + Localidad. <br> <i>Por ejemplo General San Martín 1020, Avellaneda </i></small></div>" 
    document.getElementById("enviar").className = "btn btn-success btn-block disabled";
}
})


}

//funcion que valida que este todo completo para cargar
function validar(){
    if ($('input[type=checkbox]:checked').length === 0) {
        alert('Debe seleccionar al menos un curso');
    } else {
        if( $("#nombretaller").val() == ''){
            alert('Debe completar el nombre del taller');
        }
        else{
            if( $("#timedesde").val() == ''){
                alert('Debe completar la hora de inicio');
            }
            else{
                if( $("#timehasta").val() == ''){
                    alert('Debe completar la hora de fin');
                } else{
                    if( $("#adjunto").val() == ''){
                        alert('Debe adjuntar una foto del Taller');
                    } else{
    location.href ="cargaExitosa.html";
                }
            }
        }
    }
}
} 



