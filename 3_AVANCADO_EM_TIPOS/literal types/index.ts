//literal type
let test: 'testando'

test = 'testando'

console.log(test)

type param = 'left' | 'right' | 'center' 

function showDirection(direction: param ){
    console.log(`A direçãó é: ${direction}`)
}

showDirection('center')