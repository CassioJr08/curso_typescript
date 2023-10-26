// 6 - parametros opcionais

function modernGreeting(name: string, greet?: string){
    if(greet){
        return `Olá ${greet} ${name}, tudo bem?`
    }

    return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting('Cassio'))
console.log(modernGreeting('Cassio', 'Dr.'))

// 7 - parametros default

function somaDefault(n: number = 5, m: number = 10): number{
    return n + m
}

console.log(somaDefault())
