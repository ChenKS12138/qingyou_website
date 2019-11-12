import React, { useState, useEffect, useRef } from 'react';
import './Goal.sass';
import blue from '../../assets/blue.png';
import pink from '../../assets/pink.png';
import orange from '../../assets/orange.png';
import x from '../../assets/x.png';
import q from '../../assets/q.png';
import git from '../../assets/git.png';
import w4 from '../../assets/word/w4.png';
import w1 from '../../assets/word/w1.png';
import w2 from '../../assets/word/w2.png';
import w3 from '../../assets/word/w3.png';

export default function Goal({ afterScrollTop, clientWidth, range }) {
  const [MIN, MAX] = range;
  let distance = -30;
  if (clientWidth > 920) {
    distance = ((afterScrollTop - MIN) / (MAX - MIN)) * 60 - 30;
  } else {
    distance = 0;
  }
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const target = useRef(null);
  useEffect(() => {
    target.current.addEventListener('mousemove', e => {
      const { x: pointX, y: pointY } = e;
      const { innerHeight, innerWidth } = window;
      const tempX = (pointX - innerWidth / 2) / (innerWidth / 2);
      const tempY = (pointY - innerHeight / 2) / (innerHeight / 2);
      setTranslateX(tempX);
      setTranslateY(tempY);
    });
    target.current.addEventListener('mouseout', () => {
      setTranslateX(0);
      setTranslateY(0);
    });
  }, []);
  return (
    <div ref={target} id="part4">
      <img
        className="mascot"
        style={{ transform: `translate(-35vw,-${distance}rem)` }}
        src={x}
        alt=""
      />
      <img
        className="mascot"
        style={{ transform: `translate(35vw,-${distance}rem)` }}
        src={q}
        alt=""
      />
      <div className="goal-title" />
      <div className="goal-desc">
        <div className="goal-desc-item">
          我们不会没有任何目的性地去做一件事。我们的目的是什么？
        </div>
        <div className="goal-desc-item">
          看到每个同学都在使用南邮小程序，看到期末报告单在朋友圈里刷屏，
        </div>
        <div className="goal-desc-item">
          看到同学们在表白墙吐槽我们的功能不够完善，看到有人向朋友炫耀南邮人的小程序。
        </div>
        <div className="goal-desc-item">物质或许不是我们追求的目的，</div>
        <div className="goal-desc-item">
          用技术服务更多人来取悦自己的精神享受，更加值得回味。
        </div>
      </div>
      <div className="goal-more">青柚团队的共识</div>
      <div className="goal-card-set">
        <div
          className="goal-card user"
          style={{
            backgroundImage: `url('${blue}')`
          }}
        >
          <img className="goal-card-text-image" src={w1} alt="技术服务用户" />
          <div className="goal-card-sub-text">用户原则</div>
        </div>
        <div
          className="goal-card team"
          style={{
            backgroundImage: `url('${pink}')`
          }}
        >
          <img className="goal-card-text-image" src={w2} alt="热爱驱动使命" />
          <div className="goal-card-sub-text">团队共识</div>
        </div>
        <div
          className="goal-card project"
          style={{
            backgroundImage: `url('${orange}')`
          }}
        >
          <img className="goal-card-text-image" src={w3} alt="实践促成进步" />
          <div className="goal-card-sub-text">项目目的</div>
        </div>
      </div>
      <div className="goal-divide-line" />
      <div
        className="goal-open-source"
        style={{
          transform: `translate(${translateX * 20}px,${translateY * 20}px)`
        }}
      >
        <div className="goal-open-source-text-div">
          <img
            className="goal-open-source-text-div-title"
            style={{
              transform: `translate(${translateX * 70}px,${translateY * 70}px)`
            }}
            src={w4}
            alt=""
          />
          <div
            className="goal-open-source-text-div-contents"
            style={{
              transform: `translate(${translateX * 50}px,${translateY * 50}px)`
            }}
          >
            <div className="goal-open-source-text-div-content1">
              开放和共享是一种学习。
            </div>
            <div
              className="goal-open-source-text-div-content2"
              onClick={() => {}}
            >
              访问青柚的 GitHub 仓库 >
            </div>
          </div>
        </div>
        <img
          style={{
            transform: `translate(${translateX * 90}px,${translateY * 90}px)`
          }}
          className="goal-open-source-git"
          src={git}
          alt=""
        />
      </div>
    </div>
  );
}
