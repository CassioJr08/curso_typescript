// 7 - getters
class Person {
    name
    surname

    constructor(name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    get fullName(){
        return this.name + " " + this.surname
    }
}

const cassio = new Person('Cassio', 'Junior')

console.log(cassio.name)

console.log(cassio.fullName)