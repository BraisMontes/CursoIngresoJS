/*Fernandez Montes Brais
Ejercicio 10 Switch*/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	
	let estacion;
	let destino;
	let mensaje= "No se viaja";

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
 switch(estacion){
	 case "Invierno": 
	 	if(destino == "Bariloche"){
			 mensaje = "Se viaja";
	 }
	 	break;
	case "Verano":
		if(destino == "Cataratas" || destino == "Mar del plata"){
			mensaje = "Se viaja";
	}
		break;
	case "Otoño":
		mensaje = "Se viaja";
		break;
	case "Primavera":
		if(destino != "Bariloche"){
			mensaje = "Se viaja";
		}
		break;
		
	
 }
 	alert(mensaje);
}//FIN DE LA FUNCIÓN