import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer class="site-footer">
        <div class="contenedor clearfix">
          <div class="footer-informacion">
            <h3>
              sobre <span>gdlwebcam</span>{' '}
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequa
            </p>
          </div>
          <div class="ultimos-tweets">
            <h3>
              ultimos <span>tweets</span>{' '}
            </h3>
            <ul>
              <li>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation{' '}
              </li>
              <li>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation{' '}
              </li>
              <li>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation{' '}
              </li>
            </ul>
          </div>
          <div class="menu">
            <h3>
              redes <span>sociales</span>{' '}
            </h3>
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
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
