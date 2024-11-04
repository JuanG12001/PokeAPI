import { ButtonPages } from "../components/ButtonPages";
import { CardSection } from "../components/CardSection";
import { HeroSection } from "../components/HeroSection";
import { PokedexSection } from "../components/PokedexSection";
import { SearchSection } from "../components/SearchSection";
import { Footer } from "../components/Footer";
import { fetchPokemons } from "../services/api";

export const HomePage = async () => {
  const container = document.createElement('div');

  const heroSectionContent = await HeroSection();
  const pokedexSection = PokedexSection();
  const searchSection = SearchSection();
  const footerSection = Footer();

  const cardSectionContent = document.createElement('section');
  
  const loadPokemons = async (page = 0) => {
    const offset = page * 20;
    const pokemons = await fetchPokemons(offset);
    
    cardSectionContent.innerHTML = ' ';      
    const newCardSection = CardSection(pokemons); 
    cardSectionContent.appendChild(newCardSection);

  };

  // Carga los Pokémones iniciales
  await loadPokemons(0);

  container.appendChild(heroSectionContent);
  container.appendChild(pokedexSection);
  container.appendChild(searchSection);
  container.appendChild(cardSectionContent);
  container.appendChild(ButtonPages(loadPokemons)); // Pasa la función para actualizar el offset
  container.appendChild(footerSection);
  
  const scrollLink = document.createElement('a');
  scrollLink.href = "#top";
  scrollLink.className = "scroll";
  scrollLink.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
  container.appendChild(scrollLink);

  return container;
};
