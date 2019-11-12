import React from 'react';
import './Header.sass';
import t1 from '../../assets/word/t1.png';

const DISTANCE_LEFT_END = 0;
const DISTANCE_RIGHT_END = 40;

export default function Header({ afterScrollTop, clientWidth, range }) {
  const [MIN, MAX] = range;
  let rightDistance;
  if (clientWidth <= 920) {
    rightDistance = DISTANCE_RIGHT_END;
  } else if (afterScrollTop >= MAX) {
    rightDistance = DISTANCE_LEFT_END;
  } else if (afterScrollTop === MIN) {
    rightDistance = DISTANCE_RIGHT_END;
  } else {
    rightDistance = Math.max(
      (1 - afterScrollTop / MAX) * DISTANCE_RIGHT_END,
      DISTANCE_LEFT_END
    );
  }
  return (
    <div id="part1">
      <div className="part1-container">
        <div className="head-content-container">
          <div className="content-title">
            <img src={t1} alt="" />
          </div>
          <div className="content-container">
            <p className="head-content">
              2017年春天，南邮小程序上显示出第一句"Hello, world"，
            </p>
            <p className="head-content">
              今天，我们有超过五万用户，超过一万日活，
              <br />
              超过十万日访问量，超过千万次接口调用。
            </p>
            <p className="head-content">
              我们和肖辰旭一起成长，一起进步，一起变得强大，
            </p>
            <p className="head-content">却从未忘却初心。</p>
            <p className="head-content last">两年，继续前进！</p>
          </div>
          <div className="more">我们的更多</div>
        </div>
        <div
          className="top-bg"
          style={{
            transform: `translateX(${rightDistance}vw)`
          }}
        />
      </div>
    </div>
  );
}
