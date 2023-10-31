// 3 - generics com interfaces
interface MyObject<T, U, Q>{
    name: string,
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean,boolean, string>

const myCar: Car = {
    name: 'fusca',
    wheels: 4, engine: 1.0,
    color: 'Branco'
}

const myPen: Pen = {
    name: 'Caneta Bic',
    wheels: false,
    engine: false,
    color: 'azul'
}

console.log(myCar)
console.log(myPen)