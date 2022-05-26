import React, { ReactElement } from 'react';

function Footer(): ReactElement {
  return (
    <footer>
      <div className="container">
        <div className="footer-block">
          <h2>Telefone</h2>
          <p>
            (48)9999-9999
            <br />
            (48)9999-9999
          </p>
        </div>

        <div className="footer-block">
          <h2>Horários</h2>
          <p>
            Segunda a sexta
            <br />
            08:00 até 12:00
          </p>
        </div>

        <div className="footer-block">
          <h2>Endereço</h2>
          <p>
            Av. Trompowsky, 291. Torre 1 Sala 103
            <br />
            Cep 88015300 - Florianópolis, SC. 8802001
          </p>
        </div>

        <div className="clear" />
      </div>
    </footer>
  );
}

export default Footer;
