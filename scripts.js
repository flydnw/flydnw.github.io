// scripts.js

const cartCount = document.getElementById("cart-count");
const cartIcon = document.getElementById("cart-icon");
const cart = document.getElementById("cart");
const cartList = document.getElementById("cart-list");
const products = document.querySelectorAll(".product");
const productList = document.getElementById("product-list");

let cartItems = [];

function addToCart(productId) {
    const product = products[productId - 1];
    const productPrice = parseFloat(product.querySelector(".price").innerText.replace("￥", ""));
    const existingItemIndex = cartItems.findIndex(item => item.id === productId);

    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity++;
    } else {
        cartItems.push({ id: productId, name: product.querySelector("h3").innerText, price: productPrice, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    cartCount.innerText = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartList.innerHTML = "";

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} x${item.quantity} - ￥${(item.price * item.quantity).toFixed(2)}`;
        cartList.appendChild(li);
    });

    cart.style.display = cartItems.length > 0 ? "block" : "none";
}

products.forEach(product => {
    product.querySelector(".add-to-cart").addEventListener("click", () => addToCart(product.dataset.id));
});

cartIcon.addEventListener("click", () => {
    cart.style.display = cart.style.display === "block" ? "none" : "block";
});
