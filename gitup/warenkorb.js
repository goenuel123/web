window.onload = function () {
    const cartData = JSON.parse(localStorage.getItem('cart')) || { items: [], total: 0 };
    const cartItemsDiv = document.getElementById('cartItems');

    if (cartData.items.length === 0) {
        cartItemsDiv.innerHTML = '<p>Ihr Warenkorb ist leer.</p>';
    } else {
        cartData.items.forEach(item => {
            const itemDiv = document.createElement('p');
            itemDiv.textContent = item;
            cartItemsDiv.appendChild(itemDiv);
        });
    }

    document.getElementById('totalAmount').textContent = `€${cartData.total.toFixed(2)}`;
};
