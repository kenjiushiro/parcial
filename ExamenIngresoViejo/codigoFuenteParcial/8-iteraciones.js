//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{   var numero;
    var pares=0;
    var suma=0;
    var mayor;
    var menor;
    var primero=true;
    var respuesta='s';
    var contador=0;
    var promedio;

    while(respuesta=='s')
    {
        do
        {
        numero=parseInt(prompt("Ingresar numero "+contador));
        }while(numero<0)

        respuesta=prompt("Seguir ingresando numeros?",'s');
        if(numero%2==0)
        {
            pares++;
        }

        if(primero)
        {
            mayor=numero;
            menor=numero;
            primero=false;
        }

        if(numero>mayor)
        {
            mayor=numero;
        }

        if(numero<menor)
        {
            menor=numero;
        }
        suma=suma+numero;
        contador++;
    }

    promedio=suma/contador;
    document.write("a) Hubo "+pares+" numeros pares.<br>b) El promedio de los numeros ingresados es "+promedio+"<br>c) La suma de los numeros es "+suma+"<br>d) El maximo numero ingresado fue "+mayor+" y el minimo numero ingresado fue "+menor);
}

