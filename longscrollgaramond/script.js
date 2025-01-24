const cursor = document.getElementById('cursor');

// Detecta el movimiento del ratón
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX - 10}px`; // Centra el círculo en el puntero
  cursor.style.top = `${e.pageY - 10}px`;
  
  // Detecta el color de fondo debajo del cursor
  const elementAtCursor = document.elementFromPoint(e.clientX, e.clientY);
  const bgColor = window.getComputedStyle(elementAtCursor).backgroundColor;

  // Cambia el color del círculo para garantizar contraste
  if (bgColor === 'rgb(255, 0, 0)') { // Color rojo en RGB
    cursor.style.backgroundColor = 'white';
  } else {

  }
});