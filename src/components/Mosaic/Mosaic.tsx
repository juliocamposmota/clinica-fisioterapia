import React, { ReactElement } from 'react';

function Mosaic(): ReactElement {
  return (
    <section className="mosaico">
      <div className="container">
        <div className="mosaico-wraper">
          <div className="mosaico-single">
            <div className="img-mosaico-single" />
            <div className="img-mosaico-single" />
          </div>

          <div className="mosaico-single">
            <div className="img-mosaico-single" />
            <div className="img-mosaico-single" />
          </div>

          <div className="mosaico-single">
            <div className="img-mosaico-single" />
            <div className="img-mosaico-single" />
          </div>

          <div className="mosaico-single">
            <div className="img-mosaico-single" />
            <div className="img-mosaico-single" />
          </div>

          <div className="mosaico-single">
            <div className="img-mosaico-single" />
            <div className="img-mosaico-single" />
          </div>

          <div className="mosaico-single">
            <div className="img-mosaico-single" />
            <div className="img-mosaico-single" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mosaic;
