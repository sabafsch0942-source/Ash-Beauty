// =========================
// PRODUCTS
// =========================

const products = [
    {
        id: 1,
        name: " COCOA Color ",
        image: "../images/product1.png"
    },
    {
        id: 2,
        name: " SWEET Color ",
        image: "../images/product2.png"
    },
    {
        id: 3,
        name: " COCOA Color ",
        image: "../images/product3.png"
    },
    {
        id: 4,
        name: " ROSE Color ",
        image: "../images/product4.png"
    },
    {
        id: 5,
        name: " BARBIE Color ",
        image: "../images/product5.png"
    },
    {
        id: 6,
        name: " BERRY Color ",
        image: "../images/product6.png"
    }
];


// Change Price
function changePrice(productNumber) {

    const size = document.getElementById("size" + productNumber).value;
    const price = document.getElementById("price" + productNumber);

    if (size === "5") {
        price.textContent = "7,000 IQD";
    } else {
        price.textContent = "10,000 IQD";
    }
}


// Cart
let cart = [];


// Add to Cart
function addToCart(productNumber) {

    const size = document.getElementById("size" + productNumber).value;

    let price;

    if (size === "5") {
        price = 7000;
    } else {
        price = 10000;
    }

    const product = products.find(item => item.id === productNumber);

    cart.push({
        name: product.name,
        size: size,
        price: price
    });

    alert(
        product.name +
        " added to cart!\n" +
        "Size: " + size + " ML\n" +
        "Price: " + price + " IQD"
    );
}