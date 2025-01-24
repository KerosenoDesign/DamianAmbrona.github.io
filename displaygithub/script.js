// script.js

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        navbar.classList.add('hidden'); // Hide navbar
    } else {
        navbar.classList.remove('hidden'); // Show navbar
    }
    lastScrollY = window.scrollY;
});

// Smooth scroll for anchor links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
