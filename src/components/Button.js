import "./Button.css";

export const Button = () => {
  // Crear el elemento del botón
  const button = document.createElement('button');
  button.className = 'buttom buttom--card buttom--animation';

  // Crear la imagen del ícono de la Pokébola
  const icon = document.createElement('img');
  icon.className = 'icon-pokeball';
  icon.src = '/src/assets/icon-pokeball.png';
  icon.alt = 'icon-pokeball';

  // Añadir la imagen al botón
  button.appendChild(icon);
  
  // Añadir el texto al botón
  button.appendChild(document.createTextNode('Capturar Pokémon'));

  return button; // Devolver el nodo DOM
};
