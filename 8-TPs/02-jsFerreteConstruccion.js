/*2.	Para el departamento de Construcción:
Fernandez Montes Brais
TP 02
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let alambre;
let largo;
let ancho;
let perimetro;
let mensaje; 

largo = parseFloat(document.getElementById("txtIdLargo").value);
ancho = parseFloat(document.getElementById("txtIdAncho").value);

perimetro= (largo + ancho) *2;

alambre = perimetro * 3;

mensaje = ("Se necesita comprar "+ alambre + " metros de alambre");

alert("Se necesita comprar "+ perimetro + " metros de alambre");






}
function Circulo () 
{
let radio;
let alambre;
let mensaje;

radio= parseFloat(document.getElementById("txtIdRadio").value);

alambre = (radio * 2 * 3.14)* 3;

mensaje= ("total de alambre a comprar " + alambre);

alert(mensaje);





}
function Materiales () 
{
	let ancho;
    let largo;
    let superficie;
    let bolsasCemento;
    let bolsascal;
    let mensaje;

    ancho= parseFloat(document.getElementById("txtIdAncho").value);
    largo = parseFloat(document.getElementById("txtIdLargo").value);

    superficie = largo * ancho;

    bolsasCemento= superficie * 2;

    bolsascal = superficie * 3;

    mensaje= ("Total de materiales para el contra piso,- bolsas de cemento "+ bolsasCemento + " bolsas de cal "+ bolsascal);

    alert(mensaje);


}




