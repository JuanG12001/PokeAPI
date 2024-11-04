import pokemoncolors from "../constants/pokemonColors";
import typeIcons from "../constants/typeIcons";
import { Button } from "./Button";
import "./Card.css";

export const Card = (pokemon) => {
  if (!pokemon) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error al cargar la información del Pokémon.';
    return errorMessage;
  }

  const typeIconsList = pokemon.types.map(typeInfo => {
    const typeName = typeInfo.type.name;
    const iconSrc = typeIcons[typeName];

    const typeItem = document.createElement('li');
    typeItem.className = `${typeName} card__type`;
    typeItem.innerHTML = `
      <img class="card__type-img" src="${iconSrc}" alt="${typeName}">
      ${typeName}
    `;
    return typeItem;
  });

  const typeName = pokemon.types[0]?.type.name;  
  const colorPokemon = pokemoncolors[typeName];
  const colorPokemonStyle = `background: linear-gradient(#09132c, ${colorPokemon})`;

  const article = document.createElement('article');
  article.className = 'card__content container';
  article.style = colorPokemonStyle;

  article.innerHTML = `
    <figure class="card__header">
      <img class="card__img" src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">
    </figure>

    <div class="card__container-text">
      <i class="fa-solid fa-circle"></i>
      <h2 class="card__title">${pokemon.name}</h2>
      <i class="fa-solid fa-circle"></i>
    </div>
  `;

  const ul = document.createElement('ul');
  ul.className = 'card__type-container';
  typeIconsList.forEach(typeItem => ul.appendChild(typeItem));
  article.appendChild(ul);

  const footer = document.createElement('footer');
  footer.className = 'card__estadisticas';

  const alturaDiv = document.createElement('div');
  alturaDiv.className = 'card__estadisticas-altura';
  alturaDiv.innerHTML = `
    <p class="card__altura">
      ${Number.isInteger(pokemon.height / 10) 
          ? (pokemon.height / 10) 
          : (pokemon.height / 10).toFixed(1)} M
    </p>
    <span class="card__altura-icon"><i class="fa-solid fa-ruler"></i>Altura</span>
  `;
  
  const pesoDiv = document.createElement('div');
  pesoDiv.className = 'card__estadisticas-peso';
  pesoDiv.innerHTML = `
    <p class="card__peso">
      ${Number.isInteger(pokemon.weight / 10) 
          ? (pokemon.weight / 10) 
          : (pokemon.weight / 10).toFixed(1)} KG
    </p>
    <span class="card__peso-icon"><i class="fa-solid fa-dumbbell"></i>Peso</span>
  `;

  const handleCardClick = () => {
    const captureEvent = new CustomEvent('capturePokemon', { 
      detail: { 
        pokemonImage: pokemon.sprites.other.home.front_default,
        pokemonName: pokemon.name 
      } 
    });
    document.dispatchEvent(captureEvent);
  };


  footer.appendChild(alturaDiv);
  footer.appendChild(pesoDiv);
  article.appendChild(footer);
  article.appendChild(Button({ context: 'card', onClick: handleCardClick }));

  return article; 
};
