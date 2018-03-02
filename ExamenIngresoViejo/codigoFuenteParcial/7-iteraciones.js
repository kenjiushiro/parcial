//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var varon=0;
    var sexo;
    var nota;
    var menor=10;
    var acum=0;
    for(var i=1;i<=6;i++)
    {
        do
        {
            nota=parseInt(prompt("Ingresar nota "+i));
        }
        while(nota>10 | nota<0)

        do
        { 
            sexo=prompt("Ingresar sexo (m o f) "+i);
        }
        while(sexo!='m' && sexo!='f')
        
        if(sexo='m' && nota>=6)
        {
            varon++;
        }
        
        if(nota<menor)
        {
            menor=nota;
        }
        acum=acum+nota;
    }
	alert("El promedio de las notas es "+acum/6+", la nota mas baja fue "+menor+" y "+varon+" varones aprobaron con 6 o mas");
}

