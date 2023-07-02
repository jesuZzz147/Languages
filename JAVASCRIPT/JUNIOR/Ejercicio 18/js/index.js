/* --------------------
----- Seleccion -------
---- de Elementos -----
-------------------- */

let titulo = document.getElementsByTagName(`h1`);
let texto1 = document.getElementById(`parrafo`);
let texto2 = document.getElementsByTagName(`p`);
let texto3 = document.querySelector(`.texto`);
let texto4 = document.querySelectorAll(`.texto`);

document.write(
  texto1 +
    `<br>` +
    texto2 +
    `<br>` +
    texto3 +
    `<br>` +
    texto4 +
    `<br>` +
    texto2[1] +
    `<br>` +
    texto4[2] +
    `<br><br>`
);

const ranguito = document.querySelector(`.ranguito`);
const rango = document.querySelector(`.rango`);
const terminator = document.querySelector(`.terminator`);

ranguito.setAttribute(`type`, `range`);

document.write(ranguito + `<br>`);
document.write(rango.getAttribute(`type`) + `<br>`);
document.write(terminator.removeAttribute(`type`) + `<br>`);

titulo[0].setAttribute(`contentEditable`, `true`);
texto1.setAttribute(`dir`, `rlt`);
texto2[1].removeAttribute(`hidden`)