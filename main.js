import { App } from "./src/app";

const renderApp = async () => {
  const appContent = await App();
  document.querySelector('#app').innerHTML = appContent;
};

renderApp();