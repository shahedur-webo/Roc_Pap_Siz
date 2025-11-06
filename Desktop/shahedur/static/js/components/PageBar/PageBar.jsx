import './style.scss';
import React, { useState, useEffect } from 'react';

const PageBar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 1100) {
      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        const scrollPercentage =
          (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollHeight(scrollPercentage);
      };

      if (window.innerWidth > 1100) {
        window.addEventListener('scroll', handleScroll);
      }

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className='page-bar'>
        <span
          className='page-bar-line'
          style={{ height: `${scrollHeight}%` }}></span>
      </div>
    </>
  );
};

export default PageBar;
