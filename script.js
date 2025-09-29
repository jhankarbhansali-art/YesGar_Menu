// Menu Items Array
let menuItems = [
    {name:"Pizza", price:300},
    {name:"Pasta", price:250},
    {name:"Burger", price:150},
    {name:"Sandwich", price:120},
    {name:"French Fries", price:100},
    {name:"Momos", price:130},
    {name:"Rolls", price:90}
];

// Display Menu in Cards (menu.html)
const menuList = document.getElementById('menu-list');
function displayMenu(items) {
    if(!menuList) return;
    menuList.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('menu-item');
        div.innerHTML = `<h3>${item.name}</h3><p>₹${item.price}</p><button onclick="addToCart('${item.name}',${item.price})">Add to Cart</button>`;
        menuList.appendChild(div);
    });
}
displayMenu(menuItems);

// Search Function
const searchBox = document.getElementById('search-box');
if(searchBox){
    searchBox.addEventListener('input', function () {
        const term = searchBox.value.toLowerCase();
        const filtered = menuItems.filter(i=>i.name.toLowerCase().includes(term));
        displayMenu(filtered);
    });
}

// Cart
let cart = [];
function addToCart(name, price){
    cart.push({name, price});
    alert(`${name} added to cart`);
}

// Checkout Form
const checkoutForm = document.getElementById('checkout-form');
if(checkoutForm){
    checkoutForm.addEventListener('submit', function(e){
        e.preventDefault();
        let name = document.getElementById('customer-name').value;
        let address = document.getElementById('customer-address').value;
        let phone = document.getElementById('customer-phone').value;
        let items = cart.map(i=>i.name + " (₹"+i.price+")").join(", ");
        let total = cart.reduce((sum,i)=>sum+i.price,0);
        let msg = `Hello, my name is ${name}. I want to order: ${items}. Total: ₹${total}. Address: ${address}. Phone: ${phone}.`;
        let url = `https://wa.me/917424815132?text=${encodeURIComponent(msg)}`;
        window.open(url,'_blank');
    });
}

// Smooth Scroll Nav Links
document.querySelectorAll('nav a').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = this.getAttribute('href');
        window.location.href = target;
    });
});