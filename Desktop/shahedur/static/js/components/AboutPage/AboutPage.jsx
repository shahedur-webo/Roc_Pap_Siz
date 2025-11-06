import './style.scss';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import AboutPageCanvas from './AboutPageCanvas';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Particles from './Particles/Particles';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  let aboutPageInfo = document.querySelector('.about-page-info');

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.fromTo(
      '.about-page-info-img img',
      {
        scrollTrigger: {
          trigger: '.about-page-info-wrapper',
          scrub: true,
        },
        yPercent: -15,
        ease: 'none',
      },
      {
        scrollTrigger: {
          trigger: '.about-page-info-wrapper',
          scrub: true,
        },
        yPercent: 15,
        ease: 'none',
      }
    );

    gsap.to('.about-page-hero-white', {
      scrollTrigger: {
        trigger: '.about-page-hero',
        start: '30% 30%',
        end: '200% 50%',
        scrub: true,
      },
      y: -100 + '%',
    });

    gsap.to('.about-page-info-wrapper p', {
      scrollTrigger: {
        trigger: '.about-page-info',
        start: '20% 20%',
      },
      onComplete() {
        document
          .querySelector('.about-page-info-wrapper p')
          .classList.add('scale-circle');
      },
    });

    gsap.to('.about-page-path-wrapper', {
      scrollTrigger: {
        trigger: '.about-page-info',
        start: '80% 80%',
      },
      onComplete() {
        document
          .querySelector('.about-page-path-wrapper')
          .classList.add('scale-circle');
      },
    });

    // if (aboutPageInfo) {
    //   gsap.to('.particles', {
    //     scrollTrigger: {
    //       trigger: '.particles',
    //       start: '50% 50%',
    //     },
    //     onComplete() {
    //       document.querySelector('.particles').classList.add('scale-circle');
    //     },
    //   });
    // }

    gsap.to('.particles h2 svg', {
      scrollTrigger: {
        trigger: '.particles',
        start: '100% 200%',
      },
      duration: 3,
      strokeDasharray: '1000px 1000px',
      ease: 'power4.inOut',
    });

    gsap.to('.particles-block__item span', {
      scrollTrigger: {
        trigger: '.particles',
        start: window.innerWidth > 768 ? '-130% -130%' : '0% 70%',
      },
      y: 0,
      duration: 1.6,
      stagger: 0.1,
      ease: 'power4.inOut',
      // onComplete() {
      //   document.querySelector('.particles').classList.add('scale-circle');
      // },
    });
  }, []);

  const mouse = useRef([0, 0]);

  const handleMouseMove = (event) => {
    mouse.current = [event.clientX, event.clientY];
  };

  return (
    <>
      <motion.div
        className='about-page'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8 }}>
        <section className='about-page-hero'>
          <AboutPageCanvas />
          <div className='about-page-hero-white'></div>
          <div className='about-page-hero-white-bottom'></div>
          <img
            className='about-page-hero__noise'
            src='../img/noise-form.png'
            alt=''
          />
        </section>

        <section className='about-page-info'>
          <div className='container'>
            <div className='about-page-info-wrapper'>
              <p>
                A frontend developer specializing in website creation, with
                experience collaborating with designers and backend developers,
                and integrating animations and 3D graphics for a unique visual
                experience.
              </p>
              <div className='about-page-info-img'>
                <img
                  src='./img/me.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='about-page-path-wrapper'>
              <p>
                I was born in Kharkiv, Ukraine, and currently live in
                Düsseldorf, Germany. My journey into frontend development began
                in 2020, and since then, I’ve fallen in love with everything
                related to the visual aspects of websites, animations, and 3D
                graphics.
              </p>
            </div>
          </div>
        </section>

        <section
          className='particles'
          onMouseMove={handleMouseMove}>
          <h2>
            Soooo, I will help you with...
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
          </h2>
          <div className='particles-canvas'>
            <Canvas>
              <Particles
                count={2000}
                mouse={mouse}
              />
            </Canvas>
          </div>
          <div className='container'>
            <div className='particles-wrapper'>
              <div className='particles-block'>
                <p className='particles-block__item'>
                  <span>Creating modern and stylish website designs.</span>
                </p>
              </div>
              <div className='particles-block'>
                <p className='particles-block__item'>
                  <span>Building high-converting, sales-focused websites.</span>
                </p>
              </div>
              <div className='particles-block'>
                <p className='particles-block__item'>
                  <span>Designing captivating animations and 3D graphics.</span>
                </p>
              </div>
              <div className='particles-block'>
                <p className='particles-block__item'>
                  <span>
                    Optimizing interfaces for enhanced user interaction.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Form />
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

export default AboutPage;
