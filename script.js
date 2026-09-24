
let cart = [];

// ADD TO CART
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    alert(name + " added to cart!");

    displayCart();
}


// DISPLAY CART
function displayCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.innerHTML = "Total: $0";
        return;
    }

    let message = "";
    let total = 0;

    cart.forEach(function(product, index) {
        message += `
            <div class="cart-item">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
        `;

        total += product.price;
    });

    cartItems.innerHTML = message;
    cartTotal.innerHTML = "Total: $" + total;
}


// REMOVE ITEM
function removeFromCart(index) {
    cart.splice(index, 1);

    displayCart();
}


// CLEAR CART
function clearCart() {
    cart = [];

    displayCart();

    alert("Your cart has been cleared.");
}


// CHECKOUT ON WHATSAPP
function checkoutWhatsApp() {

    if (cart.length === 0) {
        alert("Your cart is empty. Please add a product first.");
        return;
    }

    let message = "Hello Gyan Fashion! 👋\n\n";
    message += "I would like to order:\n\n";

    let total = 0;

    cart.forEach(function(product) {

        message += product.name + " - $" + product.price + "\n";

        total += product.price;
    });

    message += "\nTotal: $" + total;
    message += "\nLocation: Accra, Ghana";

    let phone = "233240160705";

    let whatsappLink =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappLink, "_blank");
}


// SHOW CART WHEN PAGE LOADS
displayCart();
function addShirtToCart() {
    let size = document.getElementById("shirt-size").value;
    let color = document.getElementById("shirt-color").value;

    let productName = "Classic T-Shirt (" + size + " ," + color + ")";
    addToCart(productName, 18);
}