// 3 - generic function
function firstElement<T>(arr: T[]): T{
    return arr[0]
}


console.log(firstElement([1,2,3]))
console.log(firstElement(['a', 'b', 'c']))

function mergeObject<U, T>(obj1: U, obj2: T){
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObject({name: 'Matheus'}, {age: 30, job: 'Programer'})

console.log(newObject)


// 4 - constraints
function biggestNumber<T extends number | string> (a: T, b: T): T{

    if(+a < +b){
        [a, b] = [b,a]
    }

    return a
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber('10', '16'))


type union = string | number
function maiorNumber(a: union , b: union){
    if(a < b){
        [a, b] = [b,a]
    }
    return a
}

console.log(maiorNumber(5, '3'))
console.log(maiorNumber('10', 16))