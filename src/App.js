import React from 'react';
import { Route } from './router/index';
import HeaderBar from './components/Common/HeadBar';

export default function() {
  return (
    <>
      <HeaderBar />
      <Route />
    </>
  );
}
