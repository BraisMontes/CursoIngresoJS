/*Fernandez Montes Brais
TP 03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let gradosFahrenheit;
    let centigrados; 
    

    gradosFahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    centigrados = (gradosFahrenheit - 32)*5/9;

    alert(gradosFahrenheit + " Fahrenheit son " + centigrados + " centigrados" );
    
}

function CentigradosFahrenheit () 
{
let gradosFahrenheit;
let centigrados;
let mensajeAMostrar;

centigrados = parseFloat(document.getElementById("txtIdTemperatura").value);

gradosFahrenheit = centigrados * 9 /5 + 32;

mensajeAMostrar = centigrados + " centigrados son " + gradosFahrenheit + " Fahrenheit";

alert(mensajeAMostrar);
}
