import React, { useState } from 'react';
import { RouteView } from './router/index';
import HeaderBar from './components/Common/HeadBar';
import router from './router/router';

export default function() {
  const [currentPath, setCurrentPath] = useState(Object.keys(router)[0]);
  return (
    <>
      <HeaderBar currentPath={currentPath} />
      <RouteView currentPath={currentPath} setCurrentPath={setCurrentPath} />
    </>
  );
}
