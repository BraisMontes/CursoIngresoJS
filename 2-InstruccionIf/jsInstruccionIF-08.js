/*Fernandez Montes Brais
Ejercicio 08 If*/
function mostrar()
{
	//tomo la edad  

	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;


	if(edad>=18 && estadoCivil == "Soltero"){
		

		alert("Es soltero y no es menor");
	

	}
	

/*let a = 10
let b = 10
let c = 30

if(a<=b && a<=c){ alert("A es menor")

}
else if (b<=a && b<=c){ alert("b es menor")

}
else {alert ("c es menor")} */



}//FIN DE LA FUNCIÓN