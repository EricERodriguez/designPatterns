// es parecido al observador, en vez de los 2 objetos escucharse mutuamente esta accion se saca y se la entrega a otro objeto mediador. osea que si quieren escuchar se deberan suscribir al mediador ejemplo redux

const Emitter = (() => {
    const topics = {}
    const hOP = topics.hasOwnProperrty

    return{
        //nos suscribimos a todas las que queremos
        on: (topic, listener) => {
            if (!hOP.call(topics, topic)) topics[topic] = []
            topics[topic].push(listener)
        },
        //despachamos todas las que queremos
        emit: (topic, info) => {
            if (!hOP.call(topics, topic))
            return topics[topic].forEach(item => {
                item(info != undefined ? info : {})
            });
        }
    }
})()

Emitter.on('lala', x => console.log(x))

Emitter.on('lala', {lala : 'lolo'})