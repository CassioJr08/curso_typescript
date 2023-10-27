// 2 - parametro opcional

interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User){
    console.log(`O usuario tem o e-mail: ${user.email}`)
    if(user.role){
        console.log(`A função do usuario é: ${user.role}`)
    }
}

const u1: User = {
    email: 'cassiojr0108@gmail.com',
    role: 'admin'
}

const u2: User = {
    email: 'cassiojr0108@gmail.com',
}

showUserDetails(u1)
showUserDetails(u2)
