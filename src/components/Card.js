import typeIcons from "../constants/typeIcons";
import { Button } from "./Button";
import "./Card.css";

export const Card = (pokemon) => {
  const color = pokemon.speciesData.color.name;

  const typeIconsList = pokemon.types.map(typeInfo => {
    const typeName = typeInfo.type.name;
    const iconSrc = typeIcons[typeName];
    return ` <li class="${typeName} card__type">
              <img class="card__type-img" src="${iconSrc}" alt="${typeName}">
              ${typeName}
             </li>`;
  }).join('');

  return `
    <article class="card__content container" style="background: linear-gradient(#09132c,${color});">
      <figure class="card__header">
        <img class="card__img" src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">
      </figure>

      <div class="card__container-text">
        <i class="fa-solid fa-circle"></i>
        <h2 class="card__title">${pokemon.name}</h2>
        <i class="fa-solid fa-circle"></i>
      </div>

      <ul class="card__type-container">
        ${typeIconsList}
      </ul>  
      
      <footer class="card__estadisticas">
          <div class="card__estadisticas-altura">
              <p class="card__altura">
                  ${Number.isInteger(pokemon.height / 10) 
                      ? (pokemon.height / 10) 
                      : (pokemon.height / 10).toFixed(1)} M
              </p> <!-- Altura en metros -->
              <span class="card__altura-icon"><i class="fa-solid fa-ruler"></i>Altura</span>
          </div>

          <div class="card__estadisticas-peso">
              <p class="card__peso">
                  ${Number.isInteger(pokemon.weight / 10) 
                      ? (pokemon.weight / 10) 
                      : (pokemon.weight / 10).toFixed(1)} KG
              </p> <!-- Peso en kilogramos -->
              <span class="card__peso-icon"><i class="fa-solid fa-dumbbell"></i>Peso</span>
          </div>
      </footer>

      ${Button()}
    </article>
  `;

};