//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var importe = 0;
    var mayor;
    var menor;
    var primero = true;


    for (var i = 1; i <= 7; i++) {
        do {
            importe = parseInt(prompt("Ingresar importe dia " + i));
        } while (importe <= 0)

        if (primero) {
            mayor = importe;
            menor = importe;
            primero = false;
        }
        if (importe > mayor) {
            mayor = importe;
        }
        if (importe < menor) {
            menor = importe;
        }


    }


    alert("El mayor importe de venta fue $" + mayor + " y el menor fue $" + menor);
}

