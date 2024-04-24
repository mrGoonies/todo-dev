class User {
  constructor (name, pwd, id) {
    this.id = id;
    this.name = name;
    this.pwd = pwd;
  }

  getData = () => {
    console.log(`=== Tu info ===\n- Usuario: ${this.name}\n- ID: ${this.id}`);
  }
}

class Task {
  constructor (id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}


let userInfo = [];

/**
 * Creamos un usuario y lo instanciamos para posteriormente agregarlo a un array de info de usuarios. 
 */
function createUser() {
  const currentId = userInfo.length + 1;
  const name = prompt("Ingresa tu nombre de usuario");
  const pwd = prompt("Ingresa tu password");
  const newUser = new User(name, pwd, currentId);

  userInfo.push(newUser);
  console.log(userInfo);
  console.log("Usuario creado");
}


function main() {
  createUser();
}

main();