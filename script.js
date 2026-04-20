let products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

let cartProducts = [];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearButton = document.querySelector("#clear-cart-btn");

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price}  <button class="add-to-cart-btn" data-id="${product.id}" onclick="
  addToCart(${product.id})
 ">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

function renderCart() {
  cartList.innerHTML = "";

  cartProducts.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price}  <button class="add-to-cart-btn" data-id="${product.id}" onclick="
  removeFromCart(${product.id})
 ">Remove from Cart</button>`;
    cartList.appendChild(li);
  });
}

function addToCart(productId) {
  let product = products.find((p) => p.id === productId);
  products = products.filter((product) => product.id !== productId);

  cartProducts.push(product);
  renderProducts();
  renderCart();
}

function removeFromCart(productId) {
  cartProducts = cartProducts.filter((product) => product.id !== productId);
  renderCart();
}

function clearCart() {
  cartProducts = cartProducts.filter((product) => false);
  renderCart();
}

renderProducts();
renderCart();

clearButton.addEventListener("click", clearCart);
