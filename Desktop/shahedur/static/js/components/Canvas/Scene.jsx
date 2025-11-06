import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import * as THREE from 'three';
import TextContent from './TextContent';
import './style.scss';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cube } from './Cube';

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const [playCanvas, setPlayCanvas] = useState(true);
  const [orientationEnabled, setOrientationEnabled] = useState(false);

  function enableOrientation() {
    // Проверка, поддерживает ли устройство запрос разрешения
    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      DeviceOrientationEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === 'granted') {
            setOrientationEnabled(true);
          } else {
            alert('Please enable motion access in your device settings.');
          }
        })
        .catch((error) => {
          console.error(
            'Error requesting device orientation permission:',
            error
          );
        });
    } else {
      setOrientationEnabled(true);
    }
  }

  useEffect(() => {
    gsap.to('.canvas', {
      scrollTrigger: {
        trigger: '.form',
        start: '40% 80%',
        end: '40% 80%',
        scrub: 0.5,
      },
      opacity: 0,
      visibility: 'hidden',
    });
    gsap.to('.hero-white', {
      scrollTrigger: {
        trigger: '.hero',
        start: '0% 0%',
        end: '200% 50%',
        scrub: true,
      },
      y: -100 + '%',
    });

    // Добавляем обработчик события клика на окно
    window.addEventListener('click', enableOrientation);

    // Очистка обработчика при размонтировании компонента
    return () => {
      window.removeEventListener('click', enableOrientation);
    };
  }, []); // Пустой массив зависимостей гарантирует, что useEffect сработает только при монтировании и размонтировании

  useEffect(() => {
    const scrollTrigger = setTimeout(() => {
      ScrollTrigger.create({
        trigger: '.work-main',
        start: 'top top',
        end: 'top top',
        onEnter: () => {
          setPlayCanvas(false);
        },
        onLeaveBack: () => {
          setPlayCanvas(true);
        },
      });
    }, 40);

    return () => clearTimeout(scrollTrigger);
  }, []);

  return (
    <>
      <section className='hero'>
        <img
          className='hero__noise'
          src='../img/noise-form.png'
          alt=''
        />
        <img
          className='hero__spots'
          src='../img/noise-form.png'
          alt=''
        />
        <Canvas
          className='canvas'
          camera={{
            position: [0, 0, -5],
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
          {playCanvas ? (
            <group>
              <group>
                <Cube orientationEnabled={orientationEnabled} />
              </group>
              <TextContent />
            </group>
          ) : null}
        </Canvas>
        <div className='hero-white'></div>
      </section>
    </>
  );
};

export default Scene;
