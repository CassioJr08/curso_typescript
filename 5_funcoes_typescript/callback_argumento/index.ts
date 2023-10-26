// 2 - callback como argumento
function greeting(name: string): string{
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, Username:string){
    console.log('Preparando a função!')
    const greet = f(Username)
    console.log(greet)
}

preGreeting(greeting, 'Cassio')
preGreeting(greeting, 'Junior')