
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

// /////////////////////////////////////////////////////User wants to search for some product

let nameOfProduct = products.map(product => product.name);

function getResult() {
    
    let inputPrice = document.getElementById('price').value;

    let inputName = document.getElementById('product').value;

    if (inputName !== '' && inputPrice=='') {
        let resultSearchProduct = products
            .filter(product => product.name.toLowerCase().includes(inputName));

        let productListUL = document.querySelector('ul');
        productListUL.remove();

        let ul = document.createElement('ul');
        let bodyElement = document.querySelector('body');
        bodyElement.appendChild(ul)

        renderProducts(resultSearchProduct);
    
    } else if (inputPrice !== '' && inputName=='') {
    
        let resultSearch = products
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

    } else if (inputName !== '', inputPrice !== '') {
        let combinResultSearch = products
            .filter((product) => {
                if (inputPrice === '') {
                    return true;
                } else {
                    return (product.price < inputPrice);
                }
            })
            .filter(product => product.name.toLowerCase().includes(inputName));
        
        const productListUL = document.querySelector('ul');
        productListUL.remove();

        let ul = document.createElement('ul');
        let bodyElement = document.querySelector('body');
        bodyElement.appendChild(ul);

        renderProducts(combinResultSearch);
    } else {
            
        const productListUL = document.querySelector('ul');
        productListUL.remove();

        let ul = document.createElement('ul');
        let bodyElement = document.querySelector('body');
        bodyElement.appendChild(ul);

        renderProducts(products);
    }
}
document.getElementById('price').addEventListener('input', getResult);
document.getElementById('product').addEventListener('input', getResult);
