/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let cont=0;
	let acumulador=0;
	let respuesta="si";
	let numero;
	let promedio;

	
	
	while(respuesta == "si"){
		numero = parseInt(prompt("ingrese un numero"));
		respuesta = prompt("¿Ingresa otro numero? si/no");
		acumulador = acumulador + numero;
		cont= cont+ numero;
	
	}
	document.getElementById("txtIdSuma").value= acumulador;
	document.getElementById("txtIdPromedio").value= promedio;
	promedio= acumulador/ cont;
	
	


	
	

}//FIN DE LA FUNCIÓN