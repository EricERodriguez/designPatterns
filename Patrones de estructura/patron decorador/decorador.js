// tiene una sutil diferencia con el mixing, el patron decorador va a tomar todas las intancias de una clase y les va a ir agregando nuevas funcionalidades a esta

// class Macbook{
//     constructor(){
//         this.precio = 1000
//         this.pantalla = 11.6
//     }
// }

// const macbook = new Macbook()

//una forma de hacer el decorador
// macbook.agregarMemoria = function (){
//     this.precio += 100
// }

// macbook.agregarMemoria()
// console.log(macbook.precio);
// console.log(macbook.agregarMemoria);

class Macbook{
    precio () {
        return 1000
    }
}


const memoria = mac => {
    const v = mac.precio()
    mac.precio = function(){
        return v + 100
    }
}

const macbook = new Macbook ()
memoria(macbook)

console.log(macbook.precio());
