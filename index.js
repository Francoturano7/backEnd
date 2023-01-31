class ProductManager {

    constructor() {
        this.products = []
    }

    getProducts() {
        return this.products
    }


    addProduct(title, description, price, thumbnail, id, stock) {
        if (!title || !description || !price || !thumbnail || !id || !stock) {
            return console.log("Todos los campos son obligatorios")
        } else {
            const existeId = this.#validarId(id)
            if (existeId) {
                console.log("Ya hay un producto con este ID")
            } else {
                const product = {
                    id: this.#generarId(),
                    title,
                    description,
                    price,
                    thumbnail,
                    stock
                }
                this.products.push(product)
            }
        }
    }


    getProductById(idProduct) {
        const productEncontrado = this.#validarId(idProduct)
        if (productEncontrado) {
            console.log(productEncontrado)
        } else {
            console.log("Producto no encontrado")

        }
    }

    #generarId() {
        let id =
            this.products.length === 0
                ? 1
                : this.products[this.products.length - 1].id + 1
        return id
    }


    #validarId(id) {
        return this.products.find(product => product.id === id)

    }
}


const product = new ProductManager()
console.log(product.getProducts())
product.addProduct("Iphone 8", "Celular", 500, "./iphone", 4, 100)
console.log(product.getProducts())
product.addProduct("Tablet 8", "Tablet", 800, "./tablet", 3, 500)
console.log(product.getProducts())
console.log(product.getProductById(2))





