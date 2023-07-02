/* --------------------
----- METODOS DE ------
----- CADENAS 2 -------
-------------------- */

let cadena = "Cadena De Prueba";
let cadena2 = "ABCDEFGH";
let cadena3 = 456;
let cadena4 = "   Cadena    ";
let cadena5 = "   Cadena    ";
let cadena6 = "   Cadena    ";
let cadena7 = "   Cadena    ";
let cadena8 = "ena";
let cadena9 = "Pez ";

let resultado = cadena.split(" ");
let resultado2 = cadena2.substring(2, 4);
let resultado3 = cadena.toLowerCase();
let resultado4 = cadena.toUpperCase();
let resultado5 = cadena3.toString();
let resultado6 = cadena4.length;
let resultado7 = cadena5.trim();
let resultado8 = cadena6.trimEnd();
let resultado9 = cadena7.trimStart();

document.write(
  resultado +
    "<br>" +
    resultado2 +
    "<br>" +
    resultado3 +
    "<br>" +
    resultado4 +
    "<br>" +
    (resultado5 + 5) +
    "<br>" +
    resultado6 +
    "<br>" +
    resultado7.length +
    "<br>" +
    resultado8.length +
    "<br>" +
    resultado9.length +
    "<br>"
);
