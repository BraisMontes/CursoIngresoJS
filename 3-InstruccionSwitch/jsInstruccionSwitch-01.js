/* Fernandez Montes Brais
Ejercicio 01 Switch*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	

	
	
	let mes;
	mes = document.getElementById("txtIdMes").value;
	switch(mes){
		case "Enero": alert("Que comiences bien el año!!!");
			break;

		case "Marzo": alert("A clases!!!");
			break;
		
		case "Julio": alert("Se vienen las vacaciones!!!");
			break;

		case "Diciembre": alert("Felices fiestas!!!");
			break;
		
	}



}//FIN DE LA FUNCIÓN