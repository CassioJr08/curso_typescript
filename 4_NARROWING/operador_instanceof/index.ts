// 3 - instance of

class User{
    name

    constructor(name:string){
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name:string){
        super(name)
    }
}

const jhon = new User('Jhon')
const paul = new SuperUser('Paul')

console.log(jhon)
console.log(paul)

function userGrreting(user: object){
    if(user instanceof SuperUser){
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    }else if(user instanceof User){
        console.log(`Olá ${user.name}`)
    }
}

userGrreting(jhon)
userGrreting(paul)