// Function for that button you'll probably forget to link to a real POS system
function orderNow() {
alert("Order received! Give us a minute, we're currently under a lot of pressure.");
console.log("User clicked order. Hope they have money.");
}

// Simple scroll effect for the nav
window.addEventListener('scroll', () => {
const nav = document.querySelector('nav');
if (window.scrollY > 50) {
nav.style.backgroundColor = '#1a1514';
} else {
nav.style.backgroundColor = '#332a28';
}
});
