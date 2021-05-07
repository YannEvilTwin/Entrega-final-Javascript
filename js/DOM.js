//Declaración de variable

const titulo = document.getElementById("titulo")

function construirDOM(elemento, ubicacion) {
    ubicacion.appendChild(elemento)
}

const titulo1 = document.createElement("h1")
titulo1.innerText = "Tienda Gamer"
titulo1.classList.add()
construirDOM(titulo1, titulo)

//$('t1').append("<h1>Tienda Gamer</h1>");

const titulo2 = document.createElement("h2")
titulo2.innerText = "El mejor set-up para los mejores players"
titulo2.classList.add()
construirDOM(titulo2, titulo)


btnVerCarrito.addEventListener("click", armoCheckOut)
btnVolver.addEventListener("click", alternarListadoProductosCheckout)
btnFinalizarCompra.addEventListener("click", finalizarCompra)


$(document).ready(function(){
  armoCheckOut()
    $(".boton-navbar").click(function(){

      if($(".boton-navbar").text() == "☰"){
        $(".boton-navbar").text("🞬");
      }else{
        $(".boton-navbar").text("☰");
      }
      
      $("li").toggle("slow");
    });  
});

$(document).ready(function () {
  $(window).scroll(function () {
    var top =  $(".goto-top");
        if ( $('body').height() <= (    $(window).height() + $(window).scrollTop() + 200 )) {
  top.animate({"margin-left": "0px"},1500);
        } else {
            top.animate({"margin-left": "-100%"},1500);
        }
    });

    $(".goto-top").on('click', function () {
        $("html, body").animate({scrollTop: 0}, 400);
    });
});

