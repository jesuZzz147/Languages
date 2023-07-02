/* --------------------
----- OPERADORES ------
-------------------- */

/* Logicos */

let numero1 = 25;
let numero2 = 10;
let texto1 = "Hola ";
let texto2 = "25";

document.write(numero1 == numero2);
document.write(texto2 == numero1);
document.write(numero1 === texto2);
document.write(texto1 != texto2);
document.write(texto2 !== numero1);
document.write(numero1 >= numero2);
document.write(numero1 <= numero2);

let valor1 = true;
let valor2 = false;
let valor3 = true;

let resultado1 = valor1 && valor2;

let resultado2 = valor1 && valor3;

let resultado3 = valor1 || valor2;

let resultado4 = !valor1;

alert(resultado1);
alert(resultado2);
alert(resultado3);
alert(resultado4);



