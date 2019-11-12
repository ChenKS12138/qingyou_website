import React, { useEffect, useState } from 'react';
import QyLogo from '../../assets/qylogo.png';
import './HeadBar.sass';
import { ScrollLink } from '../../router/index';

const NavigationItems = [
  {
    name: '首页',
    toTop: 0,
    backgroundColor: 'transparent',
    color: 'rgb(74, 74, 74)',
    height: 1
  },
  {
    name: '产品',
    toTop: 1,
    backgroundColor: 'white',
    color: 'rgb(74, 74, 74)',
    height: 0.89
  },
  {
    name: '团队',
    toTop: 2,
    backgroundColor: '#2a6637',
    color: 'white',
    height: 0.89
  },
  {
    name: '目标',
    toTop: 3,
    backgroundColor: 'white',
    color: 'rgb(74, 74, 74)',
    height: 0.5
  },
  {
    name: '开源计划',
    toTop: 4,
    backgroundColor: '#565656',
    color: 'white',
    height: 1
  }
];

const focusStyle = {
  focus: {
    fontWeight: '600',
    fontSize: '20px'
  },
  unFocus: {
    fontWeight: '400',
    fontSize: '17.8px'
  }
};

export default function() {
  const [navItem, setNavItem] = useState(NavigationItems[0]);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerWidth > 980) {
        const scrollTop =
          window.scrollY ||
          document.documentElement.scrollTop ||
          window.pageYOffset;
        const windowHeight = window.innerHeight;
        const target = Object.values(NavigationItems).find(
          x => windowHeight * x.toTop + windowHeight * x.height > scrollTop
        );
        setNavItem(target);
      } else {
        setNavItem({
          backgroundColor: 'rgba(255,255,255,0.8)',
          color: 'rgb(74, 74, 74)'
        });
      }
    });
  }, []);
  return (
    <div
      className="head-bar-container"
      style={{ backgroundColor: navItem.backgroundColor, color: navItem.color }}
    >
      <div className="head-bar">
        <img src={QyLogo} alt="" className="qylogo" />
        <div className="nav-list">
          {NavigationItems.map((item, index) => (
            <ScrollLink toTop={item.toTop * window.innerHeight} key={index}>
              <div
                className="nav-item"
                style={
                  item.name === navItem.name
                    ? focusStyle.focus
                    : focusStyle.unFocus
                }
              >
                {item.name}
              </div>
            </ScrollLink>
          ))}
        </div>
        {/* <button>用户服务</button> */}
      </div>
    </div>
  );
}
