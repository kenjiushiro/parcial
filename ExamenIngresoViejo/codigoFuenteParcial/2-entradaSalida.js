//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    importe=parseFloat(prompt("Ingresar importe"));
    document.getElementById("importe").value=importe*1.21;
}

