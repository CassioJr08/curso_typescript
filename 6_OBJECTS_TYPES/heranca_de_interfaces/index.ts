// 5 - extending interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const cassio: Human = {
    name: 'cassio',
    age: 18
}

const goku: SuperHuman = {
    name: 'goku',
    age: 120,
    superpowers: ['Kamehameha']
}

console.log(cassio)
console.log(goku)