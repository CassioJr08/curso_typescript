// union type detemina mais tipos para um dado

// somente utilizar o operador OR

function showBalance(balance: string | number){
    console.log(`O saldo da conta é ${balance}`)
}

showBalance('500')
showBalance(400)


const idade: Array <string | number | boolean> = [1, '2', true]

// Avançando em unio types

function shoqUserRole(role: boolean | string){
    if(typeof role === 'boolean'){
        return  'Usuario não aprovado!'
    }

    return `A função do usuario é: ${role}'`
}

console.log(shoqUserRole(false))
console.log(shoqUserRole('10'))