import { Canvas, useThree } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useState, useEffect } from 'react';
import { AboutFr } from './AboutFr';

gsap.registerPlugin(ScrollTrigger);

const ResponsiveText = () => {
  // const { viewport } = useThree();
  // const [textSize, setTextSize] = useState(getTextSize(window.innerWidth));
  const [posY, setPosY] = useState(window.innerWidth > 768 ? -2.2 : -0.2);

  const { viewport } = useThree();
  const [textSize, setTextSize] = useState(getTextSize(viewport.width));

  useEffect(() => {
    const handleResize = () => {
      setTextSize(getTextSize(viewport.width));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [viewport.width]);

  function getTextSize(viewportWidth) {
    return viewportWidth * 0.215; // Подберите нужное значение коэффициента, чтобы добиться нужного визуального размера текста
  }

  return (
    <Center disableY={true}>
      <Text3D
        font='./fonts/MM-fonts.json'
        size={textSize}
        height={0.01}
        position={[0, posY, 0]}
        rotation={[0, Math.PI, 0]}>
        {'ABOUT MYSELF'}
        <meshBasicMaterial color='#2C3333' />
      </Text3D>
    </Center>
  );
};

const AboutPageCanvas = () => {
  const [playCanvas, setPlayCanvas] = useState(true);

  setTimeout(() => {
    ScrollTrigger.create({
      trigger: '.particles',
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

  return (
    <>
      <Canvas
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
          <>
            <ResponsiveText />
            <AboutFr />
          </>
        ) : null}
      </Canvas>
    </>
  );
};

export default AboutPageCanvas;
