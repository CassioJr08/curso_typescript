// 5 - keyof type operator
type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, key: C): string {
    return `${obj[key]}`
}

const myChar: Character = {
    name: 'Cassio',
    age: 30,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'age'))