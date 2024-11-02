export const fetchPokemons = async (offset = 0, limit = 9) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_POKEAPI_URL}?offset=${offset}&limit=${limit}`);
    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        const speciesResponse = await fetch(pokemonData.species.url);
        const speciesData = await speciesResponse.json();

        return { ...pokemonData, speciesData, types: pokemonData.types };
      })
    );

    return pokemonDetails;

  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return [];
  }
};
