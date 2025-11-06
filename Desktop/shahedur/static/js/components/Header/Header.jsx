import { useState, useEffect, useRef } from 'react';
import CurrentDate from '../Date';
import Magnetic from '../MagneticButton/MagneticButton';
import Social from '../Social';
import './styles.scss';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const menuRef = useRef();
  const location = useLocation(); // Get the current location

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };

  let menu = document.querySelector('.menu');
  let menuTop = document.querySelector('.menu-top');
  let menuBottom = document.querySelector('.menu-bottom');
  let btn = document.querySelector('.header-btn');

  const handleNavLinkClick = () => {
    // Scroll to top of the page on NavLink click
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1100);
    setMenuActive(false);
    deleteClassesMenu();
  };

  let deleteClassesMenu = () => {
    menu.classList.remove('menu-active');
    menuTop.classList.remove('menu-top-active');
    menuBottom.classList.remove('menu-bottom-active');
    btn.classList.remove('header-btn-active');
  };

  const handleButtonClick = (event) => {
    event.stopPropagation(); // Stop event propagation
    setMenuActive(!isMenuActive);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const changeLink = ({ isActive }) => (isActive ? 'active-link' : '');

  return (
    <header className='header'>
      <div className='header-wrapper'>
        <NavLink
          className='header-logo'
          to='.'
          onClick={handleNavLinkClick}>
          <span className='max'>Max</span>
          <span className='milkin'>milkin</span>
        </NavLink>
        <div
          className={`btn header-btn ${
            isMenuActive ? 'header-btn-active' : ''
          }`}
          onClick={handleButtonClick}
          ref={menuRef}>
          <div className='button-wrapper'>
            <Magnetic>
              <div className='button'>
                <span className='line'></span>
                <span className='line'></span>

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
        className={`menu ${isMenuActive ? 'menu-active' : ''}`}
        ref={menuRef}>
        <div className={`menu-top ${isMenuActive ? 'menu-top-active' : ''}`}>
          <div className='menu-container'>
            <div className='menu-container-wrapper'>
              <nav>
                <ul>
                  <li className='button-wrapper'>
                    <Magnetic>
                      <NavLink
                        className={changeLink}
                        to='.'
                        end
                        onClick={handleNavLinkClick}>
                        Home
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='415'
                          height='75'
                          viewBox='0 0 415 75'
                          fill='none'>
                          <path
                            d='M8 38.9999C44.859 37.5823 81.5002 32.1679 118.111 27.9999C194.416 19.3129 271.33 12.0252 348.111 9.44439C365.834 8.84864 385.741 7.0205 403.556 8.99994C418.361 10.645 374.891 17.1415 360.444 20.7777C324.879 29.7297 289.516 39.5152 254 48.6666C238.574 52.6414 223.078 56.1094 207.556 59.6666C204.955 60.2626 202.341 60.815 199.778 61.5555C195.064 62.9171 198.84 62.7968 201.556 62.8888C228.03 63.7863 254.624 62.9015 281.111 62.9999C284.275 63.0117 308.305 60.084 306 66.9999'
                            stroke='#F9F971'
                            strokeOpacity='0.917647'
                            strokeWidth='15'
                            strokeLinecap='round'
                          />
                        </svg>
                      </NavLink>
                    </Magnetic>
                  </li>
                  <li className='button-wrapper'>
                    <Magnetic>
                      <NavLink
                        className={changeLink}
                        to='about'
                        onClick={handleNavLinkClick}>
                        About
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='415'
                          height='75'
                          viewBox='0 0 415 75'
                          fill='none'>
                          <path
                            d='M8 38.9999C44.859 37.5823 81.5002 32.1679 118.111 27.9999C194.416 19.3129 271.33 12.0252 348.111 9.44439C365.834 8.84864 385.741 7.0205 403.556 8.99994C418.361 10.645 374.891 17.1415 360.444 20.7777C324.879 29.7297 289.516 39.5152 254 48.6666C238.574 52.6414 223.078 56.1094 207.556 59.6666C204.955 60.2626 202.341 60.815 199.778 61.5555C195.064 62.9171 198.84 62.7968 201.556 62.8888C228.03 63.7863 254.624 62.9015 281.111 62.9999C284.275 63.0117 308.305 60.084 306 66.9999'
                            stroke='#F9F971'
                            strokeOpacity='0.917647'
                            strokeWidth='15'
                            strokeLinecap='round'
                          />
                        </svg>
                      </NavLink>
                    </Magnetic>
                  </li>
                  <li className='button-wrapper'>
                    <Magnetic>
                      <NavLink
                        className={({ isActive }) =>
                          isActive && location.pathname === '/work'
                            ? 'active-link'
                            : ''
                        }
                        to='work'
                        onClick={handleNavLinkClick}>
                        Work
                        <span>8</span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='415'
                          height='75'
                          viewBox='0 0 415 75'
                          fill='none'>
                          <path
                            d='M8 38.9999C44.859 37.5823 81.5002 32.1679 118.111 27.9999C194.416 19.3129 271.33 12.0252 348.111 9.44439C365.834 8.84864 385.741 7.0205 403.556 8.99994C418.361 10.645 374.891 17.1415 360.444 20.7777C324.879 29.7297 289.516 39.5152 254 48.6666C238.574 52.6414 223.078 56.1094 207.556 59.6666C204.955 60.2626 202.341 60.815 199.778 61.5555C195.064 62.9171 198.84 62.7968 201.556 62.8888C228.03 63.7863 254.624 62.9015 281.111 62.9999C284.275 63.0117 308.305 60.084 306 66.9999'
                            stroke='#F9F971'
                            strokeOpacity='0.917647'
                            strokeWidth='15'
                            strokeLinecap='round'
                          />
                        </svg>
                      </NavLink>
                    </Magnetic>
                  </li>
                </ul>
              </nav>
              <Social />
            </div>
          </div>
        </div>
        <div
          className={`menu-bottom ${isMenuActive ? 'menu-bottom-active' : ''}`}>
          <div className='menu-bottom__wrapper'>
            <div className='menu-bottom__year'></div>
            <div className='located-time'>
              <div className='located'>Located in the Dusseldorf</div>
              <CurrentDate />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
