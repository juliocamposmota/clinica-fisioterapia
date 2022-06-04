import React, { ReactElement } from 'react';
import Banner from './styles';
import mainBanner from '../../images/banner.jpeg';

function BannerComponent(): ReactElement {
  return (
    <Banner>
      <img src={mainBanner} alt="main banner" />
    </Banner>
  );
}

export default BannerComponent;
