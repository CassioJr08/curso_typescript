// 9 - herança de interfaces

interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title 

    constructor(title: string){
        this.title = title
    }

    itemTitle(): string {
        return `O titulo do post é: ${this.title}`
    }
}

const myPost = new blogPost('Hello Word!')

console.log(myPost.itemTitle())

class TestInterface implements showTitle {
    title 

    constructor(title: string){
        this.title = title
    }

    itemTitle(): string {
        return `O titulo é: ${this.title}`
    }
}