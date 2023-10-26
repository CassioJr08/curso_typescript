// 8 - unknown
function doSomething(x: unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    }else if(typeof x === 'number'){
        console.log('X é um numero')
    }
}

doSomething(['1',2])

// 9 - never
function showerrorMessage(msg: string): never{
    throw new Error(msg)
}
showerrorMessage('Algum erro')