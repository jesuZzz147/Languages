/* --------------------
------- Cofla 2 -------
-------------------- */

/*
A) Un joven muy afortunado logro ganar la loteria; asi es el indigente al que
Cofla ayudo, ahora el noTanIndigente decide dar una fiesta para celebrar, y se
le ocurrio la idea de comprar una maquina para solo dejar pasar a los mayores
de 18 años, entre otras cosas.

Objetivos:
  
  Dejar pasar solo a los mayores de edad
  La primera persona que entre despues de las 2 AM, no paga.
*/

// function idAsk(edad, nombre, apellido) {
//   nombre = prompt(`Como se llama usted?`);
//   apellido = prompt(`Y su apellido es?`);
//   edad = prompt(`Perfecto, ${nombre} ${apellido} podria indicarme su edad?`);
//   if (edad < 18) {
//     alert(`Lo siento, ${nombre} no puedes pasar por ser menor`);
//     return false;
//   }
//   return true;
// }

// function hourCheck(hora) {
//   if (ask == true) {
//     hora = prompt(`-Hora de entrada: -`);
//     if (hora == 2 || hora == "2" || hora == "dos") {
//       alert(`Felicidades, puedes pasar gratis`);
//       return true;
//     } else {
//       alert(`El precio de las entradas es de $1.75 USD, gracias <3`);
//     }
//   }
// }

// alert(`Hola, Buenas noches, como le va? xdxd`);
// let ask = idAsk();
// hourCheck();

/* 
B) Crear un mini sistema para llevar asistencia

Objetivos:
  Registrar presentes (P) y ausentes (A).
  Registrar los 30 dias.
  Si tiene menos del 90% de asistencias, notificar.
*/

// function insertStudent(count) {
//   let student = [1,2,3];
//   let assist = [];
//   let a = "";
//   let days = 0;

//   for (let i = 0; i < count; i++) {
//     student.push(prompt(`Por favor ingrese los nombres de los estudiantes`));
//     assist.push(0);
//   }

//   days = prompt(`Por cuantos dias van a tomar asistencias?`);

//   for (let i = 0; i < days; i++) {
//     for (let i = 0; i < count; i++) {
//       a = prompt(
//         `El estudiante ${student[i]} vino a clases hoy?, Si estuvo presente en clases escriba P, si estuvo ausente escriba A`
//       );
//       if (a == "P" || a == "p") {
//         assist[i] += 1;
//       }
//     }
//   }

//   for (let i = 0; i < count; i++) {
//     assist[i] = 100 * (assist[i] / days);
//     if (assist[i] < 90) {
//       alert(
//         `El estudiante ${student[i]} tuvo menos del 90% de asistencias requerida para aprobar, ${assist[i]}% `
//       );
//     } else {
//       alert(
//         `El estudiante ${student[i]} cumplio las asistencias, ${assist[i]}% `
//       );
//     }
//   }
// }

// insertStudent(prompt(`Cuantos estudiantes hay en la clase?`));

/* 
C) Calculadora gooo brrrrr

Objetivos:
  Calcular cosas, siquesi
*/

function sumar() {
  let amount = 0;
  let numbers = [];

  for (let i = 0; i <= amount; i++) {
    numbers.push(
      prompt(
        `Ingrese los numerosa operar, gracias, para salir presione cualquier caracter: `
      )
    );
    amount++;
    if (numbers[i] <= 0 || numbers[i] >= 0) {
      continue;
    } else {
      amount--;
    }
  }

  numbers.pop();
  alert(numbers);
  let result1 = parseInt(numbers[0]);

  for (let i = 0; i < amount - 1; i++) {
    result1 += parseInt(numbers[i + 1]);
  }

  alert(`El resultado de la operacion es: ${result1}`);
}

function resta() {
  let amount = 0;
  let numbers = [];

  for (let i = 0; i <= amount; i++) {
    numbers.push(
      prompt(
        `Ingrese los numerosa operar, gracias, para salir presione cualquier caracter: `
      )
    );
    amount++;
    if (numbers[i] <= 0 || numbers[i] >= 0) {
      continue;
    } else {
      amount--;
    }
  }

  numbers.pop();
  alert(numbers);
  let result1 = parseInt(numbers[0]);

  for (let i = 0; i < amount - 1; i++) {
    result1 -= parseInt(numbers[i + 1]);
  }

  alert(`El resultado de la operacion es: ${result1}`);
}

