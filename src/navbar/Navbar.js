import React, { Component } from 'react';
import logo from '../img/img/logo.svg';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          name: 'Conferencia',
          link: 'conferencia'
        },
        {
          name: 'Calendario',
          link: 'calendario'
        },
        {
          name: 'Invitados',
          link: 'invitados'
        },
        {
          name: 'Reservaciones',
          link: 'reservaciones'
        }
      ]
    };
  }

  render() {
    const List = this.state.menus.map(e => {
      return <a href={e.link}>{e.name}</a>;
    });

    return (
      <div class="barra">
        <div class="contenedor clearfix">
          <div class="logo">
            <img src={logo} alt="logo gdl web cam" />
          </div>
          <div class="menu-movil">
            <span />
            <span />
            <span />
          </div>
          <nav class="navegacion-principal clearfix">
            {List}
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
