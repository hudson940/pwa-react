import React, {Component} from 'react';

class Programa extends Component{

    render(){
        return(
            <section class="programa">
            <div class="contenedor-video">
              <video  autoplay loop poster="../img/img/bg-talleres.jpg">
               <source src="../video/video.mp4" type="video/mp4"/>
               <source src="../video/video.webm" type="video/webm"/>
               <source src="../video/video.ogv" type="video/ogv"/>
              </video>
       
            </div>
            <div class="contenido-programa">
              <div class="contenedor">
                <div class="programa-evento">
                  <h2>programa del evento</h2>
                  <nav class="menu-programa">
                    <a href="#talleres"><i class="fas fa-code" aria-hidden="true"></i>Talleres</a>
                    <a href="#conferencias"><i class="fas fa-comment" aria-hidden="true"></i>Conferencias</a>
                    <a href="#seminarios"><i class="fas fa-university" aria-hidden="true"></i>Seminarios</a>
                  </nav>
                  <div id="talleres" class="info-curso ocultar clearfix">
                    <div class="detalle-evento">
                      <h3>html, css3 y javascript</h3>
                      <p><i class="fas fa-clock" aria-hidden="true"></i>16:00 hrs</p>
                      <p><i class="fas fa-calendar" aria-hidden="true"></i>10 de dic</p>
                      <p><i class="fas fa-user" aria-hidden="true"></i>juan pablo de la torre valdez</p>
                    </div>
                    <div class="detalle-evento">
                      <h3>responcive web design</h3>
                      <p><i class="fas fa-clock" aria-hidden="true"></i>20:00 hrs</p>
                      <p><i class="fas fa-calendar" aria-hidden="true"></i>10 de dic</p>
                      <p><i class="fas fa-user" aria-hidden="true"></i>juan pablo de la torre valdez</p>
                    </div>
                       <a href="#" class="button float-right " >ver todo</a>
                  </div>
                  <div id="conferencias" class="info-curso ocultar clearfix">
                    <div class="detalle-evento">
                      <h3>como ser freelancer</h3>
                      <p><i class="fas fa-clock" aria-hidden="true"></i>10:00 hrs</p>
                      <p><i class="fas fa-calendar" aria-hidden="true"></i>10 de dic</p>
                      <p><i class="fas fa-user" aria-hidden="true"></i>gregorio sanchez</p>
                    </div>
                    <div class="detalle-evento">
                      <h3>tecnologias del futuro</h3>
                      <p><i class="fas fa-clock" aria-hidden="true"></i>17:00 hrs</p>
                      <p><i class="fas fa-calendar" aria-hidden="true"></i>10 de dic</p>
                      <p><i class="fas fa-user" aria-hidden="true"></i>susan sanchez</p>
                    </div>
                       <a href="#" class="button float-right " >ver todo</a>
                  </div>
                  <div id="seminarios" class="info-curso ocultar clearfix">
                    <div class="detalle-evento">
                      <h3>diseño ux/ui para moviles</h3>
                      <p><i class="fas fa-clock" aria-hidden="true"></i>17:00 hrs</p>
                      <p><i class="fas fa-calendar" aria-hidden="true"></i>11 de dic</p>
                      <p><i class="fas fa-user" aria-hidden="true"></i>harold garcia</p>
                    </div>
                    <div class="detalle-evento">
                      <h3>aprende a programar en una mañana</h3>
                      <p><i class="fas fa-clock" aria-hidden="true"></i>10:00 hrs</p>
                      <p><i class="fas fa-calendar" aria-hidden="true"></i>11 de dic</p>
                      <p><i class="fas fa-user" aria-hidden="true"></i>susana rivera</p>
                    </div>
                       <a href="#" class="button float-right " >ver todo</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
export default Programa;
