/*1.	Para el departamento de facturación:
Fernandez Montes Brais
TP 01
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let numero1;
    let numero2;
    let numero3;
    let resultado;

    numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    resultado = numero1+numero2+numero3;

    alert( "la suma es " + resultado)

}
function Promedio () 
{
	let num1;
    let num2;
    let num3;
    let resultado; 

    num1= parseInt(document.getElementById("txtIdPrecioUno").value);
    num2= parseInt(document.getElementById("txtIdPrecioDos").value);
    num3= parseInt(document.getElementById("txtIdPrecioTres").value);
 
    resultado= (num1+num2+num3) /3;
    

    alert( "el promedio es " + resultado);
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let resultado;

    precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3=parseInt(document.getElementById("txtIdPrecioTres").value);

    suma=precio1+precio2+precio3;
    iva= (suma)*21/100;
    resultado= suma+iva;
    alert ("el precio final de la suma mas el iva es " + resultado);
 

}