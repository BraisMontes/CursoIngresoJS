/*
Brais Fernandez Montes
Ejercicio 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
let resultado


	numero1 = document.getElementById("txtIdNumeroUno").value;


numero2 = document.getElementById("txtIdNumeroUno").value;

numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

resultado = "La suma es " + (numero1 + numero2);	
	
alert(resultado);	
}

function restar()
{
	let numero1
	let numero2
	let resultado

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado= "La resta es " + (numero1 - numero2);
	
	alert (resultado);

}

function multiplicar()
{ 
	let num1;
	let num2;
	let resultado; 

num1 = document.getElementById("txtIdNumeroUno").value;
num2 = document.getElementById("txtIdNumeroUno").value;

num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

resultado = "La multiplicacion es " + (num1 * num2);

alert(resultado);
}


function dividir()
{
let num1;
let num2;
let resultado;

num1 = document.getElementById("txtIdNumeroUno").value;
num2 = document.getElementById("txtIdNumeroUno").value;

num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

resultado = "La division es " + (num1 / num2)

alert(resultado)
}

