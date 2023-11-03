// 15 - generic class

class Item<T, U> {
    first
    second

    constructor(first:T, second: U){
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é: ${this.first}`
    }
}

const newItem = new Item('caixa', 'supresa')

console.log(newItem)
console.log(newItem.showFirst)
