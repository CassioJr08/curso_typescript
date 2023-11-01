// 3 -campos readonly

class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const fusca = new Car('fusca')

console.log(fusca)
fusca.name = 'fusca turbo'
console.log(fusca.wheels)
//fusca.wheels = 5