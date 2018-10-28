import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header class="site-header">
        <div class="hero">
          <div class="contenido-header">
            <nav class="redes-sociales">
              <a href="#">
                <i class="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i class="fab fa-twitter" />
              </a>
              <a href="#">
                <i class="fab fa-pinterest-p" />
              </a>
              <a href="#">
                <i class="fab fa-youtube" />
              </a>
              <a href="#">
                <i class="fab fa-instagram" />
              </a>
            </nav>
            <div class="informacion-evento">
              <div class="clearfix">
                <p class="fecha">
                  <i class="fas fa-calendar-alt" aria-hidden="true" />
                  10-12 dic
                </p>
                <p class="ciudad">
                  <i class="fas fa-map-marker-alt" aria-hidden="true" />
                  guadalajara, MX
                </p>
              </div>
              <h1 class="nombre-sitio">GdlWebCamp</h1>
              <p class="slogan">
                la mejor conferencia de <span>diseño web</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
