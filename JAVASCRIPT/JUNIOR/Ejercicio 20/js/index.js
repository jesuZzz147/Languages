/* --------------------
------ Elementos ------
-------------------- */

const titulo = document.querySelector(".titulo");
const texto = document.querySelector(".texto");

let resultado = titulo.textContent;
let resultado1 = titulo.innerHTML;
let resultado2 = titulo.outerHTML;

alert(resultado + `
` + resultado1 + `
` + resultado2);
