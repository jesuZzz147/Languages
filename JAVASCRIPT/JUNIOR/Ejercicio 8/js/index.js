/* --------------------
---- OPP (Objects) ----
-------------------- */

class fruta {
  constructor(especie, color, tamaño) {
    this.especie = especie;
    this.color = color;
    this.tamaño = tamaño;
    this.info = `Soy un(a) ${especie}, soy de color ${color} y peso ${tamaño}Kg`;
  }

  verInfo() {
    document.write(this.info + "<br>");
  }
}

class Cambur extends fruta  {
  constructor(especie, color, tamaño, unidades) {
    super(especie, color, tamaño);
    this.unidades = null;
  }

  set setUnidades(cantidad) {
    this.unidades = cantidad;
  }

  get getUnidades() {
    return this.unidades;
  }
}

const cambur = new Cambur("Cambur", "Amarillo", 0.125);
const manzana = new fruta("Manzana", "Rojo", 0.125);
const fresa = new fruta("Fresa", "Rojo", 0.05);

cambur.verInfo();
manzana.verInfo();
fresa.verInfo();

cambur.setUnidades = 10;

document.write(cambur.getUnidades)