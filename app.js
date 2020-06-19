//operaciones aritmeticas en Javascript.

const num1 = 75;

const num2 = 45, num3 = 15, num4 = 3432, num5 = -1233;



let resultado;

//aritmetica

//suma

resultado = num1 + num2;

//resta

resultado = num2 - num3;

//multiplicación

resultado = num4 * num5;

//división

resultado = num5 / num1;

//modulo

resultado = num3 % num4;

//console.log(resultado);

//aplicacion de resta.

let compras = prompt('cuantos docenas de facturas hiciste?');
let ventas = prompt('cuantos docenas vendiste?');

var productos;

let vendidos = (compras*12) - (ventas*12);
if(vendidos == 1){
var facturas = 'factura';
}
else{
    var facturas = 'facturas';
}
if(ventas > compras){
    alert('tus ventas no pueden superar a tus compras, vuelve a iniciar la pagina por favor');
}
if (ventas === compras) {
    alert('te has quedado sin stock, vendiste todo');
}   


let v_totales = `hoy vendiste ${vendidos} ${facturas}.`; 

console.log(v_totales);


//Aplicación de suma

let bolsas = prompt('cuantas bolsas de harina tenes?');
let comprasbolsas = prompt('cuantas bolsas de harina compraste?');
if(bolsas <= 0 | comprasbolsas <= 0){
    alert('tus datos de ingresos de tu stock son incorrectos, vuelve a intentarlo por favor')
}

let compradas = bolsas- -comprasbolsas;

let b_totales = `tu stock de bolsas de harina es ${compradas}`;

console.log(b_totales);





