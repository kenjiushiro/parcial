//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var mes;
    mes = prompt("Ingresar un mes del año");
    mes=mes.toLowerCase();
    switch (mes) 
    {
        case "enero":
        case "febrero":
            alert("Veranito!!");
            break;

        default:
            alert("Extraño enero y febrero");

    }
}

