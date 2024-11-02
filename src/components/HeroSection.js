import { Button } from "./Button";
import { Redes } from "./Redes";
import "./HeroSection.css";
import { pokemonHeroSection } from "../services/apiHeroSection";
import typeIcons from "../constants/typeIcons";
import pokemoncolors from "../constants/pokemonColors";

export const HeroSection = async () => {
  const pokemonHero = await pokemonHeroSection();

  if (!pokemonHero) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error al cargar la información del Pokémon.';
    return errorMessage;
  }

  const { name, sprites, textSumary, types } = pokemonHero;
  const sumary = textSumary;

  const typeIconsList = types.map(typeInfo => {
    const typeName = typeInfo.type.name;
    const iconSrc = typeIcons[typeName];

    const listItem = document.createElement('li');
    listItem.className = `${typeName} home__category-tipo`;
    listItem.innerHTML = `
      <img class="home__icon" src="${iconSrc}" alt="${typeName}">
    `;
    return listItem;
  });

  const typeName = types[0]?.type.name;  
  const colorPokemon = pokemoncolors[typeName];
  const colorPokemonStyle = `background: linear-gradient(#09132c, ${colorPokemon})`;

  const header = document.createElement('header');
  header.className = 'home container';
  header.style = colorPokemonStyle;

  const logo = document.createElement('h1');
  logo.className = 'logo';
  logo.textContent = 'PokéCap';
  header.appendChild(logo);

  const container = document.createElement('div');
  container.className = 'home__container container';

  const imgContainer = document.createElement('div');
  imgContainer.className = 'home__img-container';
  const img = document.createElement('img');
  img.className = 'home__img';
  img.src = sprites.other.home.front_default;
  img.alt = name;
  imgContainer.appendChild(img);

  const textsContainer = document.createElement('div');
  textsContainer.className = 'home__texts-container';

  const nameElement = document.createElement('h2');
  nameElement.className = 'home__name-pokemon';
  nameElement.textContent = name;
  textsContainer.appendChild(nameElement);

  const ul = document.createElement('ul');
  ul.className = 'home__category';
  typeIconsList.forEach(typeItem => ul.appendChild(typeItem)); // Añadir los nodos de tipos
  textsContainer.appendChild(ul);

  const summaryElement = document.createElement('p');
  summaryElement.className = 'home__sumary';
  summaryElement.textContent = sumary;
  textsContainer.appendChild(summaryElement);

  // Añadir botones y redes sociales
  textsContainer.appendChild(Button());
  textsContainer.appendChild(Redes());

  // Agregar contenedores de imagen y texto al contenedor principal
  container.appendChild(imgContainer);
  container.appendChild(textsContainer);

  // Añadir el contenedor principal al header
  header.appendChild(container);

  return header; // Devolver el nodo DOM
};
