import { fetchPokemons } from "../services/api";
import { Card } from "./Card";
import "./CardSection.css";

export const CardSection = async () => {
  const pokemons = await fetchPokemons();

  if (!pokemons) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error al cargar los pokemones.';
    return errorMessage;
  }

  // Crear la sección principal
  const section = document.createElement('section');
  section.className = 'card container';

  // Crear el contenedor para los Pokémon
  const autoFitContainer = document.createElement('div');
  autoFitContainer.className = 'card__auto-fit';

  // Crear cada tarjeta de Pokémon y añadirla al contenedor
  pokemons.forEach(pokemon => {
    const cardElement = Card(pokemon); // Asumimos que Card devuelve un nodo DOM
    autoFitContainer.appendChild(cardElement);
  });

  // Añadir el contenedor de tarjetas a la sección
  section.appendChild(autoFitContainer);

  return section; // Devolver el nodo DOM
};