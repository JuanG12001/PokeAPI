import "./Redes.css";


export const Redes = ()=>{

  return `
  <div class="redes-icons">
    <a class="redes-link" href="${import.meta.env.VITE_LINK_GITHUB}" target="_blank" rel="noreferrer noopener" title="Visita mi GitHub" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
    <a class="redes-link" href="${import.meta.env.VITE_LINK_LINKEDIN}" target="_blank" rel="noreferrer noopener" title="Visita mi LinkedIn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
    <a class="redes-link" href="${import.meta.env.VITE_LINK_WHATSAPP}" target="_blank" rel="noreferrer noopener" title="Contacta por WhatsApp" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
  </div>

  `

}