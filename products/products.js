// =========================
// PRODUCTS
// =========================

const products = [
    {
        id: 1,
        name: "Color 1",
        image: "../images/product1.png"
    },
    {
        id: 2,
        name: "Color 2",
        image: "../images/product2.png"
    },
    {
        id: 3,
        name: "Color 3",
        image: "../images/product3.png"
    },
    {
        id: 4,
        name: "Color 4",
        image: "../images/product4.png"
    },
    {
        id: 5,
        name: "Color 5",
        image: "../images/product5.png"
    },
    {
        id: 6,
        name: "Color 6",
        image: "../images/product6.png"
    }
];


// =========================
// CHANGE PRICE
// =========================

function changePrice(productNumber) {

    const size = document.getElementById(
        "size" + productNumber
    ).value;

    const price = document.getElementById(
        "price" + productNumber
    );

    if (size === "5") {
        price.textContent = "7,000 IQD";
    } else {
        price.textContent = "10,000 IQD";
    }
}


// =========================
// CART
// =========================

let cart = [];


// =========================
// ADD TO CART
// =========================

function addToCart(productNumber) {

    const size = document.getElementById(
        "size" + productNumber
    ).value;

    let price;

    if (size === "5") {
        price = 7000;
    } else {
        price = 10000;
    }


    const product = products.find(
        item => item.id === productNumber
    );


    const existingProduct = cart.find(
        item =>
            item.id === productNumber &&
            item.size === size
    );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            image: product.image,
            size: size,
            price: price,
            quantity: 1
        });

    }


    updateCart();


    alert(
        product.name +
        " added to cart!\n\n" +
        "Size: " + size + " ML\n" +
        "Price: " + price.toLocaleString() + " IQD"
    );
}


// =========================
// UPDATE CART
// =========================

function updateCart() {

    let totalItems = 0;
    let totalPrice = 0;


    cart.forEach(item => {

        totalItems += item.quantity;

        totalPrice +=
            item.price * item.quantity;

    });


    console.log("Items:", totalItems);

    console.log(
        "Total:",
        totalPrice.toLocaleString() + " IQD"
    );
}