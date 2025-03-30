window.onload = function() {
    // Holen des Warenkorbs aus dem localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsDiv = document.getElementById('cartItems');
    let totalPrice = 0;

    // Wenn der Warenkorb leer ist
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Dein Warenkorb ist leer.</p>";
        return;
    }

    // Warenkorb anzeigen
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <span>${item.productName} x${item.quantity} - €${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Entfernen</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        totalPrice += item.price * item.quantity;
    });

    // Gesamtpreis aktualisieren
    const totalPriceDiv = document.getElementById('totalPrice');
    totalPriceDiv.textContent = `Gesamtpreis: €${totalPrice.toFixed(2)}`;
};

// Funktion zum Entfernen eines Produkts aus dem Warenkorb
function removeFromCart(index) {
    // Holen des Warenkorbs aus dem localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Entfernen des Produkts
    cart.splice(index, 1);

    // Den Warenkorb im localStorage aktualisieren
    localStorage.setItem('cart', JSON.stringify(cart));

    // Die Seite neu laden, um den aktualisierten Warenkorb anzuzeigen
    window.location.reload();
}
