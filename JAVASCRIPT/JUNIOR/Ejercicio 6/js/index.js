/* --------------------
------- Bucles --------
-------------------- */

for (let i = 0; i < 20; i++) {
  if (i == 12) {
    continue;
  }

  document.write(i + "<br>");

  if (i == 17) {
    break;
  }
}

document.write("<br>");

/* ----------------- */

let motosMarcas = [" Yamaha", " Honda", " Kawasaki", "Ducati"];

for (marcas in motosMarcas) {
  document.write(motosMarcas[marcas] + "<br>");
}

document.write("<br>");

for (marcas of motosMarcas) {
  document.write(marcas + "<br>");
}

document.write("<br>");

/* ----------------- */

let frutas = [" Manzana", " Pera", " Cambur"];
let masFrutas = [" Fresa", " Tomate", frutas, " Naranja"];

forFrutitas:
for (let fruta in masFrutas) {
  if (fruta == 2) {
    for (let fruta of frutas) {
        continue forFrutitas;
        document.write(fruta + "<br>");
    }
  } else {
    document.write(masFrutas[fruta] + "<br>");
  }
}
