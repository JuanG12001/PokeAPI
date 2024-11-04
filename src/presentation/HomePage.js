import { ButtonPages } from "../components/ButtonPages";
import { CardSection } from "../components/CardSection";
import { HeroSection } from "../components/HeroSection";
import { PokedexSection } from "../components/PokedexSection";
import { SearchSection } from "../components/SearchSection";
import { Footer } from "../components/Footer";
import { fetchPokemons, fetchAllPokemonNames } from "../services/api";

export const HomePage = async () => {
  const container = document.createElement('div');
  const heroSectionContent = await HeroSection();
  const pokedexSection = PokedexSection();
  const footerSection = Footer();

  const cardSectionContent = document.createElement('section');
  let allPokemons = [];   // Lista de todos los Pokémon
  let currentPokemons = [];  // Pokémon en la página actual

  // Función para cargar todos los Pokémon (solo nombres y URLs) al inicio
  const loadAllPokemons = async () => {
    allPokemons = await fetchAllPokemonNames();
  };

  // Función para cargar la página actual y mostrar los Pokémon en pantalla
  const loadPokemons = async (page = 0) => {
    const offset = page * 20;
    currentPokemons = await fetchPokemons(offset);
    renderPokemons(currentPokemons);
  };

  // Función para renderizar los Pokémon
  const renderPokemons = (pokemons) => {
    cardSectionContent.innerHTML = '';  
    const newCardSection = CardSection(pokemons); 
    cardSectionContent.appendChild(newCardSection);
  };

  // Función de búsqueda entre todos los Pokémon
  const handleSearch = async (searchTerm) => {
    if (searchTerm) {
      const pokemonMatch = allPokemons.find(pokemon => pokemon.name.toLowerCase() === searchTerm);
      if (pokemonMatch) {
        // Buscar detalles del Pokémon encontrado
        const response = await fetch(pokemonMatch.url);
        const pokemonDetails = await response.json();
        renderPokemons([pokemonDetails]); // Muestra solo el Pokémon encontrado
      } else {
        renderPokemons([]); // No se encontró el Pokémon
      }
    } else {
      renderPokemons(currentPokemons); // Mostrar Pokémon de la página actual si no hay término de búsqueda
    }
  };

  // Cargar todos los Pokémon al iniciar
  await loadAllPokemons();
  await loadPokemons(0); // Cargar la primera página como inicio

  // Construir la estructura de la página
  container.appendChild(heroSectionContent);
  container.appendChild(pokedexSection);
  container.appendChild(SearchSection(handleSearch));  // Pasamos la función de búsqueda
  container.appendChild(cardSectionContent);
  container.appendChild(ButtonPages(loadPokemons));
  container.appendChild(footerSection);

  const scrollLink = document.createElement('a');
  scrollLink.href = "#top";
  scrollLink.className = "scroll";
  scrollLink.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
  container.appendChild(scrollLink);

  return container;
};
