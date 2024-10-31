export const pokemonHeroSection = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_POKEHERO_URL);
    const pokeHero = await response.json();

    const speciesResponse = await fetch(pokeHero.species.url);
    const speciesData = await speciesResponse.json();

    const textEntry = speciesData.flavor_text_entries.find(entry => 
      entry.language.name === "es"
    );
    const textSumary = textEntry ? textEntry.flavor_text : "No description available.";

    return { ...pokeHero, speciesData, textSumary, types: pokeHero.types };

  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return null;
  }
};
 