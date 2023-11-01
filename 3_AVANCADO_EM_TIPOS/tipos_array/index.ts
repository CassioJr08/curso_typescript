// 1- arrays

let number1: number[] = [1,2,3,4,5]
number1.push(10)

console.log(number1[5])

const objeto: object[] = [{name: 'cassio'}]

objeto[0] = {...objeto[0],idade: 18}
objeto.push({idade: 18})
console.log(objeto)


// 2 - outra sintaxe array
const nums1: Array<number> = [100, 200]

nums1.push(300)
console.log(nums1[2]);

let boll: boolean[] = [true, false]
