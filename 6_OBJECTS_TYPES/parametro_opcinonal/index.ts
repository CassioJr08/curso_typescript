// 1 - tipo de objeto para função com inteface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvailable) {
        console.log('O produto está disponivel')
    }else{
        console.log('O produto não está disponivel')
    }
}

const shirt: Product = {
    name: 'camisa',
    price: 19.99,
    isAvailable: false
}

showProductDetails(shirt)