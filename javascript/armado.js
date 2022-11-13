
$(document).ready(function() {
    armarBarraNavegacion();
    armarFooter();
});

function armarBarraNavegacion() {
    $('#barraNavegacion').html("    <nav class='navbar navbar-expand-lg navbar-light bg-transparent fixed-top' style='background-color: #e3f2fd;'>  <a class='navbar-brand' href='PaginaPrincipal.html'> <img src='imgs/SB.png' width='30' heigh='30' class='d-inline-block align-top' alt='logo'>   <div class='container'>      <a class='navbar-brand'>StyleBus</a>      <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>        <span class='navbar-toggler-icon'></span>      </button>      <div class='collapse navbar-collapse' id='navbarResponsive'>        <ul class='navbar-nav ml-auto'>          <li class='nav-item active'>            <a class='nav-link' href='PaginaPrincipal.html'>Incio              <span class='sr-only'></span>            </a>          </li>          <li class='nav-item'>            <a class='nav-link' href='miCuenta.html'>Mi Cuenta</a>          </li>          <li><span class='social-icon'>            <a class='nav-link' href='https://m.facebook.com/story.php?story_fbid=pfbid027YSfF94ovg4C3ZSsgHQZLnzjd6iPSW4148AQcTkPKqKQa3uKoPD62ZqDv2ruC9J2l&id=100087908016638&sfnsn=scwspwa'><img src='imgs/redes/fac.png' height='25px'> </a></span>          </li>          <li><span class='social-icon'>            <a class='nav-link' href='https://www.instagram.com/stylebusarg/'><img src='imgs/redes/inst.png' height='25px'> </a></span>          </li>           <li><span class='social-icon'>            <a class='nav-link' href='https://twitter.com/stylebusarg?t=MUaCD8a5yiWW8mvCPwRWBg&s=08'><img src='imgs/redes/tw.png' height='25px'> </a></span>          </li>          <li class='nav-item'>            <a class='nav-link' href='nosotros.html'>Nosotros</a>          </li>          <li class='nav-item'>            <a class='nav-link' href='contacto.html'>Contacto</a>          </li>          <li><span class='social-icon'>            <a class='nav-link' href='carrito.html'><img src='imgs/redes/carrito.png' height='25px'> 3</a></span>          </li>          <li class='nav-item'>            <a class='nav-link' href='#' >Salir</a>          </li>        </ul>      </div>    </div>  </nav>");
}

function armarFooter() {
    $('#footer').html("   <footer class='py-5 bg-blue'>    <div class='container'>      <p class='m-0 text-center text-white'>Copyright &copy; Tp Grupo 2</p>    </div>  </footer>");
}


