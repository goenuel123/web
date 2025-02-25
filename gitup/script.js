document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateCart);
});

function updateCart() {
    let totalAmount = 0;
    let itemCount = 0;
    const cart = [];

    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        const price = parseFloat(checkbox.dataset.price);
        cart.push(checkbox.closest('.product').querySelector('p').innerText);
        totalAmount += price;
        itemCount++;
    });

    localStorage.setItem('cart', JSON.stringify({ items: cart, total: totalAmount }));

    document.getElementById('cartLink').innerText = `Warenkorb (${itemCount})`;
}

