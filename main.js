import { App } from "./src/app";

const renderApp = async () => {
  const appContent = await App();
  const appContainer = document.querySelector('#app');

  appContainer.innerHTML = '';
  appContainer.appendChild(appContent);
};

renderApp();