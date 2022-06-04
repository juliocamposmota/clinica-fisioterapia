import React, { ReactElement } from 'react';

import { Services } from './styles';
import BoxServiceComponent from './BoxService';
import services from '../../fakeData/services';

function ServicesComponent(): ReactElement {
  return (
    <Services>
      <h2>Serviços</h2>

      <div className="services">
        <div className="container">
          { services.map(({ name, icon }) => (
            <BoxServiceComponent name={name} physioIcon={icon} />
          ))}
        </div>
      </div>
    </Services>
  );
}

export default ServicesComponent;
