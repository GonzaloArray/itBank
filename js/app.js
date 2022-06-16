
// Login para HomeBanking
document.addEventListener("DOMContentLoaded", iniciarApp);

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

const variacion = document.querySelector("#variacion span");
const variacion1 = document.querySelector("#variacion1 span");
const variacion2 = document.querySelector("#variacion2 span");

function iniciarApp() {

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
        const { compra,venta,agencia,nombre,variacion,ventaCero,decimales } = objetoCasa;
        if(agencia==310 || agencia==349 || agencia==406){
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

    compra.textContent=cotizacionfiltrada[0].casa.compra;
    compra1.textContent=cotizacionfiltrada[1].casa.compra;
    compra2.textContent=cotizacionfiltrada[2].casa.compra;

    venta.textContent=cotizacionfiltrada[0].casa.venta;
    venta1.textContent=cotizacionfiltrada[1].casa.venta;
    venta2.textContent=cotizacionfiltrada[2].casa.venta;

    variacion.textContent=cotizacionfiltrada[0].casa.variacion;
    variacion1.textContent=cotizacionfiltrada[1].casa.variacion;
    variacion2.textContent=cotizacionfiltrada[2].casa.variacion;
  
}