function props(a: number, b?: number, c:number = 5 ){
    console.log(a)
    if(b){
        console.log(b)
    }
    console.log(c)
}

props(8)

// validando argumento opcinonal
function advancedGreeting(firstName: string, lastname?: string){
    if(lastname !== undefined) {
        return console.log(`Olá, ${firstName} ${lastname}, tudo bem?`)

    }
    console.log(`Olá, ${firstName}`)
}

advancedGreeting('Cassio')