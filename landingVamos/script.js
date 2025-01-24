// Hide and show navbar on scroll with content transition
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const navbarContent = document.querySelector('.navbar .container');
const navbarTransitionClass = 'navbar-transition';

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.top = '0'; // Ensure navbar is visible at the top of the page
    navbarContent.classList.remove(navbarTransitionClass);
    return;
  }

  if (currentScroll > lastScroll) {
    navbar.style.top = '-80px'; // Hide navbar when scrolling down
    navbarContent.classList.add(navbarTransitionClass);
  } else {
    navbar.style.top = '0'; // Show navbar when scrolling up
    navbarContent.classList.remove(navbarTransitionClass);
  }

  lastScroll = currentScroll;
});

// Smooth scrolling for internal links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add 'visible' class to elements when they come into view
function addVisibilityClassOnScroll() {
  const elements = document.querySelectorAll('.visible-on-scroll');

  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (elementTop < windowHeight - 50) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', addVisibilityClassOnScroll);

// Trigger visibility check on page load
addVisibilityClassOnScroll();

 // Texto completo que se animará
  const text = `Nuestras sesiones de jazz jam son un encuentro donde músicos se unen para tocar música no escrita. Surgieron en los años 30, desafiando el monopolio comercial de la música.El jazz ha sido, desde sus inicios, un campo de exploración para aquellos que buscan una forma de expresión más allá de las reglas impuestas por la industria musical. Como afirmaba Miles Davis, "El jazz es la música más libre que existe, donde el error es parte de la experiencia, no un obstáculo". 
`;

  const animatedTextElement = document.getElementById('animated-text');
  let charIndex = 0; // Índice del carácter actual

  // Función que escribe el texto progresivamente
  function typeText() {
    if (charIndex < text.length) {
      animatedTextElement.textContent += text.charAt(charIndex); // Añade el carácter actual
      charIndex++;
      setTimeout(typeText, 40); // Controla la velocidad del efecto (50ms por carácter)
    }
  }

  // Inicia la animación cuando el contenido de la página esté listo
  document.addEventListener('DOMContentLoaded', () => {
    typeText();
  });

  document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentSlide = 0;

    // Función para actualizar el desplazamiento del carrusel
    function updateCarousel() {
      const offset = -currentSlide * 100; // Calcula el desplazamiento
      carouselContainer.style.transform = `translateX(${offset}%)`;
    }

  });