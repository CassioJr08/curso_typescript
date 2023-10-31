// 8 - conditional types
interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5
//const someVar2: myType = '2'

type myTypeB = Teste extends {showName(): string} ? string : boolean

