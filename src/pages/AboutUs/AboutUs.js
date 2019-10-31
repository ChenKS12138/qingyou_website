import React from 'react';
import Footer from '../../components/Home/Footer';
// import Introduction from './components/Introduction';
import Productions from './components/Productions';
import Members from './components/Members';
import './AboutUs.sass';

export default function() {
  return (
    <div className="aboutUs">
      {/* <Introduction /> */}
      <Productions />
      <Members />
      <Footer />
    </div>
  );
}
