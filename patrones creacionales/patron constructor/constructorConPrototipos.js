

/*-------------------
/*--------patron constructor con prototipos---------
--------------------*/


class MiClaseConPropiedades{
    constructor(p1, p2 ){
        this.propiedad = p1
        this.propiedadDos = p2
    }
    metodo = () => {
        //soy un metodo de prototipo
    }
}

const instanciaConPropiedades = new MiClaseConPropiedades(3, 4)
console.log(instanciaConPropiedades)

// el metodo prototipo solo lo podemos ver en el explorardo/browser