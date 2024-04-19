class User {
    constructor(name, pwd, email) {
        this.name = name
        this.pwd = pwd
        this.email = email
    }

    getUserData = () => {
        console.log(`=== Datos Usuario ===\nUser: ${this.name}\nEmail: ${this.email}`);
    }
}