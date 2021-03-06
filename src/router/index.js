import React, { useEffect } from 'react';
import RouterMap from './router';

const EVENT_PUSHSTATE = new Event('pushState');
const HASH_MODE = false;

const pathFilter = path =>
  Object.keys(RouterMap).includes(path) ? path : Object.keys(RouterMap)[0];

export function RouteView(props) {
  const { currentPath: path, setCurrentPath: setPath } = props;
  useEffect(() => {
    if (HASH_MODE) {
      window.addEventListener('hashchange', () => {
        setPath(pathFilter(window.location.hash.slice(1)));
      });
    } else {
      try {
        window.history.replaceState(null, null, path);
      } catch (e) {
        console.log(e);
        console.error('window.history ERROR');
      }
      window.addEventListener('pushState', () => {
        setPath(pathFilter(window.location.pathname));
      });
    }
    return () => window.removeEventListener('pushState');
  }, []);
  const Component = RouterMap[path];
  return <Component />;
}

export function Link(props) {
  const { path, children } = props;
  return (
    <span
      onClick={() => {
        const target = pathFilter(path);
        if (HASH_MODE) {
          window.location.hash = target;
        } else {
          window.history.pushState(null, null, target);
          window.dispatchEvent(EVENT_PUSHSTATE);
        }
      }}
    >
      {children}
    </span>
  );
}

export function ScrollLink(props) {
  const { toTop = 0, behavior = 'smooth', children } = props;
  return (
    <span
      onClick={() => {
        window.scrollTo({
          top: toTop,
          behavior
        });
      }}
    >
      {children}
    </span>
  );
}
