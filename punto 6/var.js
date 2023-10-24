function cargarNombre(producto) {
    let nombre = producto.textContent;
    document.getElementById('nombreProducto').value = nombre;
}

function agregarProducto() {
    let nombre = document.getElementById('nombreProducto').value;
    if (nombre) {
        let listaResultados = document.querySelector('#resultado ul');
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombre;
        listaResultados.appendChild(nuevoElemento)
    }
}