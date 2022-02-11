/*Fernandez Montes Brais
Ejercicio 10 IF*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numeroRandom;
	let maximo = 10;
	let minimo = 1;
	
	
	

	numeroRandom = Math.round(Math.random() * (maximo - minimo) + minimo);

	if(numeroRandom >=9){alert(numeroRandom + " EXCELENTE!")}
	else if(numeroRandom>=4){alert(numeroRandom + " APROBO")}
	else{ alert(numeroRandom + " Vamos, la proxima se puede")}
	



}//FIN DE LA FUNCIÓN