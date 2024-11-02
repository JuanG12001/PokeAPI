import "./PokedexSection.css";

export const PokedexSection = () => {
  const section = document.createElement('section');
  section.className = 'pokedex container';
  section.id = 'top';

  const pokedexContainer = document.createElement('div');
  pokedexContainer.className = 'pokedex__container container';

  const textContainer = document.createElement('div');
  textContainer.className = 'pokedex__container-text';

  const title = document.createElement('h2');
  title.className = 'pokedex__title';
  title.innerHTML = `¡Busca y captura a tus <span class="pokedex__title--color">3</span> Pokémon iniciales ahora!`;

  const summary = document.createElement('p');
  summary.className = 'pokedex__sumary';
  summary.textContent = 'Solo podrás capturar 3, y una vez los captures, no podrás cambiarlos. Abajo encontrarás todos los Pokémones se colocara automáticamente en sus casillas. ¡Asegúrate de elegir bien y comienza tu aventura!';

  textContainer.appendChild(title);
  textContainer.appendChild(summary);

  pokedexContainer.appendChild(textContainer);

  const contentContainer = document.createElement('div');
  contentContainer.className = 'pokedex__container-content';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'pokedex__cotainer-img';

  const image = document.createElement('img');
  image.className = 'pokedex__img';
  image.src = '/src/assets/pj-pokedex.png';
  image.alt = '';

  imageContainer.appendChild(image);

  const pokemonContainer = document.createElement('div');
  pokemonContainer.className = 'pokedex__cantainer-pokemon';

  for (let i = 1; i <= 3; i++) {
    const pokemonContaniner = document.createElement('div');
    pokemonContaniner.className = 'pokedex__pokemon-contaniner';

    const pokemonImage = document.createElement('img');
    pokemonImage.className = `pokedex__pokemon pokemon-${i}`;
    pokemonImage.src = '/src/assets/pokeball.png';
    pokemonImage.alt = '';

    pokemonContaniner.appendChild(pokemonImage);
    pokemonContainer.appendChild(pokemonContaniner);
  }

  contentContainer.appendChild(imageContainer);
  contentContainer.appendChild(pokemonContainer);

  pokedexContainer.appendChild(contentContainer);

  section.appendChild(pokedexContainer);

  return section; 
};
