// 3 - readonly
// é tipo uma constante para interfaces

interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: 'BMW',
    wheels: 4
}

console.log(fusca)
//fusca.wheels = 5