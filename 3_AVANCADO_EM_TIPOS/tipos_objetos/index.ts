// tipando objetos

function passCordinates(corrd: {x: number, y:number}){
    console.log(`X cordenadas ${corrd.x}`)
    console.log(`Y cordenadas ${corrd.y}`)
}

const objcoord = {
    x: 329,
    y:500
}

passCordinates(objcoord)
passCordinates({x: 2, y: 4}) // nome da propriedade tem que ser a mesma

function teste (funcao: Function) {
    console.log(funcao)
}

function sun (a: number, b:number): number{
    return a + b;
}

//teste(1)
let funcao: Function = ()=>{

}

funcao = teste

funcao(sun(1,3))

const objetoPessoa: {name: string, idade: number} = {name: 'junior', idade: 18}

let newObject: object = {}

//ewObject = 10