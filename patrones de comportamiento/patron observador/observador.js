//tambien conocido como publis/suscribe consta de 2 actores el que publica y el que se suscribre, este va a estar escuchando al otro y asi va a ejecutar logica.

const user = new User()

const init = () => {
    user.on('login', userLoggedIn)
    // user.on('login', retrieveInitData)
}

const userLoggedIn = () => {
    //usuario inicio sesion
}

app.init()

//en algun lugar de nuestra app
const login = () => {
    //logica de inicio de sesion...
    //...


    //luego:
    user.trigger('login')
}

login()