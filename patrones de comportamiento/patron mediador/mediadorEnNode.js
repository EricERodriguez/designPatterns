const Emitter =require('event')

const emitter = new Emitter()

emitter.on('lala', x => console.groupEnd(x))

emitter.emit('lala', {lala: 'lele'})