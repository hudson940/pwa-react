import React, {Component} from 'react';

class Invitados extends Component {
    render(){
        return(
            <section class="invitados contenedor seccion">
     <h2>nuestros invitados</h2>
     <ul class="lista-invitados clearfix">
       <li>
       <div class="invitado">
         <img src="../img/img/invitado1.jpg" alt="imagen invitado 1"/>
         <p>rafael bautista</p>
       </div>
       </li>
       <li>
       <div class="invitado">
         <img src="../img/img/invitado2.jpg" alt="imagen invitado 2"/>
         <p>shari herrera</p>
       </div>
       </li>
       <li>
       <div class="invitado">
         <img src="../img/img/invitado3.jpg" alt="imagen invitado 3"/>
         <p>gregorio sanches</p>
       </div>
       </li>
       <li>
       <div class="invitado">
         <img src="../img/img/invitado4.jpg" alt="imagen invitado 4"/>
         <p>susana rivera</p>
       </div>
       </li>
       <li>
       <div class="invitado">
         <img src="../" alt="imagen invitado 5"/>
         <p>harol garcia</p>
       </div>
       </li>
       <li>
       <div class="invitado">
         <img src="../img/img/invitado6.jpg" alt="imagen invitado 6"/>
         <p>susan sanches</p>
       </div>
       </li>
     </ul>
   </section>
        )
    }
}
export default Invitados;