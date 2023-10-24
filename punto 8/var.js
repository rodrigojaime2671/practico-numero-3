
function agregarPersona() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    

    if (nombre && apellido && edad) {
      let tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];
      let fila = tabla.insertRow();  

      fila.insertCell().textContent = nombre;
      fila.insertCell().textContent = apellido;
      fila.insertCell().textContent = edad;

      let celdaEliminar = fila.insertCell();
      let botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.onclick = function() {
        tabla.deleteRow(fila.rowIndex);
      };
      celdaEliminar.appendChild(botonEliminar);

     
    }
  }
