function menu() {
  let opt = 0;
  alert("Ingresa una de las siguientes opciones del menú.");

  do {
    opt = parseInt(prompt("1) Ingresar tarea\n2) Modificar tarea\n3) Visualizar tarea\n4) Eliminar tarea\n5) Salir"));

    switch (opt) {
      case 1:
        console.log(opt);
        break;
      case 2:
        console.log(opt);
        break;
      case 3:
        console.log(opt);
        break;
      case 4:
        console.log(opt);
        break;
      case 5:
        alert("Muchas gracias por usar ToDo Dev");
        break;
      default:
        alert("Debes ingresar una opcion valida!");
        break;
    } 
  
  } while(opt != 5);
}

/**
 * Validamos el prompt ingresado por el usuario.
 * @param {number} numberOfTask 
 * @returns {number} El argumento pasado a la función validado.
 */
function validateQuantityTask(numberOfTask) {
  if (isNaN(numberOfTask)) {
    alert("Debes ingresar un valor de tipo numérico");

    return getQuantityTask();
  }

  if (numberOfTask <= 0) {
    alert("Debes ingresar una cantidad mayor a cero para poder almacenar tus tareas.");
    return getQuantityTask();
  }

  return numberOfTask;
}

/**
 * Le solicitamos al usuario que ingrese la cantidad de tareas que almacenará en la app.
 * @returns {number} Total de tareas a almacenar previamente validadas.
 */
function getQuantityTask() {
  let numberTask = parseInt(prompt("Ingrese la cantidad de tareas que ingresarás en la app."));
  let numberTaskValidate = validateQuantityTask(numberTask);

  return numberTaskValidate;
}

/**
 * Función principal del proyecto o entry point
 */
function main() {
  alert("Bienvenido a ToDo Dev");
  const totalTaks = getQuantityTask();
  alert("Ingresarás una cantidad de tareas totales a :\n" + totalTaks);

  menu();
}

main();