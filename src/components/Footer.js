
import "./Footer.css";
import { Redes } from "./Redes";

export const Footer = () =>{

  return `
  
   <section class="footer container">
          <div class="footer_container">
            
            <div class="footer__text">
              <h3 class="footer_name">Juan Garcia</h3>
              <h4 class="footer__correo">juanenriquegarcia126@gmail.com</h4>
            </div>
            
            <div>
              ${Redes()}
            </div>
        
          </div>
   </section> 

  `

}