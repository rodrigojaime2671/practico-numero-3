function agregarElemento () {
    let texto = document.getElementById ('nuevoElemento').value;

    if (texto === '')return;

    let lista = document.getElementById('listaElementos');
    let elementos = lista.getElementsByTagName('li');
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].textContent.startsWith(texto)) {
            return;
        }
    }

   let nuevoElemento = document.createElement('li')
   nuevoElemento.textContent = texto;


   let botonEliminar = document.createElement('button');
   botonEliminar.textContent = 'Eliminar'
   botonEliminar.onclick = function() {
    lista.removeChild(nuevoElemento)
   }

   nuevoElemento.appendChild(botonEliminar);
   lista.appendChild(nuevoElemento)
 
}

