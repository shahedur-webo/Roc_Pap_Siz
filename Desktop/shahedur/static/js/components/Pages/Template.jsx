import './style.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import PagesFragment from './PagesFragment';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Text3D } from '@react-three/drei';
import Magnetic from '../MagneticButton/MagneticButton';
import Slider from '../Slider/Slider';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);
const Template = ({
  text,
  mainImage,
  description,
  canvasText,
  changeCase,
  changeCaseImg,
  nextPageLink,
  nextCaseTitle,
  nextCaseImg,
  mySkills,
  templateLink,
  slides,
}) => {
  const letters = text.split('');

  const handleNavLinkClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1100);
  };

  const textRef = useRef();
  const [showText, setShowText] = useState(false);
  const [size, setSize] = useState(0.3);
  const [planeHeight, setPlaneHeight] = useState(0.6);
  const [textPositionY, setTextPositionY] = useState(-0.15);

  useEffect(() => {
    // Очистка всех существующих триггеров ScrollTrigger
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Настройки размера и положения текста в зависимости от ширины окна
    setSize(window.innerWidth < 768 ? 0.15 : 0.3);
    setPlaneHeight(window.innerWidth < 768 ? 0.3 : 0.6);
    setTextPositionY(window.innerWidth < 768 ? -0.08 : -0.15);

    // Анимации с использованием GSAP
    gsap.to('.case-hero__title span', {
      bottom: 0,
      stagger: 0.02,
      duration: 1.3,
      delay: 0.5,
      ease: 'power4.inOut',
    });
    gsap.to('.case-hero__skills', {
      opacity: 1,
      delay: 1,
      duration: 1.3,
      ease: 'power4.inOut',
    });

    gsap.to('.case-hero__wrapper', {
      height: window.innerWidth > 1100 ? '60vh' : '50vh',
      delay: 1.5,
      duration: 1.5,
      ease: 'power4.inOut',
    });

    gsap.fromTo(
      '.case-image-main__image img',
      {
        yPercent: -15,
      },
      {
        scrollTrigger: {
          trigger: '.case-image-main',
          scrub: true,
        },
        yPercent: 15,
        ease: 'none',
      }
    );
  }, []);

  useEffect(() => {
    const caseDescr = document.querySelector('.case-description');
    const anotherCase = document.querySelector('.another-case');

    if (caseDescr) {
      const workScrollTrigger = ScrollTrigger.create({
        trigger: '.case-description',
        start: '0% 100%',
        end: '150% 50%',
        onEnter: () => setShowText(true),
        onLeaveBack: () => setShowText(false),
      });

      if (anotherCase) {
        gsap.to(anotherCase, {
          scrollTrigger: {
            trigger: '.case-hero',
            start: `${window.innerWidth > 1100 ? '80% 0%' : '30% 0%'}`,
            end: '0% 0%',
            toggleActions: 'play none none reverse',
            onEnter() {
              gsap.to(anotherCase.querySelectorAll('a, h3 span'), {
                y: '0%',
                stagger: 0.02,
                pointerEvents: 'auto',
                duration: 0.8,
                ease: 'power4.inOut',
              });
            },
            onLeaveBack() {
              gsap.to(anotherCase.querySelectorAll('a'), {
                y: '200%',
                stagger: 0.02,
                pointerEvents: 'none',
                duration: 0.8,
                ease: 'power4.inOut',
              });
              gsap.to(anotherCase.querySelector('h3 span'), {
                y: '150%',
                duration: 0.8,
                ease: 'power4.inOut',
              });
            },
          },
        });

        gsap.to(anotherCase, {
          scrollTrigger: {
            trigger: '.slider-gallery',
            start: `${window.innerWidth > 1100 ? '0% 0%' : '0% 100%'}`,
            end: '0% 0%',
            toggleActions: 'play none none reverse',
            onEnter() {
              if (window.innerWidth > 1100) {
                gsap.to(anotherCase, {
                  y: '-120rem',
                  duration: 1,
                  ease: 'power4.inOut',
                });
              } else {
                gsap.to(anotherCase.querySelectorAll('a, h3 span'), {
                  y: '200%',
                  stagger: 0.02,
                  pointerEvents: 'auto',
                  duration: 0.8,
                  ease: 'power4.inOut',
                });
              }
            },
            onLeaveBack() {
              if (window.innerWidth > 1100) {
                gsap.to(anotherCase, {
                  y: '0%',
                  duration: 0.6,
                });
              } else {
                gsap.to(anotherCase.querySelectorAll('a, h3 span'), {
                  y: '0%',
                  stagger: 0.02,
                  pointerEvents: 'auto',
                  duration: 0.8,
                  ease: 'power4.inOut',
                });
              }
            },
          },
        });

        gsap.to('.case-description__wrapper .work-recent svg', {
          scrollTrigger: {
            trigger: '.work-recent',
            start: '0% 100%',
          },
          duration: 1.5,
          strokeDasharray: '1000px 1000px',
          ease: 'power4.in',
        });
      }

      return () => {
        workScrollTrigger.kill();
      };
    }
  }, []);

  useEffect(() => {
    if (showText && textRef.current) {
      gsap.to(textRef.current.position, {
        scrollTrigger: {
          trigger: '.marquee',
          start: '-50% 100%',
          scrub: 2,
        },
        x: 0.9,
      });
    }
  }, [showText]);

  const getImageKey = (key) => `${key}Img`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8 }}>
        <div className='another-case'>
          <h3>
            <span>move to another case</span>
          </h3>
          {Object.entries(changeCase).map(([key, url]) => (
            <NavLink
              to={url}
              key={key}
              onClick={handleNavLinkClick}>
              <img
                src={changeCaseImg[getImageKey(key)]}
                alt={key}
              />
            </NavLink>
          ))}
        </div>

        <section className='case-hero'>
          <img
            className='case__noise'
            src='../img/noise-form.png'
            alt=''
          />
          <div className='container'>
            <div className='case-hero__wrapper'>
              <div className='case-hero__blocks-wrapper'>
                <h2 className='case-hero__title'>
                  {letters.map((letter, index) => (
                    <span key={index}>{letter}</span>
                  ))}
                </h2>
                <div className='case-hero__skills'>
                  {Object.values(mySkills).map((skill, index) => (
                    <div key={index}>{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='case-image-main'>
          <div className='case-image-main__image'>
            <img
              src={mainImage}
              alt={text}
            />
          </div>
        </section>
        <section className='case-description'>
          <div className='container'>
            <div className='case-description__wrapper'>
              <h3 className='work-recent'>
                my role
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='238'
                  height='28'
                  viewBox='0 0 238 28'
                  fill='none'>
                  <path
                    d='M5.83887 22.8387C19.6597 22.4068 33.0508 18.7798 46.6095 16.3871C89.9199 8.74411 133.51 7.17148 177.434 6.08246C188.003 5.8204 213.067 5.27601 226 5.27601C228.194 5.27601 234.192 4.54845 232.541 5.99286C228.899 9.18023 218.251 8.72566 214.083 9.12906C183.659 12.0733 153.449 12.2497 122.954 13.4301C111.327 13.8802 99.9438 15.1841 88.4554 16.9248C85.1588 17.4242 78.544 17.3334 75.5521 19.6129C71.4434 22.7434 85.7989 21.2068 90.9643 21.2258C113.604 21.3091 136.25 20.9982 158.885 21.5843C162.701 21.683 171.905 22.008 176.627 22.4803C177.292 22.5468 175.324 22.8314 174.656 22.8387C167.788 22.9142 160.915 22.8387 154.047 22.8387C146.042 22.8387 138.037 22.8387 130.032 22.8387'
                    stroke='#F9F971'
                    strokeOpacity='0.917647'
                    strokeWidth='10'
                    strokeLinecap='round'
                  />
                </svg>
              </h3>
              <p className='case-description__text'>{description}</p>
            </div>
            <div className='button-wrapper'>
              <Magnetic>
                <a
                  className='button'
                  href={templateLink}
                  target='_blank'>
                  <span className='live-text'>
                    Live site
                    <span className='live-text__svg'>
                      <svg viewBox='0 0 24 24'>
                        <path
                          fill='#ffffff'
                          d='M3.2 23.3.7 20.8 17.5 4h-15V.5h21v21H20v-15L3.2 23.3Z'></path>
                        <path
                          fill='#ffffff'
                          d='M3.2 24 0 20.8 16.3 4.5H2V0h22v22h-4.5V7.7L3.2 24ZM20 6.5v15h3.5V.5h-21V4h15L.7 20.8l2.5 2.5L20 6.5Z'></path>
                      </svg>
                    </span>
                  </span>
                  <span className='color-wrap'>
                    <span className='colorBtn'></span>
                    <span className='colorBtn'></span>
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>
        </section>

        <section className='marquee'>
          <Canvas
            camera={{
              position: [0, 0, -1],
              fov: 50,
            }}
            gl={{
              toneMapping: THREE.NoToneMapping,
              toneMappingExposure: 1,
            }}
            performance={{ min: 0.5 }}>
            <color
              attach='background'
              args={['#feffff']}
            />
            <mesh
              position={[0, 0, 0]}
              rotation={[Math.PI, 0, Math.PI]}>
              <planeGeometry args={[window.innerWidth, planeHeight]} />
              <meshBasicMaterial color='#17242a' />
            </mesh>
            <group ref={textRef}>
              {showText ? (
                <Text3D
                  font='../fonts/MM-fonts.json'
                  size={size}
                  height={0.001}
                  position={[2.3 * 2, textPositionY, 0]}
                  rotation={[0, Math.PI, 0]}>
                  {canvasText}

                  <meshBasicMaterial color='#ffffff' />
                </Text3D>
              ) : null}
            </group>
            <PagesFragment />
          </Canvas>
        </section>

        <section className='slider-gallery'>
          <Slider slides={slides} />
        </section>

        <section className='case-next'>
          <img
            className='case-next__noise'
            src='../img/noise-form.png'
            alt=''
          />
          <div className='container'>
            <div className='case-next__wrapper'>
              <NavLink
                className='case-next__link'
                to={nextPageLink}
                onClick={handleNavLinkClick}>
                <p>{nextCaseTitle}</p>
                <div className='case-next__link-img'>
                  <img
                    src={nextCaseImg}
                    alt={nextCaseImg}
                  />
                </div>
              </NavLink>
            </div>
          </div>
        </section>
        <Footer />
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

export default Template;
