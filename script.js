
function addToCart(slug, name, price, img) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let existing = cart.find(item => item.slug === slug);
    if(existing){
        existing.qty += 1;
    }else{
        cart.push({slug, name, price, img, qty:1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " added to cart!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let tbody = document.getElementById('cart-body');
    let totalSpan = document.getElementById('cart-total');
    if(!tbody) return;
    tbody.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `<td><img src="${item.img}" alt="" style="width:60px;height:80px;object-fit:cover;border-radius:4px;"></td>
                         <td>${item.name}</td>
                         <td>${item.price}</td>
                         <td>${item.qty}</td>`;
        tbody.appendChild(row);
        total += parseInt(item.price.replace(/\D/g,'')) * item.qty;
    });
    totalSpan.innerText = "₹" + total;
}

function clearCart(){
    localStorage.removeItem('cart');
    loadCart();
}
