// 2 - checando se valor existe
function operation(arr: number[], operation?: string | undefined){
    if(operation){
        if(operation === 'sum'){
            const sum = arr.reduce((acc, elemento) => acc + elemento)
            console.log(sum)
        }else if(operation === 'multiply'){
            const multiply = arr.reduce((acc, elemento) => acc * elemento)
            console.log(multiply)
        }
    } else {
        console.log('Por favor, defina uma operação')
    }
}

operation([1,2,3], 'multiply');
operation([1,2,3], 'sum');
operation([1,2,3], undefined);