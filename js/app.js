
// Login para HomeBanking
document.addEventListener('submit', iniciarApp);

const formulario = document.querySelector('.mensajeError');

function iniciarApp(e){
    e.preventDefault();

    // Bloque que debe venir de una funcion
    const  usuario = document.querySelector('#usuario').value;
    const contrasena = Number(document.querySelector('#contrasena').value);

    // Esto tiene que salir de aca, ya que es un recopilador de funciones.
    if (usuario == 'hola' && contrasena == 123) {
        window.location = '../html/homebank.html';        
    } else {
        mostrarMensaje('Usuario y contraseña no validos');
    }
}

// Mensaje de alerta -- Se va a modificar con boostrap
function mostrarMensaje(mensaje){
    const existeError = document.querySelector('.error');

    if (!existeError) { 
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error', 'bg-danger', 'px-5', 'py-1','text-light', 'rounded-pill', 'border', 'border-1', 'font-size', 'font-weight', 'fs-6', 'fw-bold');
    
    
        // Mensaje de error
        divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);    

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}