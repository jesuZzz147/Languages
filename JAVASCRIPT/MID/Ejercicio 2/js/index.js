/* -----------------
------ window ------
------------------*/

const screen = window.screen;
const screenLeft = window.screenLeft; //Son propiedades de
const screenTop = window.screenTop; //lectura solamente

console.log(screen);
console.log(screenLeft);
console.log(screenTop);
document.write(`<br>` + screen.availHeight);
document.write(`<br>` + screenLeft);
document.write(`<br>` + screenTop);

const scrollX = window.scrollX;
const scrollY = window.scrollY;

alert(scrollX);
alert(scrollY);

// window.resizeBy();
// window.resizeTo();
// window.moveBy();
// window.moveTo();

// objetos barprop
//  locationbar
//  menubar         window.locationbar.visible
//  personalbar
//  scrollbar
//  statusbar
//  toolbar
// 

// location
// window.location.href
// window.location.hostname
// window.location.pathname
// window.location.protocol
// window.location.assing()