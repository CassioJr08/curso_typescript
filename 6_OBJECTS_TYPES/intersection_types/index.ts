//6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWhitGun = Character & Gun

const arnold: HumanWhitGun = {
    name: 'arnold',
    type: 'shotgam',
    caliber: 13
}

//const {name, type, caliber} = arnold

console.log(arnold)
//console.log(arnold.name)