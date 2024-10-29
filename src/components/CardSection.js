
import "./CardSection.css";
import { Button } from "./Button";


export const CardSection = () =>{

  return `
  
  <section class="card container" >

    <div class="card__auto-fit">

      <article class="card__content container">

          <figure class="card__header">
            <img class="card__img" src="/src/assets/gengar.png" alt="imagen de pokemon">
          </figure>

            <div class="card__container-text">
              <i class="fa-solid fa-circle"></i>
              <h2 class="card__title">Gengar</h2>
              <i class="fa-solid fa-circle"></i>
            </div>
            
            
            <ul class="card__type-container">
              <li class="ghost card__type">
                  <img class="card__type-img" src="/src/assets/icon-fantasma.png" alt="">
                  ghost
              </li>
              <li class="poison card__type">
                  <img class="card__type-img" src="/src/assets/icon-poison.png" alt="">
                  Poison
              </li>
            </ul>  

            <footer class="card__estadisticas">

              <div class="card__estadisticas-altura">
                <p class="card__altura">0.5 M</p>
                <span class="card__altura-icon"><i class="fa-solid fa-ruler"></i>Altura</span>
              </div>

              <div class="card__estadisticas-peso">
                <p class="card__peso">40.5 KG</p>
                <span class="card__peso-icon"><i class="fa-solid fa-dumbbell"></i>Peso</span>
              </div>
              
            </footer>

            ${Button()}

        </article>

        <article class="card__content container">

          <figure class="card__header">
            <img class="card__img" src="/src/assets/gengar.png" alt="imagen de pokemon">
          </figure>

            <div class="card__container-text">
              <i class="fa-solid fa-circle"></i>
              <h2 class="card__title">Gengar</h2>
              <i class="fa-solid fa-circle"></i>
            </div>
            
            
            <ul class="card__type-container">
              <li class="ghost card__type">
                  <img class="card__type-img" src="/src/assets/icon-fantasma.png" alt="">
                  ghost
              </li>
              <li class="poison card__type">
                  <img class="card__type-img" src="/src/assets/icon-poison.png" alt="">
                  Poison
              </li>
            </ul>  

            <footer class="card__estadisticas">

              <div class="card__estadisticas-altura">
                <p class="card__altura">0.5 M</p>
                <span class="card__altura-icon"><i class="fa-solid fa-ruler"></i>Altura</span>
              </div>

              <div class="card__estadisticas-peso">
                <p class="card__peso">40.5 KG</p>
                <span class="card__peso-icon"><i class="fa-solid fa-dumbbell"></i>Peso</span>
              </div>
              
            </footer>

            ${Button()}

        </article>


        <article class="card__content container">

          <figure class="card__header">
            <img class="card__img" src="/src/assets/gengar.png" alt="imagen de pokemon">
          </figure>

            <div class="card__container-text">
              <i class="fa-solid fa-circle"></i>
              <h2 class="card__title">Gengar</h2>
              <i class="fa-solid fa-circle"></i>
            </div>
            
            
            <ul class="card__type-container">
              <li class="ghost card__type">
                  <img class="card__type-img" src="/src/assets/icon-fantasma.png" alt="">
                  ghost
              </li>
              <li class="poison card__type">
                  <img class="card__type-img" src="/src/assets/icon-poison.png" alt="">
                  Poison
              </li>
            </ul>  

            <footer class="card__estadisticas">

              <div class="card__estadisticas-altura">
                <p class="card__altura">0.5 M</p>
                <span class="card__altura-icon"><i class="fa-solid fa-ruler"></i>Altura</span>
              </div>

              <div class="card__estadisticas-peso">
                <p class="card__peso">40.5 KG</p>
                <span class="card__peso-icon"><i class="fa-solid fa-dumbbell"></i>Peso</span>
              </div>
              
            </footer>

            ${Button()}

        </article>


    </div>

  </section>

  `

}

