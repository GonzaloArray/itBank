// Login para HomeBanking
document.addEventListener("DOMContentLoaded", iniciarApp);

const formulario = document.querySelector('.mensajeError');

function iniciarApp() {
    consultarApi();
}

//Me traigo el JSON por la url
function consultarApi() {
    const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
    fetch(url)
        .then(result => result.json())
        .then(cotizaciones => dolaresCotizacion(cotizaciones))
}
//Desarmo el JSON
function dolaresCotizacion(cotizaciones) {

    const cotizacionesFilter = cotizaciones.filter(response=>{
        const objetoCasa = response.casa;
        const { nombre} = objetoCasa;
        if(nombre !== 'Argentina' && nombre !== 'Bitcoin' && nombre !== 'Dolar Soja'){
            return true;
        }else{
            return false;
        }
    });
    
    mostrarCotizacion(cotizacionesFilter);
}

function mostrarCotizacion(cotizacionfiltrada){

    //Itero dentro del Objeto para imprimirlo en el html
    for(let index in cotizacionfiltrada){
        document.querySelector(`#titulo${index}`).textContent=cotizacionfiltrada[index].casa.nombre;
        document.querySelector(`#compra${index}`).textContent=cotizacionfiltrada[index].casa.compra;
        document.querySelector(`#venta${index}`).textContent=cotizacionfiltrada[index].casa.venta;
        document.querySelector(`#variacion${index}`).textContent=cotizacionfiltrada[index].casa.variacion;
    }

    actualizarFecha();

    setInterval(() => {
        for(let index in cotizacionfiltrada){
            document.querySelector(`#titulo${index}`).textContent=cotizacionfiltrada[index].casa.nombre;
            document.querySelector(`#compra${index}`).textContent=cotizacionfiltrada[index].casa.compra;
            document.querySelector(`#venta${index}`).textContent=cotizacionfiltrada[index].casa.venta;
            document.querySelector(`#variacion${index}`).textContent=cotizacionfiltrada[index].casa.variacion;
        }
        actualizarFecha();
    }, 40000);
    
}

//Funcion para actualizar la fecha de las cotizaciones
function actualizarFecha() {

    //Creo el formato de la fecha
    const diaHoy = new Date();
    const fecha = `${diaHoy.getDate()}/${diaHoy.getMonth()}/${diaHoy.getFullYear()}`;
    let hora = diaHoy.getHours();
    let minutes = diaHoy.getMinutes();
    minutes = ('0' + minutes).slice(-2);
    const fechaHora = `${fecha} ${hora}:${minutes}`;

    //Itero para mostrar la fecha en los html
    for(let i=0; i<6; i++){
        document.querySelector(`.actualizarFecha${i}`).textContent=fechaHora;
    }
}