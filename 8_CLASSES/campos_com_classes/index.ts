// 1 - campos em classe
class User {
    name!: string // ! para iniciar sem valores
    age!: number
}

const matheus = new User()

console.log(matheus)

matheus.name = 'Matheus'
console.log(matheus)
//matheus.job = 'Programador'