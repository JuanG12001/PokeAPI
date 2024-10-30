import { fetchPokemons } from "../services/api";
import { Card } from "./Card";
import "./CardSection.css";

export const CardSection = async () => {
  const pokemons = await fetchPokemons();

  return `
    <section class="card container">
      <div class="card__auto-fit">
        ${pokemons.map(pokemon => Card(pokemon)).join('')}
      </div>
    </section>
  `;
};