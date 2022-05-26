import React, { ReactElement } from 'react';

function Header(): ReactElement {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="./src/images/logo.png" alt="logo" />
        </div>

        <nav className="menu-desktop">
          <ul>
            <li><a href="/">quem sou</a></li>
            <li><a href="/">depoimentos</a></li>
            <li><a href="/">sobre</a></li>
            <li><a href="/">contato</a></li>
          </ul>
        </nav>

        <nav className="menu-mobile">
          <ul>
            <li><a href="/">quem sou</a></li>
            <li><a href="/">depoimentos</a></li>
            <li><a href="/">sobre</a></li>
            <li><a href="/">contato</a></li>
          </ul>
        </nav>

        <div className="clear" />
      </div>
    </header>
  );
}

export default Header;
