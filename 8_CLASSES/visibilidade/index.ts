// 11 - public

class C {
    public x = 10
}

class D extends C{
    
}

const cInstance = new C()
const dInstance = new D()

console.log(cInstance.x)
console.log(dInstance.x)


// 12 - protected pode ser acesada somente por subclasses
// 12 - protected
class E {
    protected x = 10

    protected protegendo(){
        console.log('Este metodo é protegido')
    }
}

class F extends E {

    showX(){
        console.log('X: ' + this.x)
    }

    getProtetor(){
        this.protegendo()
    }
}

const fInstance = new F()
fInstance.showX() 
fInstance.getProtetor() 

// 13 - private
class PrivateClass {
    private name = 'Private'

    showName() {
        return this.name
    }

    private privateMethod(){
        console.log('Metodo privado')
    }

    showPrivateMetod(){
        return this.privateMethod()
    }
}

const pObj = new PrivateClass()
//console.log(pObj.name)
console.log(pObj.showName())
pObj.showPrivateMetod()