function multiplicacion() {
  let amount = 0;
  let numbers = [];

  for (let i = 0; i <= amount; i++) {
    numbers.push(
      prompt(
        `Ingrese los numerosa operar, gracias, para salir presione cualquier caracter: `
      )
    );
    amount++;
    if (numbers[i] <= 0 || numbers[i] >= 0) {
      continue;
    } else {
      amount--;
    }
  }

  numbers.pop();
  alert(numbers);
  let result1 = parseInt(numbers[0]);

  for (let i = 0; i < amount - 1; i++) {
    result1 *= parseInt(numbers[i + 1]);
  }

  alert(`El resultado de la operacion es: ${result1}`);
}

function division() {
  let amount = 0;
  let numbers = [];

  for (let i = 0; i <= amount; i++) {
    numbers.push(
      prompt(
        `Ingrese los numerosa operar, gracias, para salir presione cualquier caracter: `
      )
    );
    amount++;
    if (numbers[i] <= 0 || numbers[i] >= 0) {
      continue;
    } else {
      amount--;
    }
  }

  numbers.pop();
  alert(numbers);
  let result1 = parseInt(numbers[0]);
  let result2 = parseInt(numbers[0]);
  let result = [0, 0];

  for (let i = 0; i < amount - 1; i++) {
    result1 /= numbers[i + 1];
    result2 %= numbers[i + 1];
  }

  result[0] = result1;
  result[1] = result2;

  alert(`El resultado de la division es: ${result[0]}`);
  alert(`El resto de la division es: ${result[1]}`);
}

function potencia() {
  let amount = 0;
  let numbers = [];
  let exponente = [];
  let result = [];

  for (let i = 0; i <= amount; i++) {
    numbers.push(
      prompt(
        `Ingrese los numerosa operar, gracias, para salir presione cualquier caracter: `
      )
    );
    amount++;
    if (numbers[i] <= 0 || numbers[i] >= 0) {
      exponente.push(
        prompt(`Ingrese el exponente al que quiere elevar el numero: `)
      );
      result.push(1);
      continue;
    } else {
      amount--;
    }
  }

  numbers.pop();
  alert(numbers);
  alert(exponente);
  alert(result);

  for (let i = 0; i < amount; i++) {
    for (let e = 0; e < exponente[i]; e++) {
      result[i] *= numbers[i];
      alert(result[i]);
    }
  }

  alert(`El resultado de la exponenciacion es: ${result}`);
}

function raizCuadrada() {
  let amount = 0;
  let numbers = [];

  for (let i = 0; i <= amount; i++) {
    numbers.push(
      prompt(
        `Ingrese los numeros a los que se les vaya a sacar la raiz cuadrada, para terminar de ingresar presione cualquier caracter: `
      )
    );
    amount++;
    if (numbers[i] <= 0 || numbers[i] >= 0) {
      continue;
    } else {
      amount--;
    }
  }

  numbers.pop();
  alert(numbers);
  let result1 = [];

  for (let i = 0; i < amount; i++) {
    result1[i] = Math.sqrt(numbers[i]);
  }

  alert(`La raiz cuadrada de los numeros ingresados es: ${result1}`);
}

function raizCubica() {
  let amount = 0;
  let numbers = [];

  for (let i = 0; i <= amount; i++) {
    numbers.push(
      prompt(
        `Ingrese los numeros a los que se les vaya a sacar la raiz cubica, para terminar de ingresar presione cualquier caracter: `
      )
    );
    amount++;
    if (numbers[i] <= 0 || numbers[i] >= 0) {
      continue;
    } else {
      amount--;
    }
  }

  numbers.pop();
  alert(numbers);
  let result1 = [];

  for (let i = 0; i < amount; i++) {
    result1[i] = Math.cbrt(numbers[i]);
  }

  alert(`La raiz cubica de los numeros ingresados es: ${result1}`);
}

function calculator() {
  do {
    operacion = prompt(`Escriba el numero de la operacion que desea realizar: 
  1 - Suma
  2 - Resta
  3 - Multiplicación
  4 - División
  5 - Potenciación
  6 - Raiz Cuadrada
  7 - Raiz Cubica

  Presione cualquier otro digito para salir.`);

    switch (true) {
      case operacion == 1:
        sumar();
        break;

      case operacion == 2:
        resta();
        break;

      case operacion == 3:
        multiplicacion();
        break;

      case operacion == 4:
        division();
        break;

      case operacion == 5:
        potencia();
        break;

      case operacion == 6:
        raizCuadrada();
        break;

      case operacion == 7:
        raizCubica();
        break;

      default:
        alert(`-- Gracias por usarme UwU --`);
        break;
    }
  } while (
    operacion == 1 ||
    operacion == 2 ||
    operacion == 3 ||
    operacion == 4 ||
    operacion == 5 ||
    operacion == 6 ||
    operacion == 7
  );
}

calculator();