// lo que hace es q mediante una funcion,objeto o clase vamos a poder acceder a 2 metodos a uno de next y otro de value . tambien saber si hemos terminado de iterar una coleccion 

//La declaración function* (la palabra clave function seguida de un asterisco) define una función generadora, que devuelve un objeto Generator.

// También puedes definir funciones generadoras usando el constructor GeneratorFunction y una function* expression.

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*



function* iterador(col) {
    var nextIndex = 0

    while (nextIndex < col.length) {
        yield col[nextIndex++]
    }
}

const x = [1,2,3,4,5,6,7]
const gen = iterador(x)
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());