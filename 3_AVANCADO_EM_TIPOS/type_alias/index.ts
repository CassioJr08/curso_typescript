// type alias

type ID = string | number

function showId(id: ID){
    console.log(`Id é: ${id}`)
}

showId(1)
showId('100')