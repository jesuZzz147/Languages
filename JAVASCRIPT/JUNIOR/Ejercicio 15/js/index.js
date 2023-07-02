/* --------------------
------- Cofla 3 -------
-------------------- */

function inscripcion() {
  let materia = 0;
  let a = 0;
  let inscritas = [
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
    "No",
  ];
  let materiaLlena = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  do {
    let inscritosRandom = Math.random() * 35;
    let inscritos = Math.floor(inscritosRandom);

    materia = prompt(`    1 - Álgebra y Geometría Analítica
    2 - Análisis Matemático I
    3 - Matemática Discreta
    4 - Algoritmos y Estructura de Datos
    5 - Arquitectura de Computadoras
    6 - Sistemas y Organizaciones
    7 - Química
    8 - Ingeniería y Sociedad
    9 - Análisis de Sistemas
    10 - Sistemas de Representación
    11 - Análisis Matemático II
    12 - Sintaxis y Semántica de los Lenguajes
    13 - Física I
    14 - Paradigmas de Programación
    15 - Inglés I
    16 - Probabilidad y Estadística
    
Escoja el numero de la materia a la cual se va inscribir(Max. 8), para dejar de escoger ingrese "X": `);

    if (materia >= 1 && materia <= 16) {
      switch (true) {
        case materia == 1:
          if (inscritos < 20 && materiaLlena[0] == 0 && inscritas[0] == "No") {
            inscritas[0] = "Inscrito";
            a++;
          } else if (inscritas[0] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[0] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 2:
          if (inscritos < 20 && materiaLlena[1] == 0 && inscritas[1] == "No") {
            inscritas[1] = "Inscrito";
            a++;
          } else if (inscritas[1] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[1] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 3:
          if (inscritos < 20 && materiaLlena[2] == 0 && inscritas[2] == "No") {
            inscritas[2] = "Inscrito";
            a++;
          } else if (inscritas[2] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[2] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 4:
          if (inscritos < 20 && materiaLlena[3] == 0 && inscritas[3] == "No") {
            inscritas[3] = "Inscrito";
            a++;
          } else if (inscritas[3] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[3] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 5:
          if (inscritos < 20 && materiaLlena[4] == 0 && inscritas[4] == "No") {
            inscritas[4] = "Inscrito";
            a++;
          } else if (inscritas[4] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[4] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 6:
          if (inscritos < 20 && materiaLlena[5] == 0 && inscritas[5] == "No") {
            inscritas[5] = "Inscrito";
            a++;
          } else if (inscritas[5] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[5] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 7:
          if (inscritos < 20 && materiaLlena[6] == 0 && inscritas[6] == "No") {
            inscritas[6] = "Inscrito";
            a++;
          } else if (inscritas[6] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[6] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 8:
          if (inscritos < 20 && materiaLlena[7] == 0 && inscritas[7] == "No") {
            inscritas[7] = "Inscrito";
            a++;
          } else if (inscritas[7] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[7] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 9:
          if (inscritos < 20 && materiaLlena[8] == 0 && inscritas[8] == "No") {
            inscritas[8] = "Inscrito";
            a++;
          } else if (inscritas[8] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[8] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 10:
          if (inscritos < 20 && materiaLlena[9] == 0 && inscritas[9] == "No") {
            inscritas[9] = "Inscrito";
            a++;
          } else if (inscritas[9] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[9] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 11:
          if (
            inscritos < 20 &&
            materiaLlena[10] == 0 &&
            inscritas[10] == "No"
          ) {
            inscritas[10] = "Inscrito";
            a++;
          } else if (inscritas[10] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[10] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 12:
          if (
            inscritos < 20 &&
            materiaLlena[11] == 0 &&
            inscritas[11] == "No"
          ) {
            inscritas[11] = "Inscrito";
            a++;
          } else if (inscritas[11] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[11] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 13:
          if (
            inscritos < 20 &&
            materiaLlena[12] == 0 &&
            inscritas[12] == "No"
          ) {
            inscritas[12] = "Inscrito";
            a++;
          } else if (inscritas[12] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[12] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 14:
          if (
            inscritos < 20 &&
            materiaLlena[13] == 0 &&
            inscritas[13] == "No"
          ) {
            inscritas[13] = "Inscrito";
            a++;
          } else if (inscritas[13] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[13] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 15:
          if (
            inscritos < 20 &&
            materiaLlena[14] == 0 &&
            inscritas[14] == "No"
          ) {
            inscritas[14] = "Inscrito";
            a++;
          } else if (inscritas[14] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[14] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        case materia == 16:
          if (
            inscritos < 20 &&
            materiaLlena[15] == 0 &&
            inscritas[15] == "No"
          ) {
            inscritas[15] = "Inscrito";
            a++;
          } else if (inscritas[15] == "Inscrito") {
            alert(`Ya te inscribiste en esta materia xD`);
          } else {
            materiaLlena[15] = 1;
            alert(`Lo siento esta materia ya esta llena :c`);
          }
          break;

        default:
          alert(`WTF`);
          break;
      }
    } else if (materia == "X" || materia == "x") {
      alert(`Gracias por usar :D`);
      a = 8;
    } else {
      alert(`Si desea salir ingrese "X"`);
    }
  } while (a < 8);

  return inscritas;
}

function peticionLista(materia) {
  let personas = ``;
  switch (true) {
    case materia == 1:
      personas = `   --Álgebra y Geometría Analítica--
 Profesor: Nombre Apellido
 Alumnos:
    Nombre Apellido
    Nombre Apellido
    Nombre Apellido
    Nombre Apellido
    Nombre Apellido`;
      alert(personas);
      break;
    case materia == 2:
      personas = `   --Análisis Matemático I--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 3:
      personas = `   --Matemática Discreta--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 4:
      personas = `   --Algoritmos y Estructura de Datos--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 5:
      personas = `   --Arquitectura de Computadoras--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 6:
      personas = `   --Sistemas y Organizaciones--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 7:
      personas = `   --Química--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 8:
      personas = `   --Ingeniería y Sociedad--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 9:
      personas = `   --Análisis de Sistemas--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 10:
      personas = `   --Sistemas de Representación--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 11:
      personas = `   --Análisis Matemático II--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 12:
      personas = `   --Sintaxis y Semántica de los Lenguajes--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 13:
      personas = `   --Física I--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 14:
      personas = `   --Paradigmas de Programación--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 15:
      personas = `   --Inglés I--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;
    case materia == 16:
      personas = `   --Probabilidad y Estadística--
   Profesor: Nombre Apellido
   Alumnos:
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido
      Nombre Apellido`;
      alert(personas);
      break;

    default:
      alert(`No se escogio ninguna materia`);
      break;
  }
}

function peticionCantidad(materias) {
  alert(`Materias en la que Cofla esta inscrito:

    Álgebra y Geometría Analítica: ${materias[0]}
    Análisis Matemático I: ${materias[1]}
    Matemática Discreta: ${materias[2]}
    Algoritmos y Estructura de Datos: ${materias[3]}
    Arquitectura de Computadoras: ${materias[4]}
    Sistemas y Organizaciones: ${materias[5]}
    Química: ${materias[6]}
    Ingeniería y Sociedad: ${materias[7]}
    Análisis de Sistemas: ${materias[8]}
    Sistemas de Representación: ${materias[9]}
    Análisis Matemático II: ${materias[10]}
    Sintaxis y Semántica de los Lenguajes: ${materias[11]}
    Física I: ${materias[12]}
    Paradigmas de Programación: ${materias[13]}
    Inglés I: ${materias[14]}
    Probabilidad y Estadística: ${materias[15]}`);
}

let inscritas = inscripcion();

peticionLista(
  prompt(`Escoja el numero de la materia a mostrar: 

    1 - Álgebra y Geometría Analítica
    2 - Análisis Matemático I
    3 - Matemática Discreta
    4 - Algoritmos y Estructura de Datos
    5 - Arquitectura de Computadoras
    6 - Sistemas y Organizaciones
    7 - Química
    8 - Ingeniería y Sociedad
    9 - Análisis de Sistemas
    10 - Sistemas de Representación
    11 - Análisis Matemático II
    12 - Sintaxis y Semántica de los Lenguajes
    13 - Física I
    14 - Paradigmas de Programación
    15 - Inglés I
    16 - Probabilidad y Estadística
`)
);

peticionCantidad(inscritas);
