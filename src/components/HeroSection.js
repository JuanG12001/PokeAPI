import { Button } from "./Button";
import { Redes } from "./Redes";
import "./HeroSection.css";
import { pokemonHeroSection } from "../services/apiHeroSection";
import typeIcons from "../constants/typeIcons";

export const HeroSection = async () => {
  const pokemonHero = await pokemonHeroSection();

  if (!pokemonHero) {
    return `<p>Error al cargar la información del Pokémon.</p>`;
  }

  const { name, sprites, speciesData, textSumary, types } = pokemonHero;
  const sumary = textSumary;
  const color = speciesData.color.name;

  const typeIconsList = types.map(typeInfo => {
    const typeName = typeInfo.type.name;
    const iconSrc = typeIcons[typeName];
    return `<li class="${typeName} home__category-tipo">
              <img class="home__icon" src="${iconSrc}" alt="${typeName}">
            </li>`;
  }).join('');

  return `
    <header class="home container" style="background: linear-gradient(${color}, #1c0217);">
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
          
          ${Button()}
          
          ${Redes()}

        </div> 

      </div>

    </header>
  `;
};
