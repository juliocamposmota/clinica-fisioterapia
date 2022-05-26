import React, { ReactElement } from 'react';
import treatments from '../../fakeData/tratments';

function Treatments(): ReactElement {
  const [firstTreatment] = treatments;

  return (
    <section className="tratamentos">
      <h2>Tratamentos</h2>

      <div className="container">
        <div className="tratamento-container">
          <div className="tratamento-single">
            <h2>{firstTreatment.name}</h2>
            <p>{firstTreatment.description}</p>
          </div>
        </div>

        <div className="clear" />
      </div>
    </section>
  );
}

export default Treatments;
