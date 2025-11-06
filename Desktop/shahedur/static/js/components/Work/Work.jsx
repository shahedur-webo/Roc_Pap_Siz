import './style.scss';
import WorkComponent from './WorkComponent';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    gsap.to('.work-recent svg', {
      scrollTrigger: {
        trigger: '.work-recent',
        start: '0% 100%',
      },
      duration: 1.5,
      strokeDasharray: '1000px 1000px',
      ease: 'power4.in',
    });
  }, []);

  return (
    <section className='work work-main'>
      <div className='container'>
        <div className='work__title'>
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
        </div>

        <WorkComponent />
      </div>
    </section>
  );
};

export default Work;
