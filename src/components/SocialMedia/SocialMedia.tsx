import React, { ReactElement } from 'react';

function SocialMedia(): ReactElement {
  return (
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
  );
}

export default SocialMedia;
