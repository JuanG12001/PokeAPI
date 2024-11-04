import { Button } from "./Button";
import { Redes } from "./Redes";
import "./HeroSection.css";
import { pokemonHeroSection } from "../services/apiHeroSection";
import typeIcons from "../constants/typeIcons";
import pokemoncolors from "../constants/pokemonColors";

export const HeroSection = async () => {
  const pokemonHero = await pokemonHeroSection();

  if (!pokemonHero) {
    return `<p>Error al cargar la información del Pokémon.</p>`;
  }

  const { name, sprites, textSumary, types } = pokemonHero;
  const sumary = textSumary;

  const typeIconsList = types.map(typeInfo => {
    const typeName = typeInfo.type.name;
    const iconSrc = typeIcons[typeName];
    return `<li class="${typeName} home__category-tipo">
              <img class="home__icon" src="${iconSrc}" alt="${typeName}">
            </li>`;
  }).join('');

  const typeName = types[0]?.type.name;  
  const colorPokemon = pokemoncolors[typeName];
  const colorPokemonStyle = `style="background: linear-gradient(#09132c, ${colorPokemon})"`;

  const homeDiv = document.createElement('div')

  homeDiv.innerHTML = `
    <header class="home container" ${colorPokemonStyle};">
      <h1 class="logo">PokéCap</h1>
      
      <div class="home__container container">
       
        <div class="home__img-container">
          <img class="home__img" src="${sprites.other.home.front_default}" alt="${name}">
        </div> 

        <div class="home__texts-container">
            
          <h2 class="home__name-pokemon">${name}</h2>
           
          <ul class="home__category">
            ${typeIconsList} 
          </ul>   
          
          <p class="home__sumary">${sumary}</p>
          

          <div class = "home__button-components"></div>
          <div class = "home__redes-components"></div>
        
        </div> 

      </div>

    </header>
  `;


  const handleCardClick = () => {
    const pokemonImage = document.querySelector('.home__img').src;
    const captureEvent = new CustomEvent('capturePokemon', { detail: { pokemonImage } });
    document.dispatchEvent(captureEvent);
  };
  
  const redesContainer = homeDiv.querySelector('.home__redes-components');
  redesContainer.appendChild(Redes()); 

  const buttonContainer = homeDiv.querySelector('.home__button-components');
  buttonContainer.appendChild(Button({ context: 'home', onClick: handleCardClick })); 

  return homeDiv

  
};