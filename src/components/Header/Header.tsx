import React, { ReactElement } from 'react';
import HeaderComponent from './styles';
import logo from '../../images/logo.png';

function Header(): ReactElement {
  return (
    <HeaderComponent>
      <img src={logo} alt="logo" />

      <nav className="menu-desktop">
        <ul>
          <li><a href="/">quem sou</a></li>
          <li><a href="/">depoimentos</a></li>
          <li><a href="/">tratamentos</a></li>
          <li><a href="/">contato</a></li>
        </ul>
      </nav>

      <nav className="menu-mobile">
        <ul>
          <li><a href="/">quem sou</a></li>
          <li><a href="/">depoimentos</a></li>
          <li><a href="/">tratamentos</a></li>
          <li><a href="/">contato</a></li>
        </ul>
      </nav>
    </HeaderComponent>
  );
}

export default Header;
