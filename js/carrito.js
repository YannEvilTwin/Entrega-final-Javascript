class Producto { 
    constructor(carritoProductos) {
        let carrito = carritoProductos

        this.calculoTotalCarrito = () => {
            let total = 0
            for (let producto of carrito) {
                total += parseFloat(producto.precio)
            }
            return total
        }
    }
}
$(".vaciar-carrito").click(function(){
    carrito = []
    localStorage.clear()
    actualizoCarrito()
    armoCheckOut()
    //alert ("Carrito Vaciado")
    Swal.fire({
        title: 'Desea cancelar la compra?',
        text: "Estos cambios no podran revertirse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, cancelar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Cancelada!',
            'Su compra ha sido cancelada.',
            'success'
          )
        }
      })
  })

