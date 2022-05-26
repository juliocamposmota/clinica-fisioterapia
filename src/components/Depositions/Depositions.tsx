import React, { ReactElement } from 'react';

function Depositions(): ReactElement {
  return (
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
  );
}

export default Depositions;
