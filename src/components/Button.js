import "./Button.css";


export const Button = ( context )=>{

  /** @type {HTMLelement}  */
  const button = document.createElement('button');
  button.className = ('buttom buttom--card buttom--animation')

  button.innerHTML = `
      <img class="icon-pokeball" src="/src/assets/icon-pokeball.png" alt="icon-pokeball">
      Capturar Pokémon
  `  

  // button.addEventListener('click', (  ) =>{
  //     if( context === 'home' ){
  //       console.log('hola')
  //     }else if( context === 'card'){
  //       console.log('rata')
  //     }

  // })

  return button

}