import React, { ReactElement } from 'react';
import { Header, Navigator } from './styles';
import logo from '../../images/logo.png';

function HeaderComponent(): ReactElement {
  return (
    <Header>
      <Navigator>
        <div className="container">
          <img src={logo} alt="logo" className="logo" />

          <div className="menu-desktop">
            <ul>
              <li><a href="/">quem sou</a></li>
              <li><a href="/">depoimentos</a></li>
              <li><a href="/">tratamentos</a></li>
              <li><a href="/">contato</a></li>
            </ul>
          </div>
        </div>
      </Navigator>
    </Header>
  );
}

export default HeaderComponent;
