/*
Brais Fernandez Montes
Ejercicio 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let num1;
	let num2;
	let result;

	num1 = document.getElementById("txtIdNumeroDividendo").value;
	num2 = document.getElementById("txtIdNumeroDivisor").value;

	num1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	result = "El resto es " + (num1 % num2);

	alert(result);
}
