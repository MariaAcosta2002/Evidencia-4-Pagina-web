// Funcionalidad para mostrar las tarjetas de inicio de sesión y registro
document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('login-card').style.display = 'block';
    document.getElementById('signup-card').style.display = 'none';
});

document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('signup-card').style.display = 'block';
    document.getElementById('login-card').style.display = 'none';
});

// Funcionalidad para el botón de búsqueda de productos
document.getElementById('search-btn').addEventListener('click', function() {
    let query = document.getElementById('product-search').value.toLowerCase();
    let products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        let name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Array para almacenar los productos en el carrito
let cartItems = [];

// Funcionalidad para agregar productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        let productItem = this.parentElement;
        let productName = productItem.getAttribute('data-name');
        let productPrice = productItem.querySelector('.price').textContent;

        // Agregar producto al carrito
        cartItems.push({ name: productName, price: productPrice });

        // Actualizar contador del carrito
        document.getElementById('cart-count').textContent = cartItems.length;

        alert(`${productName} ha sido agregado al carrito.`);
    });
});

// Funcionalidad para mostrar los productos en el carrito
document.getElementById('cart').addEventListener('click', function() {
    if (cartItems.length > 0) {
        let cartDetails = 'Productos en el carrito:\n\n';
        cartItems.forEach(item => {
            cartDetails += `${item.name} - ${item.price}\n`;
        });
        alert(cartDetails);
    } else {
        alert('El carrito está vacío.');
    }
});
