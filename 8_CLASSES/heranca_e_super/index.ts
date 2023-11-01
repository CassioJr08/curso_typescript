// 4 - herança e super

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine('Trator')

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number){
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine('desttroyer', 4)

console.log(trator)
console.log(destroyer)

/*
if(destroyer instanceof Machine ){
    console.log('trator faz parte de KillerMachine')
}else {
    
    console.log('trator não faz parte de KillerMachine')
}
*/