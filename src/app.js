import { HomePage } from "./presentation/HomePage";
import './style.css'; 

export const App = async () => {
  const homePageContent = await HomePage();

  return `
    <main class="main">
      ${homePageContent}
    </main>
  `;
};