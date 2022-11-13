//const aplicacion = document.querySelector('.container2')
var mercadolibre='https://api.mercadolibre.com/sites/MLA/search?q=';

$("#sugerencias").click(function(){
    desplegarlista();
});

function desplegarlista(){
  
    var articulo=$("#nombrePrecio").val();

    fetch(mercadolibre+articulo)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        contenido.innerHTML = ' <thead> <tr> <th >Productos similares a la venta  </th> <th></th> </tr> <tr>';

        data.results.slice(0,[10]).forEach(producto => {
            console.log(producto)
            contenido.innerHTML += ` <thead> <tr> <th >$  </th>  <td> ${producto.price} </td> </tr> `
         
        });
})
.catch(err => console.log(err))

}

//funcion que valida que este todo completo para cargar
function validar(){
    if ($("#mail").val() == '') {
        alert('Debe ingresar una contraseña');
        
    } else {
        if( $("#nombrearticulo").val() == ''){
            alert('Debe ingresar su nombre');
        } else{
            if( $("#reclamo").val() == ''){
                alert('Debe ingresar los datos marcados con *');
            } else{
    location.href ="index.html";

                }
            }
        
    
}
} 



