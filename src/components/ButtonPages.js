import "./ButtonPages.css";

export const ButtonPages = () => {
  // Crear el contenedor de la sección
  const section = document.createElement('section');
  section.className = 'pages container';

  // Crear el contenido de la sección con botones y contador
  section.innerHTML = `
    <div class="pages__container">

      <div class="pages__minus-button pages__minus">
        <i class="fa-solid fa-minus"></i>
      </div>

      <h3 class="pages__number">0</h3>

      <div class="pages__minus-button pages__plus">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>
  `;

  // Seleccionar el elemento del contador y los botones
  const counterElement = section.querySelector('.pages__number');
  const incrementButton = section.querySelector('.pages__plus');
  const decrementButton = section.querySelector('.pages__minus');

  // Inicializar el valor del contador
  let count = 0;

  // Función para actualizar el contador
  const updateCounter = (value) => {
    count += value;
    counterElement.textContent = count;
  };

  // Agregar eventos de clic a los botones
  incrementButton.addEventListener('click', () => updateCounter(1));
  decrementButton.addEventListener('click', () => updateCounter(-1));

  // Devolver el elemento `section` en lugar de una cadena
  return section;
};