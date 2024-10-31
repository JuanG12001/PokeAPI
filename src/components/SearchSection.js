
import "./SearchSection.css";

export const SearchSection = () =>{


  return `

  <section class="search container">

    <div class="search__container container">

        <div class="searh__container-text-tipo">
          
          <div>

              <div class="search__container-tipos">
                <i class="fa-regular fa-clipboard"></i> 
                <h3 class="search__title-type">Busqueda por tipo:</h3>
              </div>

              <ul class="tipo container">

                <span data-type="tipo-todos" class="search__icon-home"><i class="fa-solid fa-house-chimney"></i></span>
              
                <li class="tipo__container">
                  <button class="search__buttom" data-type="tipo-planta"><img class="search__img-icon" src="/src/assets/icon-bug.png" alt=""></button>
                </li>
              
              </ul>

          </div>
          
          
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

  </section>
  
  `

}