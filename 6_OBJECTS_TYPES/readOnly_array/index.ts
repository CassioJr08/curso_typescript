//7 - readonly
let myarray: ReadonlyArray<string> =  ['maça', 'laranja', 'banana']
//myarray[3] = 'mamão'

console.log(myarray)

myarray.forEach(item =>{
    console.log('Frutas: ' + item)
})

myarray = myarray.map(item => {
    return `Frutas ${item}`
})

console.log(myarray)

