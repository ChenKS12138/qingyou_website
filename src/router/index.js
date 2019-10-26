import React, { useEffect } from 'react';
import RouterMap from './router';

const EVENT_PUSHSTATE = new Event('pushState');

export function RouteView(props) {
  const { currentPath: path, setCurrentPath: setPath } = props;
  useEffect(() => {
    window.history.replaceState(null, null, path);
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
