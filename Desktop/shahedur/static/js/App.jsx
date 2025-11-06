import { React, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import PageBar from './components/PageBar/PageBar';
import MouseEffect from './components/MouseEffect/MouseEffect';

import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  useEffect(() => {
    if (CSS.supports('height: 100dvh')) {
      document.documentElement.style.setProperty('--vh', '100dvh');
    } else {
      document.documentElement.style.setProperty('--vh', '100vh');
    }
  }, []);

  return (
    <>
      <ReactLenis root>
        {window.innerWidth > 1300 ? <MouseEffect /> : null}
        {window.innerWidth > 1100 ? <PageBar /> : null}

        <Loader />

        <div className='App'>
          <BrowserRouter>
            <Header />
            <AnimatedRoutes />
          </BrowserRouter>
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
