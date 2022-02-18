/*Fernandez Montes Brais
Ejercicio 07 Switch*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert ("Se encuentra en el sur de la Argentina");
			break;
		case "Cataratas":
			alert ("Se encuentra en el norte de la Argentina");
			break;
		case "Mar del plata":
			alert ("Se encuentra en el Este de Argentina");
			break;
		case "Ushuaia":
			alert ("Se encuentra en el sur de la Argentina");
			break;


	}

	

}//FIN DE LA FUNCIÓN