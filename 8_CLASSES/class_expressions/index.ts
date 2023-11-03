// 17 - class expressions

const myClass = class<T> {
    name

    constructor(name: T){
        this.name = name
    }
}

const pessoa = new myClass('Cassio')
console.log(pessoa)
console.log(pessoa.name)