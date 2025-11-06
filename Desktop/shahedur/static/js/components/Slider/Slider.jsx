import './style.scss';
import { lerp, clamp } from './math';
import { constants, instances } from './store/index';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('in-out-smooth', 'M0,0 C0.8,0 0.2,1 1,1');

const Slider = ({ slides }) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const container = containerRef.current;
  const stateRef = useRef({
    bounds: {},
    current: 0,
    last: 0,
    dragStart: 0,
    dragEnd: 0,
    dragging: false,
  });

  const [tick, setTick] = useState(0); // Force rerender

  const setCache = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const items = Array.from(container.querySelectorAll('.js-item')).map(
        (el) => {
          const bounds = el.getBoundingClientRect();
          return {
            img: el.querySelector('img'),
            bounds,
            x: 0,
          };
        }
      );
      itemsRef.current = items;
      stateRef.current.bounds = container.getBoundingClientRect();
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    const render = () => {
      if (constants.isDevice) return;

      const scrollLast = Math.abs(stateRef.current.last);
      itemsRef.current.forEach((item) => {
        const { bounds } = item;
        const inView =
          scrollLast + window.innerWidth >= bounds.left &&
          scrollLast < bounds.right;

        if (inView) {
          const min = bounds.left - window.innerWidth;
          const max = bounds.right;
          const percentage = ((scrollLast - min) * 100) / (max - min);
          const newMin =
            -(window.innerWidth / 12) * (window.innerWidth < 768 ? 5 : 3);
          const newMax = 0;
          item.x = ((percentage - 0) / (100 - 0)) * (newMax - newMin) + newMin;

          item.img.style.transform = `translate3d(${item.x}px, 0, 0) scale(1.3)`;
        }
      });

      setTick((tick) => tick + 1); // Force rerender to apply new state
    };

    const handleResize = () => {
      setCache();
    };

    const handleMouseup = () => {
      stateRef.current.dragging = false;
      stateRef.current.dragEnd = stateRef.current.current;
      document.body.classList.remove('is-dragging');
    };

    const handleMousedown = (e) => {
      stateRef.current.dragging = true;
      stateRef.current.dragEnd = stateRef.current.current - 1;
      stateRef.current.dragStart = e.clientX;
      document.body.classList.add('is-dragging');
    };

    const handleMousemove = (e) => {
      if (!stateRef.current.dragging) return;

      stateRef.current.current =
        stateRef.current.dragEnd +
        (e.clientX - stateRef.current.dragStart) * 1.5;
      stateRef.current.current = clamp(
        stateRef.current.current,
        0,
        -stateRef.current.bounds.width + window.innerWidth - 120
      );
    };

    const handleMouseleave = () => {
      stateRef.current.dragging = false;
      stateRef.current.dragEnd = stateRef.current.current;
      document.body.classList.remove('is-dragging');
    };

    const handleTouchStart = (e) => {
      stateRef.current.dragging = true;
      stateRef.current.dragEnd = stateRef.current.current - 1;
      stateRef.current.dragStart = e.touches[0].clientX;
      document.body.classList.add('is-dragging');
    };

    const handleTouchMove = (e) => {
      if (!stateRef.current.dragging) return;

      stateRef.current.current =
        stateRef.current.dragEnd +
        (e.touches[0].clientX - stateRef.current.dragStart) * 1.5;
      stateRef.current.current = clamp(
        stateRef.current.current,
        0,
        -stateRef.current.bounds.width + window.innerWidth
      );
    };

    const handleTouchEnd = () => {
      stateRef.current.dragging = false;
      stateRef.current.dragEnd = stateRef.current.current;
      document.body.classList.remove('is-dragging');
    };

    const handleNative = () => {
      stateRef.current.current = container.scrollLeft;
      stateRef.current.last = lerp(
        stateRef.current.last,
        container.scrollLeft,
        0.1
      );
    };

    const handleSmooth = () => {
      stateRef.current.last = lerp(
        stateRef.current.last,
        stateRef.current.current,
        0.1
      );
      container.style.transform = `translate3d(${stateRef.current.last}px, 0, 0)`;
    };

    const tickHandler = () => {
      if (constants.isDevice) {
        handleNative();
      } else {
        handleSmooth();
      }
      render();
      requestAnimationFrame(tickHandler);
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mouseup', handleMouseup);
    container.addEventListener('mousedown', handleMousedown);
    container.addEventListener('mouseleave', handleMouseleave);
    container.addEventListener('mousemove', handleMousemove);

    // Touch events
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    requestAnimationFrame(tickHandler);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mouseup', handleMouseup);
      container.removeEventListener('mousedown', handleMousedown);
      container.removeEventListener('mouseleave', handleMouseleave);
      container.removeEventListener('mousemove', handleMousemove);

      // Remove touch events
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [setCache]);

  useEffect(() => {
    setCache();
  }, [setCache]);

  const dragIconRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const dragIcon = dragIconRef.current;

    const handleMouseEnter = () => {
      gsap.to(dragIcon, {
        duration: 0.3,
        opacity: 1,
        scale: 1,
      });
    };

    const handleMouseMove = (e) => {
      const containerRect = container.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      gsap.to(dragIcon, {
        duration: 0.8,
        x: x,
        y: y,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(dragIcon, {
        duration: 0.3,
        opacity: 0,
        scale: 0,
      });
    };

    const handleMouseDown = () => {
      gsap.to(dragIcon, {
        duration: 0.2,
        scale: 0.6,
      });
      gsap.to(dragIcon.querySelector('span:first-child'), {
        duration: 0.2,
        x: 5,
        stagger: 0.1,
      });
      gsap.to(dragIcon.querySelector('span:last-child'), {
        duration: 0.2,
        x: -5,
        stagger: 0.1,
      });
    };

    const handleMouseUp = () => {
      gsap.to(dragIcon, {
        duration: 0.2,
        scale: 1,
      });
      gsap.to(dragIcon.querySelectorAll('span'), {
        duration: 0.2,
        x: 0,
        stagger: 0.1,
      });
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className='slider js-slider'>
      <div className='slider-drag'>drag</div>
      <div
        className='slider__container js-container'
        data-scroll
        ref={containerRef}>
        <div
          className='drag-icon'
          ref={dragIconRef}
          style={{ opacity: 0, position: 'absolute', pointerEvents: 'none' }}>
          <span></span>
          <span></span>
        </div>
        {slides.map((slide, index) => (
          <div
            className='slider__item js-item'
            key={index}
            style={{ '--aspect-ratio': slide.aspectRatio }}>
            <div
              className='slider__item-img-wrap js-img-wrap js-img'
              style={{ '--aspect-ratio': slide.aspectRatio }}>
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className='slider__item-img'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
