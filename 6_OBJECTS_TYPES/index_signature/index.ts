// 4 - index signature

interface CoordObject {
    [index: string]: number

}

let coords: CoordObject = {
    x: 10,
    y: 5
}

coords.w = 15
console.log(coords)