var tiro_1;
var tiro_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var total_t;
var turno = 1;
var punto;

window.onload = init;

function init(){
boton_tirar = document.getElementById("boton_tirar");
boton_tirar.addEventListener("click", jugar);
