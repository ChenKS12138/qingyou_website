import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import { People } from '../../../components/Home/People';

export default () => {
  const CarouselUI = ({ position, handleClick, children }) => (
    <div className="carousel">
      {children}
      <div
        className="arrow top"
        onClick={handleClick}
        data-position={position - 1}
      >
        ∧
      </div>
      <div
        className="arrow bottom"
        onClick={handleClick}
        data-position={position + 1}
      >
        ∨
      </div>
    </div>
  );

  const Carousel = makeCarousel(CarouselUI);

  return (
    <div className="members">
      <Flip top>
        <Carousel>
          {People.map(item => {
            if (item.name) {
              return (
                <Slide bottom key={item.id}>
                  <div className="person-container">
                    <div className="personal-avatar">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="personal-information">
                      <div className="name">
                        <div className="prefix">姓名:</div>
                        <div className="content">{item.name}</div>
                      </div>
                      <div className="goodAt">
                        <div className="prefix">方向:</div>
                        <div className="content">{item.goodAt}</div>
                      </div>
                      <div className="description">
                        <div className="prefix">介绍:</div>
                        <div className="content">{item.description}</div>
                      </div>
                    </div>
                  </div>
                </Slide>
              );
            }
          })}
        </Carousel>
      </Flip>
    </div>
  );
};
