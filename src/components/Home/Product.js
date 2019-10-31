import React from 'react';
import './Product.sass';
import Bounce from 'react-reveal/Bounce';

import t2 from '../../assets/word/t2.png';
import iphone1 from '../../assets/iphone/1.png';
import iphone2 from '../../assets/iphone/2.png';
import iphone3 from '../../assets/iphone/3.png';
import iphone4 from '../../assets/iphone/4.png';
import iphone5 from '../../assets/iphone/5.png';

export default function Product({ afterScrollTop, clientWidth, range }) {
  const [MIN, MAX] = range;
  let rightDistance2 = 13;
  let rightDistance3 = -7;
  if (clientWidth <= 920) {
    rightDistance2 = 3;
    rightDistance3 = -7;
  } else if (clientWidth > 920 && afterScrollTop > MIN) {
    const base = (afterScrollTop - MIN) / (MAX - MIN);
    rightDistance2 = (1 - base) * 13;
    if (base < 1 / 3) {
      rightDistance3 = -(1 - 3 * base) * 7;
    } else if (base < 2 / 3) {
      rightDistance3 = (3 * base - 1) * 7;
    } else {
      rightDistance3 = (1 - base) * 21;
    }
  }

  return (
    <div id="part2">
      <Bounce top>
        <div className="product-title">
          <img src={t2} alt="" />
        </div>
      </Bounce>
      <div className="product-desc">
        <Bounce top>
          <div className="product-desc-item">
            南邮小程序、校谈、期末报告单、社团招新系统、你头像真棒等等，
          </div>
          <div className="product-desc-item">
            我们既是这些产品的开发者，也是他们最忠实的用户，更是最能挑刺的人。
          </div>
          <div className="product-desc-item">
            做对得起自己的事，做自己都喜欢用的产品，
          </div>
          <div className="product-desc-item">
            我们始终用心去做让自己满意的事。
          </div>
          <div className="product-desc-more">了解我们的更多产品 ></div>
        </Bounce>
        <div className="product-show">
          <img
            className="product-show-item"
            src={iphone1}
            alt=""
            style={{ zIndex: 5 }}
          />
          <img
            className="product-show-item iphone2"
            style={{
              zIndex: 4,
              transform: `translateY(${rightDistance2}rem)`
            }}
            src={iphone2}
            alt=""
          />
          <img
            className="product-show-item"
            src={iphone3}
            alt=""
            style={{
              zIndex: 3,
              transform: `translateY(${rightDistance3}rem)`
            }}
          />
          <img
            className="product-show-item iphone4"
            src={iphone4}
            alt=""
            style={{ zIndex: 2 }}
          />
          <img
            className="product-show-item iphone5"
            src={iphone5}
            alt=""
            style={{
              zIndex: 1,
              transform: `translateY(${rightDistance2}rem)`
            }}
          />
        </div>
      </div>
    </div>
  );
}
