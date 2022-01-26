// nos entrega una interfaz unificada para ejecutar los metodos de un objeto en particular, de esta manera en vez de llamar a un metodo del objeto lo que hariamos es llamar a una interfaz o algun metodo que se llame ejecutar, execute, run, etc. Donde en ese metodo o funcion le direcmos que metodo queremos ejecutar seguido de los argumento que nosotros le vamos a entregar

const Commander = (() => {
    const o = {
        comprar: x => {
            console.log(`Comprando ${x}`);
        },
        vender : x=>{
            console.log(`Vendiendo ${x}`);
        }
    }

    return {
        run: (comando, argumentos) => {
            if (!o[comando]){
                console.log(`comando no existe!`);
                return
            }
            o[comando](argumentos)
        }
    }
})()

Commander.run('comprar', 'mazda')
Commander.run('', 'no pasa nada')