import "./PokedexSection.css";
import { loadPokemonsFromStorage, savePokemonToStorage } from '../store/pokedexStorage'; // Importar la función

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
                    Abajo encontrarás todos los Pokémones se colocará automáticamente en sus casillas. 
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
                            <img class="pokedex__pokemon pokemon-${i}" src="/src/assets/pokeball.png" alt="pokemon-${i}">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    const addPokemonToPokedex = (pokemonImage, pokemonName) => {
        const emptySlots = section.querySelectorAll('.pokedex__pokemon[src="/src/assets/pokeball.png"]');
        if (emptySlots.length > 0) {
            emptySlots[0].src = pokemonImage;
            emptySlots[0].alt = pokemonName;
        } else {
            console.log("No quedan casillas disponibles para capturar más Pokémon.");
        }
    };

    const loadStoredPokemons = () => {
        const storedPokemons = loadPokemonsFromStorage();
        storedPokemons.forEach(pokemon => {
            addPokemonToPokedex(pokemon.pokemonImage, pokemon.name);
        });
    };

    document.addEventListener('capturePokemon', (event) => {
        const { pokemonImage, pokemonName } = event.detail;
        addPokemonToPokedex(pokemonImage, pokemonName);
        
        savePokemonToStorage({ pokemonImage, name: pokemonName });
    });

    loadStoredPokemons();

    return section;
};
