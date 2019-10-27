import React from 'react';
import QyLogo from '../../assets/qylogo.png';
import './HeadBar.sass';
import { Link } from '../../router/index';

const Style = {
  focus: {
    fontWeight: '600',
    color: '#6ba32a'
  },
  unfocus: {
    color: '#4a4a4a'
  }
};

const NavigationItems = {
  '/': '首页',
  '/aboutUs': '了解我们',
  '/joinUs': '加入我们',
  '/communication': '合作沟通'
  // '/developers':'开发者'
};

export default function(props) {
  const { currentPath } = props;
  return (
    <div className="head-bar">
      <img src={QyLogo} alt="" className="qylogo" />
      <div className="nav-list">
        {Object.entries(NavigationItems).map(([path, name], index) => (
          <Link path={path} key={index}>
            <div
              className="nav-item"
              style={currentPath === path ? Style.focus : Style.unfocus}
            >
              {name}
            </div>
          </Link>
        ))}
      </div>
      {/* <button>用户服务</button> */}
    </div>
  );
}
