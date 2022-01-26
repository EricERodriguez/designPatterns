// convierte a funciones que reciben a un solo argumento y retorna una funcion que retorna otro argumento, luego de recibir todos los argumentos se va a ejecutar


const suma = (a,b) => a + b

console.log(suma(1,5));

// transformando a currying

const sumar = a => b => a + b

const sumar1 = sumar(1)

console.log(sumar1(5));
