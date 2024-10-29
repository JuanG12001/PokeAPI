import { HomePage } from "./presentation/HomePage";
import './style.css'; 

export const App = () => {
  
  return `
    <main class="main">
      ${HomePage()}
    </main>
  `;

}