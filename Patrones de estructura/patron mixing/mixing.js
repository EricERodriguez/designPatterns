// nos ayuda a tomar una clase que ya existe y empezar a agregarles mas funcionalidades sin necesidad de alterar la clase, esto siginifica que todas las instancias que se generen de esta clase van a seguir siendo instancia de esta misma clase

//mixing

let mixing ={
    saludar(){
        console.log(`hola ${this.nombre}`);
    },
    despedir(){
        console.log(`chao ${this.nombre}`);
    }
}

//clase

class Usuario {
    constructor(nombre){
        this.nombre = nombre
    }
}

// aumentamos el prototipo
Object.assign(Usuario.prototype, mixing)

const usuario = new Usuario(`Chanchito feliz`)

usuario.saludar()
usuario.despedir()