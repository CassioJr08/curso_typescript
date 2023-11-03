// 16 - paramter properties
class ParameterProperties {
    constructor(public name: string, private qtdy: number, private price: number){
        this.name = name
        this.qtdy = qtdy
        this.price = price
    }

    get showqty(){
        return `${this.qtdy}`
    }
}

const newShirt = new ParameterProperties('Camisa', 5, 19.99)
console.log(newShirt.showqty)