//5  - especificar tipode de argumento
function mergeArrays<T>(arr1: T[],arr2: T[],){
    return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3], [4,5]))
console.log(mergeArrays<number | string>([1,2,3], ['teste', 'testando']))