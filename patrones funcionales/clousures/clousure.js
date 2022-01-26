// no es un patron, sino una funcionalidad que nos permite reutilizar codigo

// alcence lexico

// si defino una constante fuera de la funcion y luego la utilizo dentro de la funcion abro el alcance lexico de la funcion y me imprime x e y... las funciones tienen un alcance privado y un alcance publico, dependiendo del alcance lexico

const y = "lele"
const f = () =>{
    const x = 'lala'
    console.log(x, y)
}

f()

