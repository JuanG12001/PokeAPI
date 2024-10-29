
import "./PokedexSection.css";


export const PokedexSection = ()=>{

  return `
  
    <section class="pokedex container" id="top">
        
        <div class="pokedex__container container">
         
          <div class="pokedex__container-text">
            <h2 class="pokedex__title">¡Busca y captura a tus <span class="pokedex__title--color">3</span> Pokémon iniciales ahora!  </h2>
            <p class="pokedex__sumary">Solo podrás capturar 3, y una vez los captures, no podrás cambiarlos. Abajo encontrarás todos los  Pokémones se colocara automáticamente en sus casillas. ¡Asegúrate de elegir bien y comienza tu aventura!</p>
          </div>
          
          <div class="pokedex__container-content">
            
          <div class="pokedex__cotainer-img">
            <img class="pokedex__img" src="/src/assets/pj-pokedex.png" alt="">
          </div> 

          <div class="pokedex__cantainer-pokemon">

            <div class="pokedex__pokemon-contaniner"><img class="pokedex__pokemon pokemon-uno" src="/src/assets/pokeball.png" alt=""></div>
            <div class="pokedex__pokemon-contaniner"><img class="pokedex__pokemon pokemon-two" src="/src/assets/gengar.png" alt=""></div>
            <div class="pokedex__pokemon-contaniner"><img class="pokedex__pokemon pokemon-three" src="/src/assets/pokeball.png" alt=""></div>

          </div>

          </div>

        </div>

      </section>
  
  `


}