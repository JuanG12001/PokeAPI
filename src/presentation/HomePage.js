import { ButtonPages } from "../components/ButtonPages";
import { CardSection } from "../components/CardSection";
import { HeroSection } from "../components/HeroSection";
import { PokedexSection } from "../components/PokedexSection";
import { SearchSection } from "../components/SearchSection";
import { Footer } from "../components/Footer";

export const HomePage = async () => {
  const container = document.createElement('div');

  const cardSectionContent = await CardSection();
  const heroSectionContent = await HeroSection();

  // Construir el contenedor sin usar innerHTML
  container.appendChild(heroSectionContent);
  container.appendChild(PokedexSection());
  container.appendChild(SearchSection());
  container.appendChild(cardSectionContent);
  container.appendChild(ButtonPages()); // Añadimos ButtonPages directamente como un nodo
  container.appendChild(Footer());
  
  // Agregar el enlace para volver arriba
  const scrollLink = document.createElement('a');
  scrollLink.href = "#top";
  scrollLink.className = "scroll";
  scrollLink.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
  container.appendChild(scrollLink);

  return container;
};
