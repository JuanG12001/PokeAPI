



export const fetchPokemons = async () =>{

  try {
    const response = await fetch(import.meta.env.VITE_POKEAPI_URL)
    const data = await response.json()

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) =>{
      const pokemonResponse = await fetch(pokemon.url);
      return await pokemonResponse.json();  
      })
    )

    return pokemonDetails;

  } catch (error) {
     console.error("Error fetching Pokémon data:", error);
     return [];
  }

}


