/* --------------------
------- Cofla 5 -------
-------------------- */

function aprobadas() {
  let asistencias = 0;
  let promedio = 0;
  let trabajos = 0;
  let a = 0;

  do {
    a = 0;
    asistencias = prompt(
      `Cual fue tu porcenjate de asistencia? (Del 1 al 100)`
    );
    if (asistencias >= 1 && asistencias <= 100) {
      a++;
    } else {
      alert(`Por favor, ingrese un numero en el rango especificado`);
    }
  } while (a == 0);

  do {
    a = 0;
    promedio = prompt(`Cual fue tu promedio en esta materia? (Del 1 al 10)`);
    if (promedio >= 1 && promedio <= 10) {
      a++;
    } else {
      alert(`Por favor, ingrese un numero en el rango especificado`);
    }
  } while (a == 0);

  do {
    a = 0;
    trabajos = prompt(
      `Cual fue tu porcenjate de entrega de trabajos practicos? (Del 1 al 100)`
    );
    if (trabajos >= 1 && trabajos <= 100) {
      a++;
    } else {
      alert(`Por favor, ingrese un numero en el rango especificado`);
    }
  } while (a == 0);

  console.log(
    `%cTus numeros son: 
  Asistencia: ${asistencias}%
  Promedio: ${promedio}/10
  Cantidad de Trabajos: ${trabajos}%`,
    `background-color: black; padding: 20px 60px; color: white; border: 1px solid white`
  );

  if (
    asistencias >= 90 &&
    asistencias <= 100 &&
    promedio >= 7 &&
    promedio <= 10 &&
    trabajos >= 75 &&
    trabajos <= 100
  ) {
    console.log(`%cFelicidades, aprobaste la materia`,`background-color: black; padding: 20px 60px; color: lightblue; border: 1px solid lightblue`);
  } else {
    console.log(`%cLo siento, reprobaste la materia`,`background-color: black; padding: 20px 60px; color: red; border: 1px solid red`);
  }
}

aprobadas();
