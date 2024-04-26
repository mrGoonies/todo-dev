class User {
  constructor (name, id) {
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
    const tasks = this.task;

    if (tasks.length === 0) {
      alert("Usted no posee tareas almacenadas");
      return ;
    }

    for (const task of tasks) {
      console.log(task)
      alert(`=== Tarea ${task.id} ===\nNombre: ${task.name}\nDescripcion: ${task.description}`);
    }

  }

  addTask(name, description) {
    this.task.push(
      {
        id: (this.task.length+1),
        name: name,
        description: description
      }
    )
    console.log("Su tarea a sido insertada correctamente");
  }

  findTaskById(idTask) {
    const arrOfTask = this.task;

    if (arrOfTask.length === 0) {
      alert("Usted no posee tareas almacenadas.");
      return ;
    }

    for (const task of arrOfTask) {
      if (task.id === idTask) {
        console.log(task)
        alert(`=== Tarea ${task.id} ===\nNombre: ${task.name}\nDescripcion: ${task.description}`);
        break;
      } else {
        alert(`Lo siento, no posees ninguna tarea almacenada con un ID igual a ${idTask}`);
      }
    }
  }

  deleteTaskById(idTask) {
    const arrOfTask = this.task;
    idTask -= 1;

    if (arrOfTask.length === 0) {
      alert("Usted no posee tareas almacenadas.");
      return ;
    }

    if (idTask > arrOfTask.length || idTask < 0) {
      alert("Haz excedido el rango de la cantidad de tareas");
      return ;
    }

    console.log(`Se eliminara el siguiente elemento ${this.task[idTask]}`);
    this.task.splice(idTask, 1);

    console.log(`Elemento con el indice ${idTask} a sido eliminado!`);
    console.log(this.task);
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

function main() {
  createUser();
  let firstObj = userInfo[0];
  
  console.log(firstObj)
  alert(`Bienvenido ${firstObj.name} a ToDo Dev`);
  
  let opt = 0;

  do {
    opt = parseInt(prompt("Elige una de las siguientes opciones:\n1) Agregar tarea.\n2) Mostar todas las tareas\n3) Mostrar una tarea por ID\n4) Eliminar Tarea\n5) Salir"));
    
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
        let idForTask = parseInt(prompt("Ingresa el ID de tu tarea"));
        
        if (idForTask > 0) {
          firstObj.findTaskById(idForTask);
          break;
        }

        alert("Debes ingresar un ID Valido");
        break;

      case 4:
        let idTaskForDelete = parseInt(prompt("Ingrese el ID de la tarea el cualquiere eliminar"))
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
  } 
  while (opt != 5);
}

main();