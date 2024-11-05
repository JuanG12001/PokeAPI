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
  let allPokemons = [];   
  let currentPokemons = [];  

  const loadAllPokemons = async () => {
    allPokemons = await fetchAllPokemonNames();
  };

  const loadPokemons = async (page = 0) => {
    const offset = page * 20;
    currentPokemons = await fetchPokemons(offset);
    renderPokemons(currentPokemons);
  };

  const renderPokemons = (pokemons) => {
    cardSectionContent.innerHTML = '';  
    const newCardSection = CardSection(pokemons); 
    cardSectionContent.appendChild(newCardSection);
  };

  const handleSearch = async (searchTerm) => {
    if (searchTerm) {
      const pokemonMatch = allPokemons.find(pokemon => pokemon.name.toLowerCase() === searchTerm);
      if (pokemonMatch) {
        const response = await fetch(pokemonMatch.url);
        const pokemonDetails = await response.json();
        renderPokemons([pokemonDetails]); 
      } else {
        renderPokemons([]); 
      }
    } else {
      renderPokemons(currentPokemons); 
    }
  };

  await loadAllPokemons();
  await loadPokemons(0); 

  container.appendChild(heroSectionContent);
  container.appendChild(pokedexSection);
  container.appendChild(SearchSection(handleSearch));  
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
