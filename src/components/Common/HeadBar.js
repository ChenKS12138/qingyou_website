import React from 'react';
import QyLogo from '../../assets/qylogo.png';
import './HeadBar.sass';
import { Link } from '../../router/index';

export default function() {
  return (
    <div className="head-bar">
      <img src={QyLogo} alt="" className="qylogo" />
      <div className="nav-list">
        <Link path="/">
          <div className="nav-item first">首页</div>
        </Link>
        <Link path="/aboutUs">
          <div className="nav-item second">了解我们</div>
        </Link>
        <Link path="/joinUs">
          <div className="nav-item second">加入我们</div>
        </Link>
        <Link path="/communication">
          <div className="nav-item third">合作沟通</div>
        </Link>
        {/* <div className="nav-item third">开发者</div> */}
      </div>
      {/* <button>用户服务</button> */}
    </div>
  );
}
