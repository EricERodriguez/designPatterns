// hehrencia

class Persona {
    constructor() {
        this.nombre = 'lala'
    }

    saludar () {
        console.log(`Hola soy ${this.name}`)
    }
}

class erro extends Persona {

}

// esto de arriba no tiene sentido, asi que utilizamos la composicion

const saludar = name => console.log(`Hola soy ${name}`)
const despedir = () => console.log(`Adios`)
const dormir = () => console.log(`Zzzzz`)

const Persona = {
    nombre: 'lala',
    saludar: () => saludar(persona.nombre)
}

// o con clase

class Persona {
    constructor() {
        this.nombre = 'lala'
    }

    saludar () {
        saludar(this.nombre)
    }

    despedir () {
        despedir()
    }

    dormir () {
        dormir()
    }
}