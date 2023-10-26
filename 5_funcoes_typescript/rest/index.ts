function sumAll(...n: number[]){
    return n.reduce((acc, el): number => acc + el)
}

console.log(sumAll(1,2,3,4,5))


function showProductDetaiuls({name, price}: {name: string, price: number}): string{
    return `O nome do produto é ${name} e ele custa R$${price}`

}

const shirt = {name: 'Camisa', price: 49.99}

console.log(showProductDetaiuls(shirt))

