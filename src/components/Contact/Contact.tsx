import React, { ReactElement } from 'react';

function Contact(): ReactElement {
  return (
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
  );
}

export default Contact;
