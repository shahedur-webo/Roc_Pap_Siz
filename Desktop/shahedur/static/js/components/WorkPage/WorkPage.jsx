import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import './style.scss';
import WorkComponent from '../Work/WorkComponent';
import Magnetic from '../MagneticButton/MagneticButton';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const WorkPage = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [mobileActiveButton, setMobileActiveButton] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };

    handleResize(); // Check screen width on page load

    window.addEventListener('resize', handleResize); // Add event listener for screen resize

    return () => {
      window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
    };
  }, []);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
    setMobileActiveButton(buttonIndex);
  };

  const handleNavLinkClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1100);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8 }}>
        <section className='work-page'>
          <div className='container'>
            <div className='work-page__top'>
              <h2 className='work-recent'>
                Recent works
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='356'
                  height='134'
                  viewBox='0 0 356 134'
                  fill='none'>
                  <path
                    d='M17.2578 111.548C58.0588 116.457 99.6204 115.273 140.645 114.595C192.218 113.742 239.567 109.583 287.509 89.6846C306.304 81.8837 327.501 73.0038 340.914 56.8889C362.416 31.0542 333.19 17.9037 310.896 13.6093C275.037 6.70212 235.632 7.68544 199.337 9.129C159.353 10.7193 121.189 17.5801 83.2076 30.0967C64.5166 36.2563 44.8404 42.7618 27.4728 52.2294C20.2418 56.1712 8.96721 63.3542 7.93878 72.8387C6.10874 89.7156 30.3694 100.978 43.1538 104.021C58.6278 107.706 74.9913 108.196 90.7345 109.756C120.907 112.746 150.963 116.256 180.878 121.226C192.325 123.128 203.974 126.064 215.645 126.064'
                    stroke='#F9F971'
                    strokeOpacity='0.917647'
                    strokeWidth='15'
                    strokeLinecap='round'
                  />
                </svg>
              </h2>
              <div className='work-page__switch'>
                <div
                  className={`button-wrapper ${
                    window.innerWidth > 1100
                      ? activeButton === 0
                        ? 'active-switch'
                        : ''
                      : mobileActiveButton === 0
                      ? 'active-switch'
                      : ''
                  }`}
                  onClick={() => {
                    handleButtonClick(0);
                    document
                      .querySelector('.work-page__wrapper')
                      .classList.toggle('work-list', true);
                    document
                      .querySelector('.work-page__wrapper')
                      .classList.toggle('work-grid', false);
                    document.querySelector('.form').style.paddingTop =
                      70 + 'px';
                  }}>
                  <Magnetic>
                    <div className='button'>
                      <svg
                        viewBox='0 0 15 7'
                        fill='none'>
                        <line
                          y1='0.5'
                          x2='15'
                          y2='0.5'
                          stroke='black'
                        />
                        <line
                          y1='3.5'
                          x2='7'
                          y2='3.5'
                          stroke='black'
                        />
                        <line
                          y1='6.5'
                          x2='11'
                          y2='6.5'
                          stroke='black'
                        />
                      </svg>
                      <span className='color-wrap'>
                        <span className='colorBtn'></span>
                        <span className='colorBtn'></span>
                      </span>
                    </div>
                  </Magnetic>
                </div>
                <div
                  className={`button-wrapper ${
                    window.innerWidth > 1100
                      ? activeButton === 1
                        ? 'active-switch'
                        : ''
                      : mobileActiveButton === 1
                      ? 'active-switch'
                      : ''
                  }`}
                  onClick={() => {
                    handleButtonClick(1);
                    document
                      .querySelector('.work-page__wrapper')
                      .classList.toggle('work-grid', true);
                    document
                      .querySelector('.work-page__wrapper')
                      .classList.toggle('work-list', false);
                    document.querySelector('.form').style.paddingTop =
                      100 + 'px';
                  }}>
                  <Magnetic>
                    <div className='button'>
                      <svg
                        viewBox='0 0 21 21'
                        fill='none'>
                        <mask
                          id='path-1-inside-1_166_19'
                          fill='white'>
                          <rect
                            width='9'
                            height='9'
                            rx='1'
                          />
                        </mask>
                        <rect
                          width='9'
                          height='9'
                          rx='1'
                          stroke='white'
                          strokeWidth='3'
                          mask='url(#path-1-inside-1_166_19)'
                        />
                        <mask
                          id='path-2-inside-2_166_19'
                          fill='white'>
                          <rect
                            x='12'
                            width='9'
                            height='9'
                            rx='1'
                          />
                        </mask>
                        <rect
                          x='12'
                          width='9'
                          height='9'
                          rx='1'
                          stroke='white'
                          strokeWidth='3'
                          mask='url(#path-2-inside-2_166_19)'
                        />
                        <mask
                          id='path-3-inside-3_166_19'
                          fill='white'>
                          <rect
                            y='12'
                            width='9'
                            height='9'
                            rx='1'
                          />
                        </mask>
                        <rect
                          y='12'
                          width='9'
                          height='9'
                          rx='1'
                          stroke='white'
                          strokeWidth='3'
                          mask='url(#path-3-inside-3_166_19)'
                        />
                        <mask
                          id='path-4-inside-4_166_19'
                          fill='white'>
                          <rect
                            x='12'
                            y='12'
                            width='9'
                            height='9'
                            rx='1'
                          />
                        </mask>
                        <rect
                          x='12'
                          y='12'
                          width='9'
                          height='9'
                          rx='1'
                          stroke='white'
                          strokeWidth='3'
                          mask='url(#path-4-inside-4_166_19)'
                        />
                      </svg>

                      <span className='color-wrap'>
                        <span className='colorBtn'></span>
                        <span className='colorBtn'></span>
                      </span>
                    </div>
                  </Magnetic>
                </div>
              </div>
            </div>

            <div
              className={`work-page__wrapper ${
                isSmallScreen ? 'work-grid' : 'work-list'
              }`}>
              <WorkComponent />
              <div className='work-grid__wrapper'>
                <NavLink
                  to='/work/olha-lazarieva'
                  onClick={handleNavLinkClick}
                  className='work-grid__block'>
                  <div>
                    <div className='work-grid__block-img'>
                      <img
                        src='../img/work/7.jpg'
                        alt=''
                      />
                    </div>
                    <h2>
                      <svg viewBox='0 0 24 24'>
                        <path
                          fill='#2c3333'
                          d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                        <path
                          fill='#2c3333'
                          d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                      </svg>
                      Olha Lazarieva
                    </h2>
                    <span>Website for a Creative Designer</span>
                  </div>
                </NavLink>
                <NavLink
                  to='/work/raine'
                  onClick={handleNavLinkClick}
                  className='work-grid__block'>
                  <div>
                    <div className='work-grid__block-img'>
                      <img
                        src='../img/work/6.jpg'
                        alt=''
                      />
                    </div>
                    <h2>
                      <svg viewBox='0 0 24 24'>
                        <path
                          fill='#2c3333'
                          d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                        <path
                          fill='#2c3333'
                          d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                      </svg>
                      Raine Architects
                    </h2>
                    <span>Website for an architectural company</span>
                  </div>
                </NavLink>
                <NavLink
                  to='/work/td'
                  onClick={handleNavLinkClick}
                  className='work-grid__block'>
                  <div>
                    <div className='work-grid__block-img'>
                      <img
                        src='../img/work/0.jpg'
                        alt=''
                      />
                    </div>
                    <h2>
                      <svg viewBox='0 0 24 24'>
                        <path
                          fill='#2c3333'
                          d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                        <path
                          fill='#2c3333'
                          d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                      </svg>
                      tcs
                    </h2>
                    <span>Website for a creative studio</span>
                  </div>
                </NavLink>
                <NavLink
                  to='/work/soulful'
                  onClick={handleNavLinkClick}
                  className='work-grid__block'>
                  <div>
                    <div className='work-grid__block-img'>
                      <img
                        src='../img/work/2.jpg'
                        alt=''
                      />
                    </div>
                    <h2>
                      <svg viewBox='0 0 24 24'>
                        <path
                          fill='#2c3333'
                          d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                        <path
                          fill='#2c3333'
                          d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                      </svg>
                      Soulful Symbol
                    </h2>
                    <span>Tattoo symbols website</span>
                  </div>
                </NavLink>
                <NavLink
                  to='/work/mosaic'
                  onClick={handleNavLinkClick}
                  className='work-grid__block'>
                  <div>
                    <div className='work-grid__block-img'>
                      <img
                        src='../img/work/1.jpg'
                        alt=''
                      />
                    </div>
                    <h2>
                      <svg viewBox='0 0 24 24'>
                        <path
                          fill='#2c3333'
                          d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                        <path
                          fill='#2c3333'
                          d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                      </svg>
                      mosaic of cultures
                    </h2>
                    <span>Website for Chernivtsi</span>
                  </div>
                </NavLink>
                <NavLink
                  to='/work/emt'
                  onClick={handleNavLinkClick}
                  className='work-grid__block'>
                  <div>
                    <div className='work-grid__block-img'>
                      <img
                        src='../img/work/4.jpg'
                        alt=''
                      />
                    </div>
                    <h2>
                      <svg viewBox='0 0 24 24'>
                        <path
                          fill='#2c3333'
                          d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                        <path
                          fill='#2c3333'
                          d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                      </svg>
                      Emt Promo
                    </h2>
                    <span>Advertising website for a web application</span>
                  </div>
                </NavLink>
                <NavLink
                  to='/work/cyberfam'
                  onClick={handleNavLinkClick}
                  className='work-grid__block'>
                  <div>
                    <div className='work-grid__block-img'>
                      <img
                        src='../img/work/3.jpg'
                        alt=''
                      />
                    </div>
                    <h2>
                      <svg viewBox='0 0 24 24'>
                        <path
                          fill='#2c3333'
                          d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                        <path
                          fill='#2c3333'
                          d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                      </svg>
                      Cyberfam
                    </h2>
                    <span>NFT project roadmap</span>
                  </div>
                </NavLink>
                <NavLink
                  to='/work/vlad'
                  onClick={handleNavLinkClick}
                  className='work-grid__block'>
                  <div>
                    <div className='work-grid__block-img'>
                      <img
                        src='../img/work/5.jpg'
                        alt=''
                      />
                    </div>
                    <h2>
                      <svg viewBox='0 0 24 24'>
                        <path
                          fill='#2c3333'
                          d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                        <path
                          fill='#2c3333'
                          d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                      </svg>
                      Vlad Tritochki
                    </h2>
                    <span>Portfolio website</span>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        <div className='work-page-form'>
          <Form />
          <Footer />
        </div>
      </motion.div>
      <motion.div
        className='slide-page-transition'
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        transition={{ duration: 1.3, ease: [0.79, 0.08, 0.35, 0.96] }}
      />
      <motion.div
        className='slide-page-transition-second'
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        transition={{
          duration: 1.3,
          delay: 0.2,
          ease: [0.79, 0.08, 0.35, 0.96],
        }}
      />
    </>
  );
};

export default WorkPage;
