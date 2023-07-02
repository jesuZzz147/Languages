/* -----------------
------ Events ------
----------------- */
/* --- Del Mouse --- */

let button = document.querySelector(`.button`);
let container1 = document.querySelector(`.container-1`);
let container2 = document.querySelector(`.container-2`);

// button.addEventListener(`click`, saludar);

// function saludar() {
//   alert(`Hola :D`);
//   button.removeEventListener(`click`, saludar);
// }

// button.addEventListener(`click`, (e) => {
//   console.log(e.target);
// });

// container1.addEventListener(`click`, (e) => {
//   alert(`Click en el contenedor Azul`);
// });

// container2.addEventListener(
//   `click`,
//   (e) => {
//     alert(`Click en el contenedor Verde`);
//   },
//   true
// );

// button.addEventListener(`click`, (e) => {
//   alert(`Click en el boton`);
//   e.stopPropagation();
// });

/* --------------- */

// button.addEventListener(`dblclick`, (e) => {
//   alert(`Click en el boton`);
// });

// container1.addEventListener(`mouseout`, (e) => {
//   alert(`Click en el contenedor Azul`);
// });

// container2.addEventListener(`mouseover`, (e) => {
//   alert(`Click en el contenedor Verde`);
// });

/* --------------- */

let texto = document.querySelector(`.texto`);


texto.addEventListener(`keyup`, (e) => {
  console.log(`Una tecla fue soltada`);
});

texto.addEventListener(`keydown`, (e) => {
  console.log(`Una tecla fue presionada`);
});

texto.addEventListener(`keypress`, (e) => {
  console.log(`Un usuario presiono una tecla`);
});
