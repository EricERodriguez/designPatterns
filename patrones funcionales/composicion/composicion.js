const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto'},
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz'},
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez'},
    { edad: 1, nombre: 'Sofia', apellido: 'Zapata'}
]


// const traerPrimerInfante = data => {
//     const infantes = data.filter(x=>x.edad<2)
//     const primerInfante = infantes[0]
//     const infante ={
//         nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`
//     }
//     return `${infante.nombreCompleto} tiene ${infante.edad} año(s)`
// }

/*-------------------
/*--------refactor---------
--------------------*/

const head = xs => xs[0]

const formateo = x =>({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: x.edad
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`

const traerPrimerInfante = data => formato(formateo(head(data.filter(x => x.edad <2))))
