// 1 - type guard
function sum(a:number | string, b:number | string){

    if(typeof a === 'string' && typeof b === 'string'){
        console.log(parseFloat(a) + parseFloat(b))
    }else if(typeof a === 'number' && typeof b === 'number'){
        console.log(a + b);
    }else{
        console.log(`Impossivel realizar a soma!`)
    }
}

sum('4', '6')
sum(12, 8)
sum('18', 2)