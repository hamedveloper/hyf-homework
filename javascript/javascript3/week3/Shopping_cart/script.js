///////////////////////////////////////////////////////////////////Part 1 and 2

let ul = document.querySelector('ul');
let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');

//Add an event to select option for making change on currency

let select = document.getElementById('currency')
let option = document.querySelector('option')

select.addEventListener('change', getCurrency)

function getCurrency() {
    new Product('radio', 1500).convertToCurrency(this.value);
    new Product('camera', 3500).convertToCurrency(this.value);
}


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(x) {
        fetch('https://api.exchangeratesapi.io/latest?base=DKK')
            .then(response => response.json())
            .then(data => {
                if (x === 'EUR') console.log(`Price for ${this.name} in ${x} is ${(data.rates.EUR * this.price).toFixed(2)}`)
                if (x === 'USD') console.log(`Price for ${this.name} in ${x} is ${(data.rates.USD * this.price).toFixed(2)}`)
                if (x === 'CAD') console.log(`Price for ${this.name} in ${x} is ${(data.rates.CAD * this.price).toFixed(2)}`)
                if (x === 'AUD') console.log(`Price for ${this.name} in ${x} is ${(data.rates.EUR * this.price).toFixed(2)}`)
            })
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product)
    }

    removeProduct(product) {
        let indexItem = this.products.indexOf(product);
        if (indexItem > -1) {
            return this.products.splice(indexItem, 1);
        }
    }

    searchProduct(productName) {
        return this.products.filter(x => x.name === productName)
    }

    getTotal() {
        return this.products.reduce((acc, item) => acc + (item.price), 0)
    }

    renderProducts() {
        this.products.forEach(x => {
            let listOfProducts = document.createElement('li');
            listOfProducts.innerHTML = `Product: ${x.name}, ----Price:${x.price}`;
            ul.appendChild(listOfProducts)
        })
    }

    getUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1')
    }
}



const shoppingCart = new ShoppingCart();
const flatscreen = new Product('flat-screen', 5000);
const cdPlayer = new Product('cdPlayer', 2500)
const radio = new Product('radio', 1500)
const camera = new Product('camera', 4500)


shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(cdPlayer);
shoppingCart.addProduct(radio);
shoppingCart.addProduct(camera);

shoppingCart.removeProduct(radio);

let totalPrice = shoppingCart.getTotal()

function productList() {
    shoppingCart.getUser()
        .then(data => data.json())
        .then(product => {
            h1.innerHTML = product.name;
            shoppingCart.renderProducts()
        })
    p.innerHTML = `Total price is: ${totalPrice} DKK`
}

btn.addEventListener('click', productList)
let searchResult = shoppingCart.searchProduct('camera');