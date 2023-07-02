/* --------------------
----- METODOS DE ------
------ CADENAS --------
-------------------- */

let cadena = "Cadena de prueba, ";
let cadena2 = "Cadena 2";
let cadena3 = "prueba, ";
let cadena4 = "ena de prue";
let cadena5 = "pez";
let cadena6 = "ena";
let cadena7 = "pez";
let cadena8 = "ena";
let cadena9 = "Pez ";

let resultado = cadena.concat(cadena2 + "<br>");
let resultado2 = cadena.startsWith(cadena3 + "<br>");
let resultado3 = cadena.endsWith(cadena3);
let resultado4 = cadena.includes(cadena4);
let resultado5 = cadena.indexOf(cadena5);
let resultado6 = cadena.lastIndexOf(cadena6);
let resultado7 = cadena7.padStart(10, "1234");
let resultado8 = cadena8.padEnd(10, "abcd");
let resultado9 = cadena9.repeat(5);

document.write(
  resultado +
    "<br>" +
    resultado2 +
    "<br>" +
    resultado3 +
    "<br>" +
    resultado4 +
    "<br>" +
    resultado5 +
    "<br>" +
    resultado6 +
    "<br>" +
    resultado7 +
    "<br>" +
    resultado8 +
    "<br>" +
    resultado9 +
    "<br>"
);
