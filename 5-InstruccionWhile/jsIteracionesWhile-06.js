function mostrar()
{
	
	let acumulador;
	let numero;
	let i=0;
	let promedio;

	
	acumulador=0;
	
	

	while(i<5){
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		i++; //(i= i + 1);


	}
	promedio = acumulador/5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value= promedio;



}//FIN DE LA FUNCIÓN