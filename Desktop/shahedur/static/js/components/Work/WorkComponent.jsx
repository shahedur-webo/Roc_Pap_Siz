import gsap from 'gsap';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const WorkComponent = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (label, index) => {
    setHoveredImage(label);

    // Убиваем предыдущие анимации для этой картинки
    gsap.killTweensOf(`.image-${label}`);

    document
      .querySelector(`.categories-block[data-label="${label}"]`)
      .classList.add('active');

    // Анимация появления картинки
    gsap.set(`.image-${label}`, {
      bottom: '-100%', // Устанавливаем начальное состояние анимации
    });

    gsap.to(`.image-${label}`, {
      bottom: '0%',
      duration: 0.8,
      ease: 'power4.inOut',
      overwrite: 'auto',
    });

    animateNumbers(index);

    gsap.to('.work-number-zero span', {
      y: '0%',
      duration: 0.7,
      delay: 0.05,
      ease: 'power4.inOut',
    });
  };

  const handleMouseLeave = () => {
    const label = hoveredImage;

    // Убиваем предыдущие анимации для этой картинки
    gsap.killTweensOf(`.image-${label}`);

    setHoveredImage(null);

    gsap.to(`.image-${label}`, {
      bottom: '-100%',
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.inOut',
    });

    resetNumbers();

    gsap.to('.work-number-zero span', {
      y: '100%',
      duration: 0.7,
      delay: 0.05,
      ease: 'power4.inOut',
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth > 768) {
      const container = document.querySelector('.images');
      const rect = container.getBoundingClientRect();

      const mouseY = e.clientY - rect.top;

      gsap.to('.images-wrap', {
        y: mouseY,
        yPercent: -50,
      });
    }
  };

  const handleNavLinkClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1100);
  };

  const animateNumbers = (index) => {
    const numberItems = document.querySelectorAll('.work-number-item');

    numberItems.forEach((item, i) => {
      if (i === index) {
        gsap.fromTo(
          item,
          { y: '100%' },
          { y: '0%', duration: 0.7, ease: 'power4.inOut' }
        );
      } else {
        gsap.to(item, { y: '200%', duration: 0.7, ease: 'power4.inOut' });
      }
    });
  };

  const resetNumbers = () => {
    const numberItems = document.querySelectorAll(
      '.work-number-item, .work-number .work-number-item'
    );
    numberItems.forEach((item) => {
      gsap.to(item, { y: '100%', duration: 0.7, ease: 'power4.inOut' });
    });
  };

  const texts = {
    olha: 'Olha Lazarieva',
    raine: 'Raine Architects',
    td: 'TCS',
    mosaic: 'Mosaic Of Cultures',
    soulful: 'Soulful Symbols',
    cyberfam: 'Cyberfam',
    vlad: 'Vlad Tritochki',
    emt: 'EMT Promo',
  };

  const olhaTexts = texts.olha.split('');
  const mosaicTexts = texts.mosaic.split('');
  const soulfulTexts = texts.soulful.split('');
  const cyberTexts = texts.cyberfam.split('');
  const vladTexts = texts.vlad.split('');
  const emtTexts = texts.emt.split('');
  const tdTexts = texts.td.split('');
  const raineTexts = texts.raine.split('');

  return (
    <div onMouseMove={handleMouseMove}>
      <div className='images'>
        <div className='work-number images-wrap'>
          <span className='work-number-zero'>
            <span>0</span>
          </span>
          <div className='work-number-count'>
            <span className='work-number-item'>1</span>
            <span className='work-number-item'>2</span>
            <span className='work-number-item'>3</span>
            <span className='work-number-item'>4</span>
            <span className='work-number-item'>5</span>
            <span className='work-number-item'>6</span>
            <span className='work-number-item'>7</span>
            <span className='work-number-item'>8</span>
          </div>
        </div>
        <div className='images-wrap'>
          <img
            src='../img/work/7.jpg'
            alt='olha'
            className={`image image-olha ${
              hoveredImage === 'olha' ? 'active' : ''
            }`}
          />
        </div>
        <div className='images-wrap'>
          <img
            src='../img/work/6.jpg'
            alt='raine'
            className={`image image-raine ${
              hoveredImage === 'raine' ? 'active' : ''
            }`}
          />
        </div>
        <div className='images-wrap'>
          <img
            src='../img/work/0.jpg'
            alt='td'
            className={`image image-td ${
              hoveredImage === 'td' ? 'active' : ''
            }`}
          />
        </div>
        <div className='images-wrap'>
          <img
            src='../img/work/2.jpg'
            alt='soulful'
            className={`image image-soulful ${
              hoveredImage === 'soulful' ? 'active' : ''
            }`}
          />
        </div>
        <div className='images-wrap'>
          <img
            src='../img/work/1.jpg'
            alt='mosaic'
            className={`image image-mosaic ${
              hoveredImage === 'mosaic' ? 'active' : ''
            }`}
          />
        </div>
        <div className='images-wrap'>
          <img
            src='../img/work/4.jpg'
            alt='emt'
            className={`image image-emt ${
              hoveredImage === 'emt' ? 'active' : ''
            }`}
          />
        </div>
        <div className='images-wrap'>
          <img
            src='../img/work/3.jpg'
            alt='cyberfam'
            className={`image image-cyberfam ${
              hoveredImage === 'cyberfam' ? 'active' : ''
            }`}
          />
        </div>
        <div className='images-wrap'>
          <img
            src='../img/work/5.jpg'
            alt='tritochki'
            className={`image image-tritochki ${
              hoveredImage === 'tritochki' ? 'active' : ''
            }`}
          />
        </div>
      </div>
      <div className='categories-wrapper'>
        <img
          className='noise-work'
          src='../img/noise-work.png'
          alt=''
        />
        <div className='categories'>
          <NavLink
            to='/work/olha-lazarieva'
            onClick={handleNavLinkClick}
            className='categories-block'
            data-label='olha'
            onMouseEnter={() => handleMouseEnter('olha', 0)}
            onMouseLeave={handleMouseLeave}>
            <h2 className='categories-block__text'>
              <div className='categories-block__text_first-title'>
                {olhaTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </div>
              <div className='categories-block__text_second-title'>
                {olhaTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
                {/* <svg
                  viewBox='0 0 24 24'
                  style={{ width: '50rem', height: '50rem' }}
                  className='arrow-work'>
                  <path
                    fill='#2c3333'
                    d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                  <path
                    fill='#2c3333'
                    d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                </svg> */}
              </div>
            </h2>
          </NavLink>
          <NavLink
            to='/work/raine'
            onClick={handleNavLinkClick}
            className='categories-block'
            data-label='raine'
            onMouseEnter={() => handleMouseEnter('raine', 1)}
            onMouseLeave={handleMouseLeave}>
            <h2 className='categories-block__text'>
              <div className='categories-block__text_first-title'>
                {raineTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </div>
              <div className='categories-block__text_second-title'>
                {raineTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
                {/* <svg
                  viewBox='0 0 24 24'
                  style={{ width: '50rem', height: '50rem' }}
                  className='arrow-work'>
                  <path
                    fill='#2c3333'
                    d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                  <path
                    fill='#2c3333'
                    d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                </svg> */}
              </div>
            </h2>
          </NavLink>
          <NavLink
            to='/work/td'
            onClick={handleNavLinkClick}
            className='categories-block'
            data-label='td'
            onMouseEnter={() => handleMouseEnter('td', 2)}
            onMouseLeave={handleMouseLeave}>
            <h2 className='categories-block__text'>
              <div className='categories-block__text_first-title'>
                {tdTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </div>
              <div className='categories-block__text_second-title'>
                {tdTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
                {/* <svg
                  viewBox='0 0 24 24'
                  style={{ width: '50rem', height: '50rem' }}
                  className='arrow-work'>
                  <path
                    fill='#2c3333'
                    d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                  <path
                    fill='#2c3333'
                    d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                </svg> */}
              </div>
            </h2>
          </NavLink>
          <NavLink
            to='/work/soulful'
            onClick={handleNavLinkClick}
            className='categories-block'
            data-label='soulful'
            onMouseEnter={() => handleMouseEnter('soulful', 3)}
            onMouseLeave={handleMouseLeave}>
            <h2 className='categories-block__text'>
              <div className='categories-block__text_first-title'>
                {soulfulTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </div>
              <div className='categories-block__text_second-title'>
                {soulfulTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
                {/* <svg
                  viewBox='0 0 24 24'
                  style={{ width: '50rem', height: '50rem' }}
                  className='arrow-work'>
                  <path
                    fill='#2c3333'
                    d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                  <path
                    fill='#2c3333'
                    d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                </svg> */}
              </div>
            </h2>
          </NavLink>
          <NavLink
            to='/work/mosaic'
            onClick={handleNavLinkClick}
            className='categories-block'
            data-label='mosaic'
            onMouseEnter={() => handleMouseEnter('mosaic', 4)}
            onMouseLeave={handleMouseLeave}>
            <h2 className='categories-block__text'>
              <div className='categories-block__text_first-title'>
                {mosaicTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </div>
              <div className='categories-block__text_second-title'>
                {mosaicTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
                {/* <svg
                  viewBox='0 0 24 24'
                  style={{ width: '50rem', height: '50rem' }}
                  className='arrow-work'>
                  <path
                    fill='#2c3333'
                    d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                  <path
                    fill='#2c3333'
                    d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                </svg> */}
              </div>
            </h2>
          </NavLink>
          <NavLink
            to='/work/emt'
            onClick={handleNavLinkClick}
            className='categories-block'
            data-label='emt'
            onMouseEnter={() => handleMouseEnter('emt', 5)}
            onMouseLeave={handleMouseLeave}>
            <h2 className='categories-block__text'>
              <div className='categories-block__text_first-title'>
                {emtTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </div>
              <div className='categories-block__text_second-title'>
                {emtTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
                {/* <svg
                  viewBox='0 0 24 24'
                  style={{ width: '50rem', height: '50rem' }}
                  className='arrow-work'>
                  <path
                    fill='#2c3333'
                    d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                  <path
                    fill='#2c3333'
                    d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                </svg> */}
              </div>
            </h2>
          </NavLink>
          <NavLink
            to='/work/cyberfam'
            onClick={handleNavLinkClick}
            className='categories-block'
            data-label='cyberfam'
            onMouseEnter={() => handleMouseEnter('cyberfam', 6)}
            onMouseLeave={handleMouseLeave}>
            <h2 className='categories-block__text'>
              <div className='categories-block__text_first-title'>
                {cyberTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </div>
              <div className='categories-block__text_second-title'>
                {cyberTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
                {/* <svg
                  viewBox='0 0 24 24'
                  style={{ width: '50rem', height: '50rem' }}
                  className='arrow-work'>
                  <path
                    fill='#2c3333'
                    d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                  <path
                    fill='#2c3333'
                    d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                </svg> */}
              </div>
            </h2>
          </NavLink>
          <NavLink
            to='/work/vlad'
            onClick={handleNavLinkClick}
            className='categories-block'
            data-label='tritochki'
            onMouseEnter={() => handleMouseEnter('tritochki', 7)}
            onMouseLeave={handleMouseLeave}>
            <h2 className='categories-block__text'>
              <div className='categories-block__text_first-title'>
                {vladTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </div>
              <div className='categories-block__text_second-title'>
                {vladTexts.map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
                {/* <svg
                  viewBox='0 0 24 24'
                  style={{ width: '50rem', height: '50rem' }}
                  className='arrow-work'>
                  <path
                    fill='#2c3333'
                    d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                  <path
                    fill='#2c3333'
                    d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                </svg> */}
              </div>
            </h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
