import React, { ReactElement } from 'react';

import { BoxService } from './styles';
import { IBoxService } from './types';

function BoxServiceComponent({ name, physioIcon }: IBoxService): ReactElement {
  return (
    <BoxService>
      <div className="box">
        <img src={physioIcon} alt="logo" className="logo" />
        <p>{name}</p>
      </div>
    </BoxService>
  );
}

export default BoxServiceComponent;
