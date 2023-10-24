let imagenes = ['imagenes/pierpaolo-riondato-s7r4xjKXo0s-unsplash.jpg', 'imagenes/giorgio-trovato-fczCr7MdE7U-unsplash.jpg', 'imagenes/jose-ignacio-pompe-s-Z-h0fEiBM-unsplash.jpg']

let imagen = document.getElementById('imagen');
let botonCambiarImagen = document.getElementById('cambiarImagen')

function cambiarImagenAleatoriamente() {
    let aleatorio = Math.floor(Math.random() * imagenes.length);

    imagen.src = imagenes[aleatorio];
}

botonCambiarImagen.addEventListener('click', cambiarImagenAleatoriamente)

cambiarImagenAleatoriamente()