class User {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.task = [];
  }

  get userData() {
    console.log("=== Datos del usuario ===");
    console.log(`1. ID: ${this.id}`);
    console.log(`2. Nombre: ${this.name}`);
    console.log(`3. Tareas: ${this.task}`);
  }

  get allTask() {
    let tasks = this.task;

    if (tasks.length === 0) {
      alert("Usted no posee tareas almacenadas");
      return;
    }

    for (const task of tasks) {
      console.log(task);
      alert(
        `=== Tarea ${task.id} ===\nNombre: ${task.name}\nDescripcion: ${task.description}`
      );
    }
  }

  addTask(name, description) {
    this.task.push({
      id: this.task.length + 1,
      name: name,
      description: description,
    });
    console.log("Su tarea a sido insertada correctamente");
  }

  findTaskById(idTask) {
    const arrOfTask = this.task;

    const filteredTask = arrOfTask.filter((task) => task.id === idTask);

    if (filteredTask) {
      for (const task of filteredTask) {
        alert(
          `=== Tarea ${task.id} ===\nNombre: ${task.name}\nDescripcion: ${task.description}`
        );
      }
      return;
    } 

    alert("Tu tarea no se a encontrado en nuestro To Do");
  }

  deleteTaskById(idTask) {
    const taskList = this.findTaskById(idTask);
    idTask -= 1;

    if (idTask > this.task.length || idTask < 0) {
      alert("Haz excedido el rango de la cantidad de tareas");
      return;
    }

    console.log(`Se eliminara el siguiente elemento ${this.task[idTask]}`);
    this.task.splice(idTask, 1);
    console.log(`Elemento con el indice ${idTask} a sido eliminado!`);
    console.log(this.task);

    return;
  }
}

let userInfo = [];

/**
 * Creamos un usuario y lo instanciamos para posteriormente agregarlo a un array de info de usuarios.
 */
function createUser() {
  const currentId = userInfo.length + 1;
  const name = prompt("Ingresa tu nombre de usuario");
  const newUser = new User(name, currentId);

  userInfo.push(newUser);
  console.log(userInfo);
  console.log("Usuario creado");
}

/**
 * Funcion principal del programa o entry point de la app
 */
function main() {
  createUser();
  let firstObj = userInfo[0];

  console.log(firstObj);
  alert(`Bienvenido ${firstObj.name} a ToDo Dev`);

  let opt = 0;

  do {
    opt = parseInt(
      prompt(
        "Elige una de las siguientes opciones:\n1) Agregar tarea.\n2) Mostar todas las tareas\n3) Mostrar una tarea por ID\n4) Eliminar Tarea\n5) Salir"
      )
    );

    switch (opt) {
      case 1:
        let nameTask = prompt("Ingresa el nombre de la tarea");
        let description = prompt("Ingresa una descripcion de tu tarea");

        firstObj.addTask(nameTask, description);
        console.log(firstObj);
        break;

      case 2:
        firstObj.allTask;
        break;

      case 3:
        const arrOfTask = firstObj.task;
        
        if (arrOfTask.length === 0) {
          alert("Usted no posee tareas almacenadas");
          break;

        } else {
          let idForTask = parseInt(prompt("Ingresa el ID de tu tarea"));

          firstObj.findTaskById(idForTask);
          break;
        }

      case 4:
        let idTaskForDelete = parseInt(
          prompt("Ingrese el ID de la tarea el cualquiere eliminar")
        );
        firstObj.deleteTaskById(idTaskForDelete);
        alert("Se a eliminado tu tarea!");

        break;
      case 5:
        alert("Muchas gracias por usar ToDo Dev!");
        break;

      default:
        alert("Haz ingresado una opcion incorrecta, vuelve a intentar!");
        break;
    }
  } while (opt != 5);
}

main();
