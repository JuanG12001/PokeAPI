import "./PokedexSection.css";

export const PokedexSection = () => {
  const section = document.createElement('section');
  section.className = 'pokedex container';
  section.id = 'top';

  section.innerHTML = `
    <div class="pokedex__container container">
      <div class="pokedex__container-text">
        <h2 class="pokedex__title">
          ¡Busca y captura a tus <span class="pokedex__title--color">3</span> Pokémon iniciales ahora!
        </h2>
        <p class="pokedex__sumary">
          Solo podrás capturar 3, y una vez los captures, no podrás cambiarlos. 
          Abajo encontrarás todos los Pokémones se colocara automáticamente en sus casillas. 
          ¡Asegúrate de elegir bien y comienza tu aventura!
        </p>
      </div>

      <div class="pokedex__container-content">
        <div class="pokedex__cotainer-img">
          <img class="pokedex__img" src="/src/assets/pj-pokedex.png" alt="">
        </div>
        <div class="pokedex__cantainer-pokemon">
          ${[1, 2, 3].map(i => `
            <div class="pokedex__pokemon-contaniner">
              <img class="pokedex__pokemon pokemon-${i}" src="/src/assets/pokeball.png" alt="">
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  return section;
};
