import React, { useEffect, useState } from 'react';
import RouterMap from './router';

const EVENT_PUSHSTATE = new Event('pushState');

export function Route() {
  const [path, setPath] = useState(Object.keys(RouterMap)[0]);
  useEffect(() => {
    const { pathname } = window.location;
    const newPath = Object.keys(RouterMap).includes(pathname)
      ? pathname
      : Object.keys(RouterMap)[0];
    setPath(newPath);
    window.history.replaceState(null, null, newPath);
    window.addEventListener('pushState', () => {
      setPath(window.location.pathname);
    });
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
        window.history.pushState(
          null,
          null,
          Object.keys(RouterMap).includes(path)
            ? path
            : Object.keys(RouterMap)[0]
        );
        window.dispatchEvent(EVENT_PUSHSTATE);
      }}
    >
      {children}
    </span>
  );
}
