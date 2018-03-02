//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numUno;
    var numDos;
    var resultado;

    numUno=parseInt(prompt("Ingresar primer numero"));
    numDos=parseInt(prompt("Ingresar segundo numero"));
    
    if(numUno==numDos)
    {   
        numUno=String(numUno);
        numDos=String(numDos);
        resultado=numUno+numDos;
    }
    else if(numUno>numDos)
    {
        resultado=numUno-numDos;
    }
    else
    {
        resultado=numUno+numDos;
    }

    document.write("Numero 1: "+numUno+"<br>Numero 2: "+numDos+"<br>Resultado: "+resultado);
}

