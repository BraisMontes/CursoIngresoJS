/*Fernandez Montes Brais
Ejercicio 06*/
function mostrar()
{
	//tomo la edad  

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad>= 18 ){
		alert("Es mayor de edad");


	}
	if(edad>=13 && edad<=17){

		alert("Es adolescente");
	
	}

	if(edad<13){
		alert ("Es un niño");


	}




}//FIN DE LA FUNCIÓN