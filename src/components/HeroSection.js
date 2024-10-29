import { Button } from "./button"
import { Redes } from "./Redes"
import "./HeroSection.css";



export const HeroSection = ()=>{

  return `

      <header class="home container">

          <h1 class="logo">PokéCap</h1>
          
          <div class="home__container container">
           
            <div class="home__img-container">
              <img class="home__img" src="/src/assets/gengar.png" alt="pokemon-gengar">
            </div> 

            <div class="home__texts-container">
                
              <h2 class="home__name-pokemon">Gengar</h2>
               
                <ul class="home__category">
                  <li class="ghost home__category-tipo">
                    <img class="home__icon" src="/src/assets/icon-fantasma.png" alt="">
                  </li>
                  <li class="poison home__category-tipo"> 
                    <img class="home__icon" src="/src/assets/icon-poison.png" alt="">
                  </li>
                </ul>   
                
                <p class="home__sumary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quo atque ex, ab repellat vitae, dolores ad quibusdam amet rerum fugit aliquam officia quis. Aliquam ut repellat quod excepturi iste!
                Reiciendis consectetur expedita odio nesciunt voluptatibus? Ut dolore aspernatur recusandae fuga nam soluta molestias excepturi nemo, eveniet commodi at obcaecati adipisci voluptatem quis magni? Omnis natus laboriosam inventore dignissimos ea!
                Magnam.</p>
                
                ${Button()}
                
                ${Redes()}

            </div> 

          </div>

      </header>

  `

}