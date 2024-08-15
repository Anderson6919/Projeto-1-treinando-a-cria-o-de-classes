class Product {
    constructor (name, descriptions, price) {
        this.name = name
        this.descriptions = descriptions
        this.price = price
        this.inStock = 0

    }
    addToStock(quantity) {
        this.inStock += quantity
        console.log(`
            nome do produto:${this.name}
            descição do produto:${this.descriptions}
            valor do produto:${this.price.toFixed}
            quanidade do produto:${this.inStock}
            `)
    }
    calculateDiscount (discount){
        this.price = this.price - (discount * this.price / 100)
        console.log(`
            =========================
            Desconto no produto: ${discount}%
            Novo valor do produto: ${this.price.toFixed(2)}`)
    }
}

const notebook = new Product('Notebook', 'Notebook nitro 5', 1000)
notebook.addToStock(10)
notebook.calculateDiscount(5)
