// 6 - o this em classes

class Truck {
    model
    hp

    constructor(model: string, hp: number){
        this.model = model
        this.hp = hp
    }

    showDetails(){
        console.log(`Caminhão do modelo: ${this.model}, tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck('Volvo', 500)

volvo.showDetails()