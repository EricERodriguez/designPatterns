const f = (ruta, callBack) => {
    // muchas lineas de codigo despues

    const resultado = computacionPesada()
    callBack(ruta, resultado)
}


//buena practica
const manejaResultado= (resultado) => {

}
f( '/user',manejaResultado)

// proxima linea es mala practica porq es muy dificil hacer test unitario
app.get('/users', (req, res) => {

})