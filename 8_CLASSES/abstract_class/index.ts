// 18 

abstract class AbstractClass{
    abstract showName(): void
}

class Abstractexample extends AbstractClass {
    name: string
    constructor(name: string){
        super()
        this.name = name
    }

    showName(): void {
        console.log(`My name is ${this.name}`)
    }
}

const nome = new Abstractexample('Cassio')

nome.showName()