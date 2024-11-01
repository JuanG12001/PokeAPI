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

  container.innerHTML = `
    ${heroSectionContent}
    ${PokedexSection()}
    ${SearchSection()}
    ${cardSectionContent}
    ${Footer()}
    <a href="#top" class="scroll">
        <i class="fa-solid fa-chevron-up"></i>
    </a>
  `;

  container.appendChild(ButtonPages());

  return container;
};