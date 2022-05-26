import React from 'react';

import Header from './components/Header/Header';
import Mosaic from './components/Mosaic/Mosaic';
import Videos from './components/Videos/Videos';
import Profile from './components/Profile/Profile';
import Services from './components/Services/Services';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Mosaic />
      <Services />
      <Profile />
      <Videos />

      <section className="tratamentos">
        <h2>Tratamentos</h2>

        <div className="container">
          <div className="tratamento-container">
            <div className="tratamento-single">
              <h2>Profilaxia e Prevenção</h2>
              <p>Mantenha um sorriso sem doença Periodontal, livre de cálculo, cáries e outras doenças que podem ser controladas e evitadas com a ida regular ao dentista. </p>
            </div>

            <div className="tratamento-single">
              <h2>Profilaxia e Prevenção</h2>
              <p>Mantenha um sorriso sem doença Periodontal, livre de cálculo, cáries e outras doenças que podem ser controladas e evitadas com a ida regular ao dentista. </p>
            </div>

            <div className="tratamento-single">
              <h2>Profilaxia e Prevenção</h2>
              <p>Mantenha um sorriso sem doença Periodontal, livre de cálculo, cáries e outras doenças que podem ser controladas e evitadas com a ida regular ao dentista. </p>
            </div>
          </div>

          <div className="tratamento-container">
            <div className="tratamento-single">
              <h2>Profilaxia e Prevenção</h2>
              <p>Mantenha um sorriso sem doença Periodontal, livre de cálculo, cáries e outras doenças que podem ser controladas e evitadas com a ida regular ao dentista. </p>
            </div>

            <div className="tratamento-single">
              <h2>Profilaxia e Prevenção</h2>
              <p>Mantenha um sorriso sem doença Periodontal, livre de cálculo, cáries e outras doenças que podem ser controladas e evitadas com a ida regular ao dentista. </p>
            </div>

            <div className="tratamento-single">
              <h2>Profilaxia e Prevenção</h2>
              <p>Mantenha um sorriso sem doença Periodontal, livre de cálculo, cáries e outras doenças que podem ser controladas e evitadas com a ida regular ao dentista. </p>
            </div>
          </div>

          <div className="tratamento-container">
            <div className="tratamento-single">
              <h2>Profilaxia e Prevenção</h2>
              <p>Mantenha um sorriso sem doença Periodontal, livre de cálculo, cáries e outras doenças que podem ser controladas e evitadas com a ida regular ao dentista. </p>
            </div>

            <div className="tratamento-single">
              <h2>Profilaxia e Prevenção</h2>
              <p>Mantenha um sorriso sem doença Periodontal, livre de cálculo, cáries e outras doenças que podem ser controladas e evitadas com a ida regular ao dentista. </p>
            </div>

            <div className="tratamento-single">
              <h2>Profilaxia e Prevenção</h2>
              <p>Mantenha um sorriso sem doença Periodontal, livre de cálculo, cáries e outras doenças que podem ser controladas e evitadas com a ida regular ao dentista. </p>
            </div>
          </div>

          <div className="clear" />
        </div>
      </section>

      <section className="depoimentos">
        <h2>Depoimentos</h2>

        <div className="container">
          <div className="depoimento-single">
            <p>
              “Estrutura e atendimento excepcionais! adorei o atendimento da Dra. Fernanda, excelente profissional.”
            </p>
            <div className="nome-depoimento">
              <img src="imagens/depoimento1.png" alt="depoimento" />
              <span>Maria Augusta Santos</span>
            </div>
          </div>
        </div>
      </section>

      <section className="social">
        <div className="instagram-chamada">
          <a target="_blank" rel="noreferrer" href="http://instagram.com"><img src="imagens/inst.png" alt="instagram" /></a>
          <p>
            Acesse o Instagram para ver mais fotos
            <br />
            @dra.fernanda_slovinski
          </p>
        </div>

        <div className="mosaico-social">
          <div className="img-mosaico-single-social">1</div>
          <div className="img-mosaico-single-social">2</div>
          <div className="img-mosaico-single-social">3</div>
          <div className="img-mosaico-single-social">4</div>
          <div className="img-mosaico-single-social">5</div>
          <div className="img-mosaico-single-social">6</div>
          <div className="img-mosaico-single-social">7</div>
          <div className="img-mosaico-single-social">8</div>
          <div className="img-mosaico-single-social">9</div>
        </div>

        <div className="facebook-chamada">
          <a target="_blank" rel="noreferrer" href="http://facebook.com"><img src="imagens/fb.png" alt="facebook" /></a>
          <p>
            Acesse o Instagram para ver mais fotos
            <br />
            @dra.fernanda_slovinski
          </p>
        </div>

        <div className="clear" />
      </section>

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
