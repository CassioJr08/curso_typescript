// 10 - override de metodos

class Base {
    name

    constructor(name: string){
        this.name = name

    }
    someMethod(){
        console.log('algum nome')
    }
}

class Nova extends Base {

    constructor(name: string){
        super(name)
        this.name = 'joao'
    }
    someMethod(): void {
        console.log('testando outra coisa')
    }
}

const myObject = new Nova('cassio')

console.log(myObject.name)
myObject.someMethod()