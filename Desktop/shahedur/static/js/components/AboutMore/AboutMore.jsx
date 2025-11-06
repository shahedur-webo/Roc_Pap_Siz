import './style.scss';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutMore = () => {
  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.fromTo(
        '.about-more__img img',
        {
          scrollTrigger: {
            trigger: '.about-more',
            scrub: true,
          },
          yPercent: -20,
          ease: 'none',
        },
        {
          scrollTrigger: {
            trigger: '.about-more',
            scrub: true,
          },
          yPercent: 20,
          ease: 'none',
        }
      );
    }
  }, []);

  return (
    <>
      <section className='about-more'>
        <div className='about-more__img'>
          <img
            src='./img/about-img.jpg'
            alt=''
          />
        </div>
        <h2 className='about-more__title'>
          Need a design? I collaborate with talented designers and 3D artists to
          create unique solutions for your project.
          <img
            className='about-more__title_spots'
            src='../img/spots.png'
            alt=''
          />
        </h2>
      </section>
    </>
  );
};

export default AboutMore;
