// para inmutabilidad definimos todo con const

const obj = {
    a: 1
}


const obj2 = {
    ...obj,
    c:3
}
obj.b = 2

console.log(obj, obj2)