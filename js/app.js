
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

const variacion = document.querySelector("#variacion");
const variacion1 = document.querySelector("#variacion1");
const variacion2 = document.querySelector("#variacion2");

function iniciarApp() {
    consultarApi();
}





//cotizador 


function consultarApi () {
const url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
fetch(url)
.then(result=>result.json())
.then(resultado=>dolaresCotizacion(resultado)) 
}

function dolaresCotizacion (datos) {
console.log (datos);    
}