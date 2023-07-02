/* --------------------
----- METODOS DE ------
------- ARRAYS --------
-------------------- */

/* Transformadores */

let array = ["Hola", " Que", " Pasa", " Chavales", " XD", " XD"];
let array2 = ["Hola", " Que", " Pasa", " Chavales", " XD", " XD"];
let array3 = ["Hola", " Que", " Pasa", " Chavales", " XD", " XD"];
let array4 = ["Hola", " Que", " Pasa", " Chavales", " XD", " XD"];
let array5 = [" Hola", " Que", " Pasa", " Chavales", " XD", " XD"];
let array6 = ["Hola", "Que", "Pasa", "Chavales", "XD", "XD"];
let array7 = ["Hola", "Que", "Pasa", "Chavales", "XD", "XD"];
let array8 = ["Hola", " Que", " Pasa", " Chavales", " XD", " XD"];
let array9 = ["Hola", " Que", " Pasa", " Chavales", " XD", " XD"];

let resultado = array.pop();
let resultado2 = array2.shift();
let resultado3 = array3.push(":D");
let resultado4 = array3;
array4.reverse();
let resultado5 = array5.unshift(" 1", " 2", " 3");
let resultado6 = array6.sort();
array7.splice(1, 2);
array8.splice(-1, 1, "XD", "Ja weno", "Papus");

document.write(
  resultado +
    "<br>" +
    resultado2 +
    "<br>" +
    resultado3 +
    "<br>" +
    resultado4 +
    "<br>" +
    array4 +
    "<br>" +
    resultado5 +
    "<br>" +
    array5 +
    "<br>" +
    resultado6 +
    "<br>" +
    array7 +
    "<br>" +
    array8 +
    "<br>"
);
