import { HomePage } from "./presentation/HomePage";
import './style.css';

export const App = async () => {
  const homePageContent = await HomePage();

  // Crear el contenedor principal
  const mainContainer = document.createElement('main');
  mainContainer.className = 'main';

  // Insertar `homePageContent` en `mainContainer`
  mainContainer.appendChild(homePageContent);

  return mainContainer;
};
