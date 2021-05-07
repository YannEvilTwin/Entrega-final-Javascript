//Declaración de variables

let producto = ""
let carrito = [] 
const btnVerCarrito = document.getElementById("btnVerCarrito")
const btnVolver = document.getElementById("btnVolver")
const btnFinalizarCompra = document.getElementById("btnFinalizarCompra")
const grillaDeProductos = document.getElementById("grillaDeProductos")
const ProductosEnCarrito = document.getElementById("ProductosEnCarrito")
const grillaDetalleCheckOut = document.getElementById("grillaDetalleCheckOut")
const ofertaDeProductos = document.getElementById("ofertaDeProductos")
const checkOut = document.getElementById("checkOut")


$.getJSON("js/productos.json", (response, status) => {
    // Si la salida es correcta
    // Ejecuta el código si se cumple la condición arriba descripta
    if (status === "success") {
        contenido = response
        contenidoCompleto = contenido
       
        console.table (contenido)
        for (let producto of contenido) {
            // FILTRO DE CATEGORIA
            $("#tienda-contenido").append(gridProducto(producto))
         

        }
        recuperoCarrito()
        producto = new Producto(carrito)
        
        // Filtras el array y creas uno nuevo
        filterContenido = contenido.filter (producto => producto.categoria == "Kit")
         // BOTON PARA FILTRAR
         $(document).on("click",".filtrar",function() {
            for (let producto of filterContenido) {
                $("#tienda-contenido").empty()
                $("#tienda-contenido").append(gridProducto(producto))
            }      
           
        })

    } else {
        console.log("ocurrio un error al cargar los productos")
    }
})


// Maqueta Grid Productos mostrada en Categorias, Grid de Productos
const gridProducto = (producto) => {


    // Maquetado de la caja de producto
    GridCard = `<div class="col-lg-3 col-md-6 mt-sm-20">
    <div class="card">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <div class="row pb-4 pt-2">
          <div class="col">
            <h5>$${producto.precioDescuento}</h5>
          </div>
          <div class="col text-right">
            <h5><s class="text-danger">$${producto.precio}</s></h5>
          </div>
          <div class="col-12">
          <button class="btn indigo accent-1" onclick="agregoProductoAlCarrito(${producto.productoid})">Seleccionar</button></div>
        </div>
        </div>
      </div>
    </div>
  
    `

    return GridCard
}

let agregoProductoAlCarrito = (id) => {
  let r = contenido.find(c => c.productoid == id)
  carrito.push(r)
  actualizoCarrito()
  guardoCarrito()
}

let actualizoCarrito = () => {
  let leyendaCarrito = `PRODUCTOS EN EL CARRITO: ${carrito.length}`
  productosEnCarrito.innerHTML = leyendaCarrito
}

const armoCheckOut = () => {
  let fila = ""
  grillaDetalleCheckOut.innerHTML = ""
  if (carrito.length > 0) {
      for (let producto of carrito) {
          fila = `<tr>
                  <td>${producto.nombre}</td>
                  <td class="right">$ ${producto.precio}</td>
              </tr>`
          grillaDetalleCheckOut.innerHTML += fila
      }
      fila = `<tr class="indigo accent-3"> 
                  <td>Total de la compra</td>
                  <td class="right">$ ${producto.calculoTotalCarrito()}</td>
              </tr>`
      grillaDetalleCheckOut.innerHTML += fila

      alternarListadoProductosCheckout()
  }
}

const alternarListadoProductosCheckout = () => {
  ofertaDeProductos.classList.toggle("hide")
  checkOut.classList.toggle("hide")
}

const finalizarCompra = () => {
  Swal.fire(
      '¡Compra realizada!',
      '¡Muchas gracias!',
      'success'
    )
  setTimeout(() => {
      carrito = []
      localStorage.clear()
      carritoProductos = []
      actualizoCarrito()
      alternarListadoProductosCheckout()
  }, 2500);
}

const guardoCarrito = () => {
  if (carrito.length > 0)
      localStorage.carrito = JSON.stringify(carrito)
}

const recuperoCarrito = () => {
  if (localStorage.carrito != undefined) {
      carrito = JSON.parse(localStorage.carrito)
      actualizoCarrito()
  }
}


// Form AJAX

$("#ajaxForm").submit(function(e){
    e.preventDefault();
    var action = $(this).attr("action");
    var data = {};
    $(this).serializeArray().map(function(x){data[x.name] = x.value;}); 
    $.ajax({
      type: "POST",
      url: action,
      data: JSON.stringify(data),
      contentType: "application/json",
      headers: {
        "Accept": "application/json"
      }
    }).done(function() {
       $('.success').addClass('is-active');
    }).fail(function() {
       alert('Hubo un error, intenta nuevamente.')
    });
  });
   

  //Navbar
  let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});


