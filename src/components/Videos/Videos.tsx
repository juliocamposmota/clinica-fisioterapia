import React, { ReactElement } from 'react';

function Videos(): ReactElement {
  return (
    <section className="videos">
      <div className="container">
        <div className="box-video">
          <iframe title="video 1" src="https://www.youtube.com/embed/UhuoLV2u3u8" frameBorder="0" allowFullScreen />
        </div>

        <div className="box-video">
          <iframe title="video 1" src="https://www.youtube.com/embed/UhuoLV2u3u8" frameBorder="0" allowFullScreen />
        </div>

        <div className="box-video">
          <iframe title="video 1" src="https://www.youtube.com/embed/UhuoLV2u3u8" frameBorder="0" allowFullScreen />
        </div>
        <div className="clear" />
      </div>
    </section>
  );
}

export default Videos;
