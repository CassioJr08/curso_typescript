// 8 - setter

class Coords {
    x!: number
    y!: number

    set fillx(x:number){
        if(x === 0) {
            return
        }

        this.x = x

        console.log('X inserido com sucesso')
    }

    set filly(y:number){
        if(y === 0) {
            return
        }

        this.y = y

        console.log('Y inserido com sucesso')
    }

    get getCoords(){
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillx = 15
myCoords.filly = 1

console.log(myCoords)
console.log(myCoords.x)
console.log(myCoords.y)
console.log(myCoords.getCoords)