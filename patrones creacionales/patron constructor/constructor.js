
/*-------------------
/*--------patron constructor---------
--------------------*/

class MiClase{
    constructor(){
        this.propiedad = 1
        this.metodo = () => {
            //soy metodo
        }
    }
}

const instancia = new MiClase()
console.log(instancia)

// tambien le podemos enviar propiedad

class MiClaseConPropiedades{
    constructor(p1, p2 ){
        this.propiedad = p1
        this.propiedadDos = p2
        this.metodo = () => {
            //soy metodo
        }
    }
}

const instanciaConPropiedades = new MiClaseConPropiedades(3, 4)
console.log(instanciaConPropiedades)