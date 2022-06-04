import React, { ReactElement } from 'react';
import depositions from '../../fakeData/depositions';

function Depositions(): ReactElement {
  const [firstDeposition] = depositions;

  return (
    <section className="depoimentos">
      <h2>Depoimentos</h2>

      <div className="container">
        <div className="depoimento-single">
          <p>{firstDeposition.deposition}</p>
          <div className="nome-depoimento">
            <img src="imagens/depoimento1.png" alt="depoimento" />
            <span>{firstDeposition.userName}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Depositions;
