import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './style.scss';
import Magnetic from '../MagneticButton/MagneticButton';
import { NavLink } from 'react-router-dom';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const handleNavLinkClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1100);
  };

  useEffect(() => {
    gsap.fromTo(
      '.about-title__img img',
      { bottom: -100 + '%' },
      {
        scrollTrigger: {
          trigger: '.about-title__img',
          start: window.innerWidth < 768 ? 'top 10%' : 'top 70%',
          end: window.innerWidth < 768 ? 'bottom -20%' : 'bottom 50%',
          scrub: 1.3,
        },
        bottom: 0,
        duration: 1.6,
        ease: 'power4.out',
      }
    );

    gsap.fromTo(
      '.about-title__title_wrapper span',
      { y: 100 + '%' },
      {
        scrollTrigger: {
          trigger: '.about-title__title_wrapper',
          start: window.innerWidth < 768 ? 'top 20%' : 'top 85%',
          end: window.innerWidth < 768 ? 'bottom -10%' : 'bottom 50%',
          scrub: 1.3,
        },
        y: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power4.out',
      }
    );
    gsap.utils
      .toArray('.about-description__wrapper')
      .forEach((wrapper, index) => {
        gsap.to(wrapper.children, {
          scrollTrigger: {
            trigger: '.about',
            start: '80% 80%',
          },
          y: 0,
          duration: 0.8,
          delay: 0.1 * index,
        });
      });
  }, []);

  return (
    <section className='about'>
      <div className='container'>
        <div className='about__wrapper'>
          <div className='about-title'>
            <h1 className='about-title__title'>
              <span className='about-title__title_wrapper'>
                <span>h</span>
              </span>
              <span className='about-title__title_wrapper'>
                <span>e</span>
              </span>
              <span className='about-title__title_wrapper'>
                <span>l</span>
              </span>
              <span className='about-title__title_wrapper'>
                <span>l</span>
              </span>
              <span className='about-title__title_wrapper'>
                <span>o</span>
              </span>
              <span className='about-title__title_wrapper'>
                <span>o</span>
              </span>
              <span className='about-title__title_wrapper'>
                <span>o</span>
              </span>
              <span className='about-title__title_wrapper'>
                <span>o</span>
              </span>
              <span className='about-title__title_wrapper'>
                <span>o</span>
              </span>
            </h1>
            <div className='about-title__img'>
              <img
                src='./img/me.jpg'
                alt=''
              />
            </div>
          </div>

          <div className='about-text'>
            <div className='about-description'>
              <span className='about-description__wrapper'>
                <span className='about-description__text'>
                  My name is Max, and I'm a front-end developer, who creates
                  websites with a special focus on animations and user
                  interaction.
                </span>
              </span>
              <span className='about-description__wrapper'>
                <span className='about-description__text'>
                  I'm ready to bring your ideas to life and add a touch of
                  originality to the online space.
                </span>
              </span>
            </div>
            <div className='about-project'>
              <h2>Let's make your project special!</h2>
            </div>
          </div>
        </div>
        <div className='about-more-btn'>
          <Magnetic>
            <NavLink
              to='about'
              onClick={handleNavLinkClick}>
              more about me
            </NavLink>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default About;
