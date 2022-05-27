import React, { ReactElement } from 'react';
import BannerComponent from './styles';
import mainBanner from '../../images/banner.jpeg';

function Banner(): ReactElement {
  return (
    <BannerComponent>
      <img src={mainBanner} alt="main banner" />
    </BannerComponent>
  );
}

export default Banner;
