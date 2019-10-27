import React, { useState, useEffect, useMemo } from 'react';
import Header from '../../components/Home/Header';
import Product from '../../components/Home/Product';
import Person from '../../components/Home/Person';
import Goal from '../../components/Home/Goal';
import Footer from '../../components/Home/Footer';
import './Home.sass';

const rangeHandler = (min, max, raw) => Math.min(max, Math.max(min, raw));

function useScrollTop(Component, range, scrollTopHeader, clientWidth) {
  return useMemo(() => {
    const [min, max] = range;
    return (
      <Component
        afterScrollTop={rangeHandler(min, max, scrollTopHeader)}
        clientWidth={clientWidth}
        range={range}
      />
    );
  }, [rangeHandler(range[0], range[1], scrollTopHeader), clientWidth]);
}

function Home() {
  const [afterScrollTop, setAfterScrollTop] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const pageHeight = window.innerHeight;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        window.pageYOffset;
      setAfterScrollTop(scrollTop);
      setClientWidth(document.body.clientWidth);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const HeaderWithOffset = useScrollTop(
    Header,
    [0, 1.05 * pageHeight],
    afterScrollTop,
    clientWidth
  );
  const ProductWithOffset = useScrollTop(
    Product,
    [0.65 * pageHeight, 1.3 * pageHeight],
    afterScrollTop,
    clientWidth
  );
  const PersonWidthOffset = useScrollTop(
    Person,
    [0.8 * pageHeight, 2.2 * pageHeight],
    afterScrollTop,
    clientWidth
  );
  const GoalWithOffset = useScrollTop(
    Goal,
    [1.3 * pageHeight, 2.85 * pageHeight],
    afterScrollTop,
    clientWidth
  );

  return (
    <div className="App">
      {HeaderWithOffset}
      {ProductWithOffset}
      {PersonWidthOffset}
      {GoalWithOffset}
      <Footer />
    </div>
  );
}

export default Home;
