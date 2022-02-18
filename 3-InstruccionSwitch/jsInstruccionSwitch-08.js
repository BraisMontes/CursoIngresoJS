/*Fernandez Montes Brais
Ejercicio 08*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	 
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia": 
			alert ("Hace frio");
			break;
		default: alert ("Hace calor");



	}

}//FIN DE LA FUNCIÓN