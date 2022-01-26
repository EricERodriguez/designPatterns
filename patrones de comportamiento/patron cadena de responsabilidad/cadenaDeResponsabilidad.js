//se basa en q nosotros vamos a encapsular un dato y vamos a agregarle metodos a este para poder ir alterando el valor que este contiene, ejemplo jquery o lodash

class Suma {
    constructor( v = 0){
        this.val = v
    }

    suma( v){
        this.val += v;
        return this
    }
}

const valor = new Suma(1)
console.log(
valor
    .suma(1)
    .suma(2)
    .suma(3)
    .suma(4)
    .suma(5)
    .suma(6).val)