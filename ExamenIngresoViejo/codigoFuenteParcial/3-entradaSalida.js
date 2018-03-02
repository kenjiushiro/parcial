//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho=parseFloat(document.getElementById("ancho").value);
    largo=parseFloat(document.getElementById("largo").value);

    perimetro=2*largo+2*ancho;
    alert("Se necesitan "+(6*perimetro)+" metros de alambre para cercar el terreno");
}

