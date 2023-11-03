// 14 - static members

class StaticMembers {
    static prop = 'teste static'

    static staticMethod(){
        console.log('este  um metodo estatico')
    }
}

console.log(StaticMembers.prop)
const teste = StaticMembers.staticMethod

teste()