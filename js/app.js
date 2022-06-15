
// Login para HomeBanking
document.addEventListener('submit', iniciarApp);

const formulario = document.querySelector('.mensajeError');
//ubicación
const titulo = document.querySelector("#titulo");
const titulo1 = document.querySelector("#titulo1");
const titulo2 = document.querySelector("#titulo2");

const venta = document.querySelector("#venta");
const venta1 = document.querySelector("#venta1");
const venta2 = document.querySelector("#venta2");

const compra = document.querySelector("#compra");
const compra1 = document.querySelector("#compra1");
const compra2 = document.querySelector("#compra2");

const variacion = document.querySelector("#variacion");
const variacion1 = document.querySelector("#variacion1");
const variacion2 = document.querySelector("#variacion2");





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

//cotizador 
console.log("Hola");
