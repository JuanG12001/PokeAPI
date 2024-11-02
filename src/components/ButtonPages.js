import "./ButtonPages.css";

export const ButtonPages = (onPageChange) => {
  const section = document.createElement('section');
  section.className = 'pages container';

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

  const counterElement = section.querySelector('.pages__number');
  const incrementButton = section.querySelector('.pages__plus');
  const decrementButton = section.querySelector('.pages__minus');

  let count = 0;

  const updateCounter = (value) => {
    count += value;
    if (count < 0) count = 0;  // Evita que el contador sea negativo
    counterElement.textContent = count;
    onPageChange(count); // Emite el nuevo offset para actualizar los Pokémones
  };

  incrementButton.addEventListener('click', () => updateCounter(1));
  decrementButton.addEventListener('click', () => updateCounter(-1));

  return section;
};
