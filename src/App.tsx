import React from 'react';

import Header from './components/Header/Header';
import Mosaic from './components/Mosaic/Mosaic';
import Videos from './components/Videos/Videos';
import Contact from './components/Contact/Contact';
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
      <Contact />

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
