/* Fernandez Montes Brais
Ejercicio 02 Switch
*/
function mostrar()

{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	

	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Julio": 
		case "Agosto": 
			alert("Abrigate que hace frio");
			break;
		
		case "Septiembre": 
		case "Octubre": 
		case "Noviembre": 
		case "Diciembre": 
			alert ("Ya pasamos el frio, ahora calor!!!");
			break;
		
		default : 
			alert("Falta para el invierno");
		



	}





}//FIN DE LA FUNCIÓN