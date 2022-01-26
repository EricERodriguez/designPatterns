// se vasa en que podemos tomar un objeto definido y con este podemos crear prototipos

const perro = {
    raza: 'Kilterrier',
    ladrar: function () {
        console.log(`Guau!, soy un ${this.raza}`)
    }
}

const kiltro = Object.create(perro)

kiltro.ladrar()

kiltro.raza = 'Super perro!'
kiltro.ladrar = `Soy un ${kiltro.raza}`

console.log(kiltro.ladrar)