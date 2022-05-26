import React from 'react';

import Header from './components/Header/Header';
import Mosaic from './components/Mosaic/Mosaic';
import Videos from './components/Videos/Videos';
import Profile from './components/Profile/Profile';
import Services from './components/Services/Services';
import Treatments from './components/Treatments/Treatments';
import Depositions from './components/Depositions/Depositions';
import SocialMedia from './components/SocialMedia/SocialMedia';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Mosaic />
      <Services />
      <Profile />
      <Videos />
      <Treatments />
      <Depositions />
      <SocialMedia />

      <section className="contato">
        <h2>Contato</h2>

        <form>
          <div className="form-wraper w100">
            <span>Nome:</span>
            <input placeholder="" name="nome" type="text" />
          </div>

          <div className="form-wraper w50">
            <span>E-mail:</span>
            <input placeholder="" name="e-mail" type="text" />
          </div>

          <div className="form-wraper w50">
            <span>Telefone:</span>
            <input placeholder="" name="e-mail" type="text" />
          </div>

          <div className="form-wraper w100">
            <span>Mensagem:</span>
            <textarea placeholder="" />
          </div>

          <div className="form-wraper w100" style={{ textAlign: 'center' }}>
            <input type="submit" name="acao" value="Enviar" />
          </div>

          <div className="clear" />
        </form>
      </section>

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
    </div>
  );
}

export default App;
