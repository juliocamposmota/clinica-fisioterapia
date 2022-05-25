import React from 'react';
import './App.css';

function App() {
  return (
    <div>
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

          <div className="clear"></div>
        </div>
      </header>

      <section className="mosaico">
        <div className="container">
          <div className="mosaico-wraper">
            <div className="mosaico-single">
              <div className="img-mosaico-single"></div>
              <div className="img-mosaico-single"></div>
            </div>

            <div className="mosaico-single">
              <div className="img-mosaico-single"></div>
              <div className="img-mosaico-single"></div>
            </div>

            <div className="mosaico-single">
              <div className="img-mosaico-single"></div>
              <div className="img-mosaico-single"></div>
            </div>

            <div className="mosaico-single">
              <div className="img-mosaico-single"></div>
              <div className="img-mosaico-single"></div>
            </div>

            <div className="mosaico-single">
              <div className="img-mosaico-single"></div>
              <div className="img-mosaico-single"></div>
            </div>

            <div className="mosaico-single">
              <div className="img-mosaico-single"></div>
              <div className="img-mosaico-single"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="servicos">
        <div className="container">
          <div className="box-servico">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris ullamcorper.</p>
          </div>

          <div className="box-servico">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris ullamcorper.</p>
          </div>

          <div className="box-servico">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris ullamcorper.</p>
          </div>
        </div>
      </section>

      <section className="perfil-container">
        <div className="container">
          <div className="perfil-wraper">
            <div className="perfil-wraper2">
              <div className="img-perfil"></div>

              <div className="texto-perfil">
                <h2>TÍTULO DO PROFISSIONAL</h2>

                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="videos">
        <div className="container">
          <div className="box-video">
            <iframe title="video 1" src="https://www.youtube.com/embed/UhuoLV2u3u8" frameBorder="0" allowFullScreen></iframe>
          </div>

          <div className="box-video">
            <iframe title="video 1" src="https://www.youtube.com/embed/UhuoLV2u3u8" frameBorder="0" allowFullScreen></iframe>
          </div>

          <div className="box-video">
            <iframe title="video 1" src="https://www.youtube.com/embed/UhuoLV2u3u8" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="clear"></div>
        </div>
      </section>

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

          <div className="clear"></div>
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
          <p>Acesse o Instagram para ver mais fotos<br />@dra.fernanda_slovinski</p>
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
          <p>Acesse o Instagram para ver mais fotos<br />@dra.fernanda_slovinski</p>
        </div>

        <div className="clear"></div>
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
            <textarea placeholder=""></textarea>
          </div>

          <div className="form-wraper w100" style={{ textAlign: "center" }}>
            <input type="submit" name="acao" value="Enviar" />
          </div>

          <div className="clear"></div>
        </form>
      </section>

      <footer>
        <div className="container">
          <div className="footer-block">
            <h2>Telefone</h2>
            <p>(48)9999-9999<br/>(48)9999-9999</p>
          </div>

          <div className="footer-block">
            <h2>Horários</h2>
            <p>Segunda a sexta<br/>08:00 até 12:00</p>
          </div>

          <div className="footer-block">
            <h2>Endereço</h2>
            <p>Av. Trompowsky, 291. Torre 1 Sala 103<br />
            Cep 88015300 - Florianópolis, SC. 8802001</p>
          </div>

          <div className="clear"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
