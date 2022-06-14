document.addEventListener('DOMContentLoaded', iniciarApp);

const resultado = document.querySelector('.resultado');

function iniciarApp() {
    consultarApi();
}

function consultarApi() {
    const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(respuesta => dolaresCotizacion(respuesta))
    .catch(console.error);
}

function dolaresCotizacion(respuesta) {
    
    respuesta.forEach(element => {
        const { casa } = element;

        const divMostrar = document.createElement('LI');
        divMostrar.classList.add('listaGroup');

        const titulo = document.createElement('H2');
        titulo.textContent = casa.nombre;
        
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('divMensaje');

        const parrafo1 = document.createElement('P');
        parrafo1.textContent = `Compra: $${casa.compra}`;

        const parrafo2 = document.createElement('P');
        parrafo2.textContent = `Venta: $${casa.venta}`;
        
        const variacion = document.createElement('P');
        variacion.classList.add('variacionParrafo');
        variacion.textContent = `Variación: ${casa.variacion}`;

        divMensaje.appendChild(parrafo1);
        divMensaje.appendChild(parrafo2);
        
        divMostrar.appendChild(titulo);
        divMostrar.appendChild(divMensaje);
        divMostrar.appendChild(variacion);

        // Mostrar Información
        resultado.appendChild(divMostrar);

    });
}