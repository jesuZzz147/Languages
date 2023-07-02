/* --------------------
----- METODOS DE ------
------- ARRAYS --------
-------------------- */

/* Accesores */

let array = ["Hola", "Que", "Pasa", "Chavales", "XD", "XD"];
let texto = null;

let resultado = array;
let resultado2 = array.join(" - ");
let resultado3 = array.join("<br>element: ");
let resultado4 = array.slice(1, 3);
let resultado5 = array.includes("XD");
let resultado6 = array.indexOf("Chavales");
let resultado7 = array.lastIndexOf("XD");

document.write(
  resultado +
    "<br>" +
    "<br>" +
    resultado2 +
    "<br>" +
    ("element: " + resultado3) +
    "<br>" +
    resultado4 +
    "<br>" +
    resultado5 +
    "<br>" +
    resultado6 +
    "<br>" +
    resultado7 +
    "<br><br><br>"
);

/* De Repeticion */

array.forEach(function (texto) {
  document.write(texto + "<br>");
});

document.write("<br><br>")

array.filter(function (texto) {
  if (texto.length > 3) {
    document.write(texto + "<br>");
  }
});
