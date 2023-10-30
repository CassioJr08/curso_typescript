// 1- numbers
/*let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const z: number = 15.425

console.log(typeof z)
console.log(z)

console.log(z.toPrecision(3)) // esse metodo define o numero de algarismos

// 2 - string

const firstname: string = 'Cassio'.toUpperCase()
console.log(firstname.toUpperCase())

const lastName: string = 'Junior'.toUpperCase();
console.log(lastName.toUpperCase());

let fullName: string = firstname + " " + lastName

console.log(fullName);


// 3- boolean
let a: boolean = true

console.log(a)
console.log(typeof a)

console.log(a = false); 

// 4 - Inference e annotation
let ann: string = 'Teste' //annotation
let inf = 'teste' //inference

//ann = 1
//inf = 1

console.log('testando')*/

// desafio

let numero: number = 10

let texto = numero.toString()

console.log(`O número em uma string é ${texto}`)


const obj: {nome: string, idade: number} = {
    nome: 'cassio',
    idade: 32
}

console.log(`Meu nome é ${obj.nome} e tenho ${obj.idade} anos`)

const {nome, idade} = obj
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)

function tt({nome, idade}: {nome:string, idade: number}): void{
    console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
    
}

tt(obj)