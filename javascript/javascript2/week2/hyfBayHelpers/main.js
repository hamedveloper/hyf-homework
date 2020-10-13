
console.log("Script loaded");

let products = getAvailableProducts();

function renderProducts(products) {
    // your code here
    const ul = document.querySelector("ul");
    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
        ul.appendChild(li);
    });
}
renderProducts(products);

/////////////////////////////////////////////////////User wants to search for some product

let nameOfProduct = products.map(product => product.name);

function writeInput() {

    let inputName = document.getElementById('product').value;
    let resultSearch1 = products
        .filter(product => product.name.toLowerCase().includes(inputName));

    let productListUL = document.querySelector('ul');
    productListUL.remove();

    let ul = document.createElement('ul');
    let bodyElement = document.querySelector('body');
    bodyElement.appendChild(ul)

    renderProducts(resultSearch1);
    return resultSearch1;
}


document.getElementById('product').addEventListener('input', writeInput);

function priceInput() {

    let inputPrice = document.getElementById('price').value;
    let resultSearch = writeInput()
        .filter((product) => {
            if (inputPrice === '') {
                return true;
            } else {
                return (product.price < inputPrice)
            }
        });

    const productListUL = document.querySelector('ul');
    productListUL.remove();

    let ul = document.createElement('ul');
    let bodyElement = document.querySelector('body');
    bodyElement.appendChild(ul)

    renderProducts(resultSearch);

}
document.getElementById('price').addEventListener('input', priceInput);