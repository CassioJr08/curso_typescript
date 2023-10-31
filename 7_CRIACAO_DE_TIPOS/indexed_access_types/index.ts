// 7 - indexed access type
type Truck = {km: number, kg:number, description: string}

type km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 3000,
    description: 'Caminhao para pouca carga'
}

function showKm(km: km){
    console.log(`O veículo tem a km de: ${km} `)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg: 3000,

}

showKm(newCar.km)