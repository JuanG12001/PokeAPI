import "./Button.css";



export const Button = ({ context, onClick, rata } )=>{

  /** @type {HTMLelement}  */
  const button = document.createElement('button');
  button.className = ('buttom buttom--card buttom--animation')

  button.innerHTML = `
      <img class="icon-pokeball" src="/src/assets/icon-pokeball.png" alt="icon-pokeball">
      Capturar Pokémon
  `  

  button.addEventListener('click', () => {
    if (context === 'home') {
      onClick();  
    } else if (context === 'card') {
      onClick();  
    }
  });

  return button

}