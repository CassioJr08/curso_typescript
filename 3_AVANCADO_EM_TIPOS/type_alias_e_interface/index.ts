// interface x type alias

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {
    name: 'Cassio',
    age:18
}

console.log(somePerson)

type personType = {
    name: number
}
/*type personType = {
    age: number
}*/
