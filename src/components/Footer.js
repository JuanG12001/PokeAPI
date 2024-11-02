import "./Footer.css";
import { Redes } from "./Redes";

export const Footer = () => {

  const section = document.createElement('section'); 
  section.className = 'footer container'; 
  
  section.innerHTML = `
    <div class="footer_container">

      <div class="footer__text">
        <h3 class="footer_name">${import.meta.env.VITE_NAME_FOOTER}</h3>
        <h4 class="footer__correo">${import.meta.env.VITE_GMAIL_FOOTER}</h4>
      </div>

      <div id="redes-container"></div> 

    </div>
  `;

  const redesContainer = section.querySelector('#redes-container');
  redesContainer.appendChild(Redes()); 

  return section; 
  
};
