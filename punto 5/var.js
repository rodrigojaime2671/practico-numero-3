let productos = document.querySelectorAll('.producto')

let nombreProducto = document.getElementById ('nombreProducto')

function mostrarNombreProducto(event) {
   let nombre = event.target.textContent

   nombreProducto.textContent = nombre
}

productos.forEach(function(producto){
    producto.addEventListener('click', mostrarNombreProducto)
})