// 2 - constraint em generic
function showProductName<T extends {name: string}>(obj: T){
    return `O nome do produto é: ${obj.name}`
}

const myObj = {
    name: 'porta',
    cor: 'branca'
}

const other = {
    name: 'carro',
    wheels: 4,
    engine: 1.0
}

console.log(showProductName(myObj))
console.log(showProductName(other))