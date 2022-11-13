
window.onload = mostrar();

//funcion para mostrar los cuadros en el index
function mostrar() {
    var cuadro = "<div class='row'>";
    var contador= 0;
    for (i = 0; i < 3; i++) {
        var cuadro = cuadro + "<div class='col-lg-4 col-md-6 mb-4'> <div class='card h-100'>";       
        var cuadro = cuadro + "<a><img class='card-img-top imagen' src="+listaArtesanías[i].foto+" nombre=\""+listaArtesanías[i].nombre+"\" descripcion=\""+listaArtesanías[i].descripcion+"\" tipo=\""+listaArtesanías[i].tipoDePublicación+"\"  onclick='abrir()'> </a>";  
        var cuadro = cuadro + "<div class='card-body'>";
        var cuadro = cuadro + "<h4 class='card-title'>";
        var cuadro = cuadro + "<a>"+listaArtesanías[i].nombre+"</a> </h4>";
        var cuadro = cuadro + "<p> <b>Autor:</b> "+listaArtesanías[i].nombre+"<p>";
        var cuadro = cuadro + "</div>";
        var cuadro = cuadro + "</div>";
        var cuadro = cuadro + "</div>";
        contador = contador + 1;
    }
    if (contador == 0){
        cuadro = "<h5>Sin Resultados</h5> ";
    }
    var cuadro = cuadro + "</div>";
    document.getElementById("vercuadros").innerHTML = cuadro;

}

//funcion para abrir el modal con la imagen cargada
$(function(){
    $('.foto').click(function(){
        var imagen1=$(this).attr('src');
        var nombre=$(this).attr('nombre');
        var descripcion=$(this).attr('descripcion');
        var oferta=$(this).attr('tipo');

        $('.recibir-imagen').attr('src',imagen1);
        $('.nombreDeArte').text(nombre);
	    $('.descripcionDeArte').text(descripcion);
	    $('.ofertaDeArte').text(oferta);
	    $('#mimodal').modal();
      
    });
  });



