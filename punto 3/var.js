function cambiarApellido () {
    let apellido = prompt ('cual es tu apellido')

    if (apellido) {
        document.getElementById ('saludo').textContent = 'hola rodri ' + apellido
    }
}

document.getElementById ('cambiarApellido').addEventListener ('click', cambiarApellido)