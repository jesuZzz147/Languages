/* --------------------
------- Cofla 3 -------
-------------------- */
/* 

*/
class telefonos {
  constructor(modelo, camara, color, peso, tamañoRam, resPantalla) {
    this.modelo = modelo;
    this.camara = camara;
    this.color = color;
    this.peso = peso;
    this.tamañoRam = tamañoRam;
    this.resPantalla = resPantalla;
    this.info = `Caracteristicas de ${modelo}: <br>
      Camara de ${camara}MP. <br>
      Color: ${color}. <br>
      Pesa ${peso}g. <br>
      Ram de ${tamañoRam}Gb. <br>
      Resolucion de ${resPantalla}. <br>`;
  }

  verInfo() {
    document.write(this.info + "<br>");
  }

  encender() {
    alert(`El modelo ` + this.modelo + ` enciende perfectamente`);
  }

  reiniciar() {
    alert(`El modelo ` + this.modelo + ` se reinicia bastante rapido`);
  }

  tomarFotos() {
    alert(
      `El modelo ` +
        this.modelo +
        ` toma buenas fotos, la camara de ` +
        this.camara +
        `MP, funciona muy bien`
    );
  }

  grabar() {
    alert(
      `El modelo ` +
        this.modelo +
        ` graba buenos videos, la camara de ` +
        this.camara +
        `MP, funciona muy bien`
    );
  }
}

class altaGama extends telefonos {
  constructor(
    modelo,
    camara,
    color,
    peso,
    tamañoRam,
    resPantalla,
    camaraExtra
  ) {
    super(modelo, camara, color, peso, tamañoRam, resPantalla);
    this.camaraExtra = camaraExtra;
  }

  recoFacial() {
    alert(
      `El modelo ` +
        this.modelo +
        `, su reconocimiento facial es bastate rapido`
    );
  }

  grabaLenta() {
    alert(
      `El modelo ` +
        this.modelo +
        ` graba buenos videos, la camara lenta de ` +
        this.camara +
        `MP, funciona muy bien`
    );
  }
}

const motorolaOne = new telefonos(
  "Motorola One",
  15,
  "Azul",
  250,
  8,
  "390x844"
);
const nokiaP20 = new telefonos("Nokia P20", 5, "Negro", 165, 2, "375x667");
const iphone10 = new telefonos("Iphone 10", 30, "Blanco", 225, 12, "412x915");

const samsumgS50 = new altaGama(
  "Samsumg S50",
  60,
  "Azul Electrico",
  245,
  28,
  "390x868",
  15
);
const iphone20 = new altaGama(
  "Iphone 20",
  50,
  "Rosa Kirby",
  215,
  24,
  "370x915",
  25
);

// motorolaOne.encender();
// nokiaP20.reiniciar();
// iphone10.grabar();
// iphone10.tomarFotos();

// iphone20.grabaLenta();
// samsumgS50.recoFacial();

// motorolaOne.verInfo();
// nokiaP20.verInfo();
// iphone10.verInfo();

// samsumgS50.verInfo();
// iphone20.verInfo();

class aplicaciones {
  constructor(nombre, cantDescargas, puntuacion, tamaño) {
    this.nombre = nombre;
    this.cantDescargas = cantDescargas;
    this.puntuacion = puntuacion;
    this.tamaño = tamaño;
    this.info = `<b>Caracteristicas</b> de <b>${nombre}</b>: <br>
      <b>Descargas:</b> ${cantDescargas}. <br>
      <b>Puntuación:</b> ${puntuacion}/10. <br>
      <b>Pesa:</b> ${tamaño}Gb. <br>`;
  }

  verInfo() {
    document.write(this.info + "<br>");
  }

  instalar() {
    alert(`La app ` + this.nombre + ` se instalo perfectamente`);
  }

  abrir() {
    alert(`La app ` + this.nombre + ` se abrio bastante rapido`);
  }

  cerrar() {
    alert(`La app ` + this.nombre + ` se cerro con normalidad`);
  }

  desinstalar() {
    alert(`La app ` + this.nombre + ` se desisntalo sin problemas`);
  }
}

const brawlStars = new aplicaciones("BrawlStars", 1000000, 7, 0.256);
const lolsito = new aplicaciones("Lolsito", 7500000, 8.5, 4.75);
const clashRoyale = new aplicaciones("ClashRoyale", 2500000, 7.75, 0.452);
const youTube = new aplicaciones("YouTube", 240000000, 9, 0.756);
const twitch = new aplicaciones("Twitch", 40000000, 8.75, 0.512);

brawlStars.verInfo();
lolsito.verInfo();
clashRoyale.verInfo();
youTube.verInfo();
twitch.verInfo();

lolsito.instalar();
lolsito.abrir();
lolsito.cerrar();
lolsito.desinstalar();
