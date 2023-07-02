/* --------------------
----- OPERADORES ------
-------------------- */

/* De Asignacion */

let numero1 = 10;
let numero2 = 10;
let numero3 = 10;
let numero4 = 10;
let numero5 = 10;
let numero6 = 10;

numero1 += 5
numero2 -= 5
numero3 *= 5
numero4 /= 5
numero5 %= 4
numero6 **= 3

document.write(" " + numero1)
document.write(" " + numero2)
document.write(" " + numero3)
document.write(" " + numero4)
document.write(" " + numero5)
document.write(" " + numero6)

/* Aritmeticos */

let numero = numero1 + numero2;
numero5 = numero - numero5;
numero1--;
numero2++;
numero6 = -numero6;

alert(numero);
alert(numero5);
alert(numero1);
alert(numero2);
alert(numero6);

/* --------------------
--- CONCATENACION -----
-------------------- */

let nombre = "Jesus";
let saludo = "¡Hola Mundo! ";
let pregunta = "¿Como estas?";

frase = saludo + pregunta

alert(frase)

frase = "" + numero1 + numero2

alert(frase)

frase = saludo.concat(numero1)

alert(frase)

frase = `Hola ${nombre} ` + pregunta;

alert(frase);

