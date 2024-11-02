import "./PokedexSection.css";

export const PokedexSection = () => {
  // Crear la sección principal del Pokedex
  const section = document.createElement('section');
  section.className = 'pokedex container';
  section.id = 'top';

  // Crear el contenedor interno del Pokedex
  const pokedexContainer = document.createElement('div');
  pokedexContainer.className = 'pokedex__container container';

  // Crear el contenedor de texto
  const textContainer = document.createElement('div');
  textContainer.className = 'pokedex__container-text';

  // Crear y añadir el título y resumen
  const title = document.createElement('h2');
  title.className = 'pokedex__title';
  title.innerHTML = `¡Busca y captura a tus <span class="pokedex__title--color">3</span> Pokémon iniciales ahora!`;

  const summary = document.createElement('p');
  summary.className = 'pokedex__sumary';
  summary.textContent = 'Solo podrás capturar 3, y una vez los captures, no podrás cambiarlos. Abajo encontrarás todos los Pokémones se colocara automáticamente en sus casillas. ¡Asegúrate de elegir bien y comienza tu aventura!';

  // Añadir el título y resumen al contenedor de texto
  textContainer.appendChild(title);
  textContainer.appendChild(summary);

  // Añadir el contenedor de texto al contenedor principal
  pokedexContainer.appendChild(textContainer);

  // Crear el contenedor de contenido
  const contentContainer = document.createElement('div');
  contentContainer.className = 'pokedex__container-content';

  // Crear el contenedor de la imagen
  const imageContainer = document.createElement('div');
  imageContainer.className = 'pokedex__cotainer-img';

  const image = document.createElement('img');
  image.className = 'pokedex__img';
  image.src = '/src/assets/pj-pokedex.png';
  image.alt = '';

  // Añadir la imagen al contenedor de imagen
  imageContainer.appendChild(image);

  // Crear el contenedor para los Pokémon
  const pokemonContainer = document.createElement('div');
  pokemonContainer.className = 'pokedex__cantainer-pokemon';

  // Crear contenedores para los Pokémon
  for (let i = 1; i <= 3; i++) {
    const pokemonContaniner = document.createElement('div');
    pokemonContaniner.className = 'pokedex__pokemon-contaniner';

    const pokemonImage = document.createElement('img');
    pokemonImage.className = `pokedex__pokemon pokemon-${i}`;
    pokemonImage.src = '/src/assets/pokeball.png';
    pokemonImage.alt = '';

    // Añadir la imagen del Pokémon al contenedor
    pokemonContaniner.appendChild(pokemonImage);
    pokemonContainer.appendChild(pokemonContaniner);
  }

  // Añadir la imagen y el contenedor de Pokémon al contenedor de contenido
  contentContainer.appendChild(imageContainer);
  contentContainer.appendChild(pokemonContainer);

  // Añadir el contenedor de contenido al contenedor principal
  pokedexContainer.appendChild(contentContainer);

  // Añadir el contenedor principal a la sección
  section.appendChild(pokedexContainer);

  return section; // Devolver el nodo DOM
};
