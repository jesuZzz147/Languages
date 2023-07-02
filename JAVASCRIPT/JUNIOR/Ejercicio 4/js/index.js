/* --------------------
------- Cofla 1 -------
-------------------- */

/* 
A) 3 Chicos de 23 años perfectamente normales entran a una heladeria a 
comprar, pero hay un problema, los precios no estan al lado de cada estante 
con su respectivo helado.
Ellos quieren comprar el helado mas caro que puedan con la plata que tienen.
Asi que vamos a ayudarlos.

Roberto tiene $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD

Los precios de helados son los siguientes:

    Palito de helado de agua: $0.6 USD
    Palito de helado de crema: $1 USD
    Bombon helado marca heladix: $1.6 USD
    Bombon helado marca heladovich: $1.7 USD
    Bombon helado marca helardo: $1.8 USD
    Potecito de helado con confites: $2.9 USD
    Pote de 1/4 Kg : 2.9 USD

Soluciones: 

    - Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro
    que pueden comprar.
    - Si hay 2 o mas con el mismo precio, mostrar ambos.
    - Cofla quiere saber cuanto es el vuelto
    */

let comprador = prompt(`Buenas, ¿Cual es tu nombre?`);
let montoDisponible = prompt(`Perfecto, y cuanto dinero tienes disponible?`);
let resto = 0;

switch (true) {
  case montoDisponible >= 2.9:
    resto = montoDisponible - 2.9;
    alert(`Perfecto ${comprador}, puedes comprar lo siguiente: 
    
    Potecito de helado con confites: $2.9 USD
    Pote de 1/4 Kg : 2.9 USD
    
    Si compras tu vuelto seria ${resto}`);
    break;

  case montoDisponible >= 1.8:
    resto = montoDisponible - 1.8;
    alert(`Perfecto ${comprador}, puedes comprar lo siguiente: 
    
    Bombon helado marca helardo: $1.8 USD
    
    Si compras tu vuelto seria ${resto}`);
    break;

  case montoDisponible >= 1.7:
    resto = montoDisponible - 1.7;
    alert(`Perfecto ${comprador}, puedes comprar lo siguiente: 
    
    Bombon helado marca heladovich: $1.7 USD
    
    Si compras tu vuelto seria ${resto}`);
    break;

  case montoDisponible >= 1.6:
    resto = montoDisponible - 1.6;
    alert(`Perfecto ${comprador}, puedes comprar lo siguiente: 
    
    Bombon helado marca heladix: $1.6 USD

    Si compras tu vuelto seria ${resto}`);
    break;

  case montoDisponible >= 1:
    resto = montoDisponible - 1;
    alert(`Perfecto ${comprador}, puedes comprar lo siguiente: 
    
    Palito de helado de crema: $1 USD

    Si compras tu vuelto seria ${resto}`);
    break;

  case montoDisponible >= 0.6:
    resto = montoDisponible - 0.6;
    alert(`Perfecto ${comprador}, puedes comprar lo siguiente: 
    
    Palito de helado de agua: $0.6 USD

    Si compras tu vuelto seria ${resto}`);
    break;

  default:
    alert(`Lo siento no tienes suficiente dinero :c`);
}

/* 
B) Hay un indigente Afuera de a heladeria, y Cofla decide regalarle
el resto del dinero que sobro de la heladeria.
El Indigente al ver esto se pone feliz y decide comprar un ticket de
loteria.
El precio de cada ticket es de $0.35 USD

Objetivos:
  Si le alcanza para 1, que compre 1.
  Si le alcanza para 2, que compre 2.
  Pero si le alcanza para 3, que compre 3, y que regale el vuelto a otro indigente.
  Debe mostrar en pantalla que compro y el vuelto.
  */

let indigente = 0;

if (resto > 0) {
  alert(`Mira un indigente -le da el vuelto-`);
  indigente = resto;
  alert(`-El indigente va e intenta comprar un ticket de loteria-`);
} else {
  alert(`Se jodio el indigente`);
}

switch (true) {
  case indigente >= 1.05:
    resto = indigente - 1.05;
    alert(`Compraste 3 tickets de loteria, felicidades.
    Tu vuelto es de ${resto}.`);
    break;

  case indigente >= 0.7:
    resto = indigente - 0.7;
    alert(`Compraste 2 tickets de loteria, felicidades.
    Tu vuelto es de ${resto}.`);
    break;

  case indigente >= 0.35:
    resto = indigente - 0.35;
    alert(`Compraste 1 tickets de loteria, felicidades.
    Tu vuelto es de ${resto}.`);
    break;

  default:
    alert(`Lo siento no tienes suficiente dinero :c`);
    break;
}

/*
C) Basicamente hubo asesinato, y cofla esta de sospechoso porque fue cerca
de la heladeria (Que bolas), y bueno lo en unos instantes lo van a llevar 
a hacer una prueba de deteccion de mentiras(aka Poligrafo) con la maquina
mas precisa del mundo mundial, y bueno.

Objetivos:
  Si miente, que le de una descarga.
  Si no miente, que prenda una luz verde.
  Si el aparato no se decide, que reformulen la pregunta de manera mas conciza.
*/

let i = 0;

while (i == 0) {
  let respuesta = prompt(`Cofla, estas mintiendo?`);

  if ((respuesta == "Si") || (respuesta == "si")) {
    alert(`-Se enciende una luz verde-`);
    i++;
  } else if ((respuesta == "No") || (respuesta == "no")) {
    alert(`-Se electrocuta a Cofla-`);
    i++;
  } else {
    alert(`Responda bien putito, si o no? >:v`);
  }
}
