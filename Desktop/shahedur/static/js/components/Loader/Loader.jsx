import './style.scss';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

const Loader = () => {
  const [cubePosition, setCubePosition] = useState(-10);
  const lenis = useLenis();

  useEffect(() => {
    // Появление кнопки "Start" после завершения всех анимаций
    gsap.to('.start-btn', {
      delay: 8,
      duration: 1.5,
      opacity: 1,
      ease: 'power4.inOut',
      pointerEvents: 'auto',
    });
    gsap.to('.loading span', {
      delay: 1,
      duration: 0.8,
      y: 0,
      ease: 'power4.inOut',
      stagger: 0.02,
    });

    gsap.to('.counter-number span:nth-child(1)', {
      duration: 0.8,
      y: 0,
      delay: 2,
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number span:nth-child(1)', {
      duration: 0.8,
      delay: 3,
      y: -100 + '%',
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number span:nth-child(2)', {
      duration: 0.8,
      delay: 3.1,
      y: -100 + '%',
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number span:nth-child(2)', {
      duration: 0.8,
      delay: 4.1,
      y: -200 + '%',
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number span:nth-child(3)', {
      duration: 0.8,
      delay: 4.1,
      y: -200 + '%',
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number span:nth-child(3)', {
      duration: 0.8,
      delay: 5.1,
      y: -300 + '%',
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number span:nth-child(4)', {
      duration: 0.8,
      delay: 5.2,
      y: -300 + '%',
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number span:nth-child(4)', {
      duration: 0.8,
      delay: 6,
      y: -400 + '%',
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number span:nth-child(5)', {
      duration: 0.8,
      delay: 6.1,
      y: -400 + '%',
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number span:nth-child(5)', {
      duration: 0.8,
      delay: 7.3,
      y: -500 + '%',
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number span:nth-child(6)', {
      duration: 0.8,
      delay: 7.4,
      y: -500 + '%',
      ease: 'power4.inOut',
    });

    // ====================== SECOND NUMBER ====================== //
    gsap.to('.counter-number-second span:nth-child(1)', {
      duration: 0.8,
      delay: 0.1,
      y: 0,
      delay: 2.1,
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number-second span:nth-child(1)', {
      duration: 0.8,
      delay: 3.1,
      y: -100 + '%',
      ease: 'power4.inOut',
    });

    gsap.to('.counter-number-second span:nth-child(2)', {
      duration: 0.8,
      delay: 3.2,
      y: -100 + '%',
      ease: 'power4.inOut',
    });

    gsap.to('.counter-number-second span:nth-child(2)', {
      duration: 0.8,
      delay: 4.2,
      y: -200 + '%',
      ease: 'power4.inOut',
    });

    gsap.to('.counter-number-second span:nth-child(3)', {
      duration: 0.8,
      delay: 4.2,
      y: -200 + '%',
      ease: 'power4.inOut',
    });
    gsap.to('.counter-number-second span:nth-child(3)', {
      duration: 0.8,
      delay: 6.1,
      y: -300 + '%',
      ease: 'power4.inOut',
    });

    gsap.to('.counter-number-second span:nth-child(4)', {
      duration: 0.8,
      delay: 6.2,
      y: -300 + '%',
      ease: 'power4.inOut',
    });

    gsap.to('.counter-number-second span:nth-child(4)', {
      duration: 0.8,
      delay: 7.4,
      y: -500 + '%',
      ease: 'power4.inOut',
    });

    gsap.to('.counter-number-second span:nth-child(5)', {
      duration: 0.8,
      delay: 7.5,
      y: -400 + '%',
      ease: 'power4.inOut',
    });
  }, []);

  const handleStartClick = () => {
    // Изменяем позицию куба
    setCubePosition(0); // Позиция куба теперь будет 0

    gsap.to('.loading span', {
      duration: 0.8,
      y: 100 + '%',
      ease: 'power4.inOut',
      stagger: 0.02,
    });

    gsap.to('.start-btn', {
      opacity: 0,
      pointerEvents: 'auto',
      ease: 'power4.inOut',
    });

    gsap.to('.start-btn', {
      delay: 0.5,
      display: 'none',
    });

    gsap.to('.counter-number span:nth-child(6)', {
      duration: 0.8,
      y: -600 + '%',
      delay: 0.5,
      ease: 'power4.inOut',
    });

    gsap.to('.counter-number-second span:nth-child(5)', {
      duration: 0.8,
      y: -500 + '%',
      delay: 0.5,
      ease: 'power4.inOut',
    });

    gsap.to('.App', {
      delay: 0.7,
      onComplete() {
        document.querySelector('.App').classList.add('app-active');
      },
    });
    gsap.to('.App', {
      delay: 1.3,
      onComplete() {
        document.querySelector('.App').classList.add('logo-width');
      },
    });

    gsap.to('.header-btn', {
      scale: 1,
      delay: 1.5,
      duration: 2,
      ease: 'elastic.out',
    });

    // Убираем лоадер
    gsap.to('.loader', {
      duration: 2.3,
      y: -130 + '%',
      delay: 2,
      pointerEvents: 'none',
      ease: 'power4.inOut',
    });

    if (lenis) {
      lenis.start();
    }
  };

  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }
  }, [lenis]);

  return (
    <div className='loader'>
      <div className='counter'>
        <div className='counter-number'>
          <span>0</span>
          <span>2</span>
          <span>4</span>
          <span>8</span>
          <span>9</span>
          <span>m</span>
        </div>
        <div className='counter-number-second'>
          <span>2</span>
          <span>7</span>
          <span>5</span>
          <span>9</span>
          <span>m</span>
        </div>
      </div>
      <div
        className='start-btn'
        onClick={handleStartClick}
        style={{ opacity: 0, pointerEvents: 'none' }}>
        Visit Website
      </div>
      <div className='loading'>
        <span>l</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
    </div>
  );
};

export default Loader;
