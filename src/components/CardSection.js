import { Card } from "./Card";
import "./CardSection.css";

export const CardSection = (pokemons) => {

  if (!pokemons || pokemons.length === 0) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error al cargar los pokemones.';
    return errorMessage;
  }

  const section = document.createElement('section');
  section.className = 'card container';

  const autoFitContainer = document.createElement('div');
  autoFitContainer.className = 'card__auto-fit';

  pokemons.forEach(pokemon => {
    const cardElement = Card(pokemon); 
    autoFitContainer.appendChild(cardElement);
  });

  section.appendChild(autoFitContainer);

  return section;
  
};
