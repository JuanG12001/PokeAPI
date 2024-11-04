


const STORAGE_KEY = 'pokedex'; 

export const savePokemonToStorage = (pokemon) => {

    const currentPokedex = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    
    if (!currentPokedex.some(p => p.name === pokemon.name)) {
        currentPokedex.push(pokemon);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentPokedex));
        console.log('Pokémon guardado:', pokemon);
    } else {
        console.log('El Pokémon ya existe en el Pokedex:', pokemon.name);
    }
};

export const loadPokemonsFromStorage = () => {
    const storedPokemons = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    console.log('Pokémon cargados desde storage:', storedPokemons);
    return storedPokemons; 
};
