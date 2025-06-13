// Get cart from localStorage or initialize empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count in navbar
function updateCartCount() {
  const countElement = document.getElementById('cart-count');
  countElement.textContent = cart.length;
}

// Function to add item to cart
function addToCart(product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${product.name} added to cart!`);
}

// Sample product object usage
// addToCart({ id: 1, name: "Nike Sneakers", price: 50 });

// Call this once page loads to initialize count
document.addEventListener('DOMContentLoaded', updateCartCount);
