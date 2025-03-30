function addToCart(productId, productName, price) {
    const quantity = document.getElementById('qty' + productId).value;
    if (quantity > 0) {
        // Holen des bestehenden Warenkorbs aus dem localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Hinzufügen des Produkts zum Warenkorb
        const cartItem = { productName, price, quantity };
        cart.push(cartItem);

        // Warenkorb im localStorage speichern
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
