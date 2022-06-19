
// Login para HomeBanking
document.addEventListener("DOMContentLoaded", iniciarApp);

const formulario = document.querySelector('.mensajeError');

//ubicación
const titulo = document.querySelector("#titulo");
const titulo1 = document.querySelector("#titulo1");
const titulo2 = document.querySelector("#titulo2");
const titulo3 = document.querySelector("#titulo3");
const titulo4 = document.querySelector("#titulo4");
const titulo5 = document.querySelector("#titulo5");

const venta = document.querySelector("#venta span");
const venta1 = document.querySelector("#venta1 span");
const venta2 = document.querySelector("#venta2 span");
const venta3 = document.querySelector("#venta3 span");
const venta4 = document.querySelector("#venta4 span");
const venta5 = document.querySelector("#venta5 span");

const compra = document.querySelector("#compra span");
const compra1 = document.querySelector("#compra1 span");
const compra2 = document.querySelector("#compra2 span");
const compra3 = document.querySelector("#compra3 span");
const compra4 = document.querySelector("#compra4 span");
const compra5 = document.querySelector("#compra5 span");

const variacion = document.querySelector("#variacion span");
const variacion1 = document.querySelector("#variacion1 span");
const variacion2 = document.querySelector("#variacion2 span");
const variacion3 = document.querySelector("#variacion3 span");
const variacion4 = document.querySelector("#variacion4 span");
const variacion5 = document.querySelector("#variacion5 span");


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

    delete cotizacionfiltrada[2].casa.compra;

    titulo.textContent=cotizacionfiltrada[0].casa.nombre;
    titulo1.textContent=cotizacionfiltrada[1].casa.nombre;
    titulo2.textContent=cotizacionfiltrada[2].casa.nombre;
    titulo3.textContent=cotizacionfiltrada[3].casa.nombre;
    titulo4.textContent=cotizacionfiltrada[4].casa.nombre;
    titulo5.textContent=cotizacionfiltrada[5].casa.nombre;

    compra.textContent=cotizacionfiltrada[0].casa.compra;
    compra1.textContent=cotizacionfiltrada[1].casa.compra;
    compra2.textContent=cotizacionfiltrada[2].casa.compra;
    compra3.textContent=cotizacionfiltrada[3].casa.compra;
    compra4.textContent=cotizacionfiltrada[4].casa.compra;
    compra5.textContent=cotizacionfiltrada[5].casa.compra;

    venta.textContent=cotizacionfiltrada[0].casa.venta;
    venta1.textContent=cotizacionfiltrada[1].casa.venta;
    venta2.textContent=cotizacionfiltrada[2].casa.venta;
    venta3.textContent=cotizacionfiltrada[3].casa.venta;
    venta4.textContent=cotizacionfiltrada[4].casa.venta;
    venta5.textContent=cotizacionfiltrada[5].casa.venta;

    variacion.textContent=cotizacionfiltrada[0].casa.variacion;
    variacion1.textContent=cotizacionfiltrada[1].casa.variacion;
    variacion2.textContent=cotizacionfiltrada[2].casa.variacion;
    variacion3.textContent=cotizacionfiltrada[3].casa.variacion;
    variacion4.textContent=cotizacionfiltrada[4].casa.variacion;
    variacion5.textContent=cotizacionfiltrada[5].casa.variacion;

    actualizarFecha();

    setInterval(() => {

        titulo.textContent=cotizacionfiltrada[0].casa.nombre;
        titulo1.textContent=cotizacionfiltrada[1].casa.nombre;
        titulo2.textContent=cotizacionfiltrada[2].casa.nombre;
        titulo3.textContent=cotizacionfiltrada[3].casa.nombre;
        titulo4.textContent=cotizacionfiltrada[4].casa.nombre;
        titulo5.textContent=cotizacionfiltrada[5].casa.nombre;

        compra.textContent=cotizacionfiltrada[0].casa.compra;
        compra1.textContent=cotizacionfiltrada[1].casa.compra;
        compra2.textContent=cotizacionfiltrada[2].casa.compra;
        compra3.textContent=cotizacionfiltrada[3].casa.compra;
        compra4.textContent=cotizacionfiltrada[4].casa.compra;
        compra5.textContent=cotizacionfiltrada[5].casa.compra;

        venta.textContent=cotizacionfiltrada[0].casa.venta;
        venta1.textContent=cotizacionfiltrada[1].casa.venta;
        venta2.textContent=cotizacionfiltrada[2].casa.venta;
        venta3.textContent=cotizacionfiltrada[3].casa.venta;
        venta4.textContent=cotizacionfiltrada[4].casa.venta;
        venta5.textContent=cotizacionfiltrada[5].casa.venta;

        variacion.textContent=cotizacionfiltrada[0].casa.variacion;
        variacion1.textContent=cotizacionfiltrada[1].casa.variacion;
        variacion2.textContent=cotizacionfiltrada[2].casa.variacion;
        variacion3.textContent=cotizacionfiltrada[3].casa.variacion;
        variacion4.textContent=cotizacionfiltrada[4].casa.variacion;
        variacion5.textContent=cotizacionfiltrada[5].casa.variacion;

        actualizarFecha();

    }, 40000);
    
}
function actualizarFecha() {
    const actualizado = document.querySelector(".actualizarFecha");
    const actualizado1 = document.querySelector(".actualizarFecha1");
    const actualizado2 = document.querySelector(".actualizarFecha2");
    const actualizado3 = document.querySelector(".actualizarFecha3");
    const actualizado4 = document.querySelector(".actualizarFecha4");
    const actualizado5 = document.querySelector(".actualizarFecha5");
    
    const diaHoy = new Date();
    
    const fecha = `${diaHoy.getDate()}/${diaHoy.getMonth()}/${diaHoy.getFullYear()}`;
    let hora = diaHoy.getHours();
    let minutes = diaHoy.getMinutes();
    minutes = ('0' + minutes).slice(-2);
    
    
    const fechaHora = `${fecha} ${hora}:${minutes}`;

    actualizado.textContent = fechaHora;
    actualizado1.textContent = fechaHora;
    actualizado2.textContent = fechaHora;
    actualizado3.textContent = fechaHora;
    actualizado4.textContent = fechaHora;
    actualizado5.textContent = fechaHora;
}