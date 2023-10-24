let verLista = document.getElementById('lista')
verLista.addEventListener ('click', abrirLista)

let cerrarLista = document.getElementById ('cerrar')
cerrarLista.addEventListener ('click', cerrarLaLista)

let resultado = document.getElementById ('resultado')
resultado.style.display = ('none')

function abrirLista () {
    resultado.style.display = ('block')
}

function cerrarLaLista () {
    resultado.style.display = ('none')
}