/* --------------------
----- Seleccion -------
---- de Elementos -----
-------------------- */

// className, value, type, accept, form, milength, placeholder, required.

const input = document.querySelector(".input-normal");

input.maxLength = 15;
input.required = " ";
input.type = "text";
document.write(input.type + "<br>" + input.placeholder);

input.style.backgroundColor = "#8F8";
input.style.padding = "1rem";
input.style.borderRadius = "1.5rem";
input.style.border = "2px solid #000";

input.classList.add("button");
// input.classList.remove("input-normal");
let hola = input.classList.item("0");
input.classList.contains("input-normal", true);
input.classList.toggle("input-normal");
input.classList.replace("button","hola");

document.write("<br>" + hola);
