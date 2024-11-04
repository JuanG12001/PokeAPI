import "./SearchSection.css";

export const SearchSection = (onSearch) => {
  const section = document.createElement('section');
  section.className = 'search container';

  section.innerHTML = `
    <div class="search__container container">
      <div class="search__container-text-tipo">
        <div>
          <div class="search__container-name">
            <i class="search__icon-text fa-solid fa-magnifying-glass"></i> 
            <h3 class="search__title-type">Encuentre por pokémon:</h3>
          </div>
          <div class="search__container-input">
            <input class="search__input" type="search" id="searchInput" placeholder="Buscar Pokémon" />
            <i class="search__icon-input fa-solid fa-magnifying-glass"></i> 
          </div>
        </div>
      </div>
    </div>
  `;

  const searchInput = section.querySelector("#searchInput");
  
  // Evento de búsqueda
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    onSearch(searchTerm);
  });

  return section;
};
