import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export default () => {
  const CarouselUI = ({ position, handleClick, children }) => (
    <div className="carousel">
      {children}
      <div
        className="arrow left"
        onClick={handleClick}
        data-position={position - 1}
      >
        {'<'}
      </div>
      <div
        className="arrow right"
        onClick={handleClick}
        data-position={position + 1}
      >
        {'>'}
      </div>
    </div>
  );

  const Carousel = makeCarousel(CarouselUI);

  return (
    <div className="productions-container">
      <Fade left>
        <div className="top-container">
          <Carousel>
            <Slide right>
              <div className="production miniprogram">
                <div className="image-container">
                  <div className="image first" />
                  <div className="image second" />
                  <div className="image third" />
                  <div className="image fourth" />
                </div>
                <div className="image-intro">南京邮电大学小程序</div>
              </div>
            </Slide>
            <Slide right>
              <div className="production displays">
                <div className="image-container">
                  <div className="image first" />
                  <div className="image second" />
                  <div className="image third" />
                </div>
                <div className="image-intro">开屏展示</div>
              </div>
            </Slide>
            <Slide right>
              <div className="production reports">
                <div className="image-container">
                  <div className="image first" />
                  <div className="image second" />
                  <div className="image third" />
                </div>
                <div className="image-intro">年报展示</div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </Fade>
    </div>
  );
};
