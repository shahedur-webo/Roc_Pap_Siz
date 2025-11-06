import './style.scss';
import Magnetic from '../MagneticButton/MagneticButton';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    gsap.to('.not-found-err>p>span', {
      y: 100,
      duration: 3,
      stagger: 0.2,
      ease: 'power4.out',
    });
    gsap.to('.not-found-text>p', {
      opacity: 1,
      delay: 2,
      duration: 3,
      stagger: 0.2,
      ease: 'power4.out',
    });
  }, []);

  return (
    <>
      <section className='not-found'>
        <div className='container'>
          <div className='not-found-wrapper'>
            <div className='not-found-err'>
              <p>
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </p>
            </div>
            <div className='not-found-text'>
              <p>page not found...</p>
              <div className='button-wrapper home-btn'>
                <Magnetic>
                  <NavLink to='/'>
                    <button className='button'>
                      <span className='button-text'>Home</span>
                      <span className='color-wrap'>
                        <span className='colorBtn'></span>
                        <span className='colorBtn'></span>
                      </span>
                    </button>
                  </NavLink>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
