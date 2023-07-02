/* --------------------
------- Arrays  -------
-------------------- */

let pc1 = {
  nombre: " JesusPC",
  procesador: " Intel Pentium",
  ram: " 8Gb",
  espacio: " 500Gb",
};

let pc2 = [" JesusPC", " Intel Pentium", " 8Gb", " 500Gb"];

alert(pc1["ram"]);

/* --------------------
------- Bucles  -------
-------------------- */

let numero = 0;

do {
  numero++;
  document.write(numero + "<br>");
  if (numero == 10) {
    break;
  }
} while (numero < 100);

document.write("Fin")
