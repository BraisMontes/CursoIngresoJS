/*Fernandez Montes Brais
Ejercicio 09 Switch*/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	
	let estacion;
	let destino;
	let aumento=0;
	let descuento=0;
	const TARIFA = 15000; 
	let precioFinal;



	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	
	
	

	
	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
			aumento = 20;
		}
			else if (destino == "Mar del plata"){
			descuento = 20;
		}
			else{ 
			descuento = 10;
		}
			break;
		case "Verano":
			if(destino == "Bariloche"){
				descuento = 20;
			}
			else if (destino = "Mar del plata"){
				aumento = 20;
			}
			else{ 
				aumento = 10;
			}
			break;
		case "Otoño":
		case "Primavera":
			if(destino != "Cordoba"){
				aumento = 10;
			}
		
		break;
			
	}

	if(aumento != 0){
		precioFinal = TARIFA + TARIFA * aumento /100;
	}
	else if (descuento != 0){
		precioFinal = TARIFA - TARIFA * descuento/100;
	}
	else{ 
		precioFinal = TARIFA
	}
	alert ("El precio final es : "+ precioFinal);



			 
	
	
	

	
	
	

	
	
	
	

	

    

}//FIN DE LA FUNCIÓN