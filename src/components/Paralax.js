import React, { Component } from 'react';

class Paralax extends Component {
  render() {
    return (
      <div class="contador parallax">
        <div class="contenedor">
          <ul class="resumen-evento clearfix">
            <li>
              <p class="numero" />
              invitados
            </li>
            <li>
              <p class="numero" />
              talleres
            </li>
            <li>
              <p class="numero" />
              dias
            </li>
            <li>
              <p class="numero" />
              conferencias
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Paralax;
