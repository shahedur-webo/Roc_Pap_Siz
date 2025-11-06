import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PagesFragment = () => {
  const transmissionMaterial = (
    <MeshTransmissionMaterial
      thickness={2}
      distortion={0}
      temporalDistortion={0}
      anisotropicBlur={1.5}
      roughness={0.1}
      color={'#E0E0E0'}
    />
  );

  const aboutFirstRef = useRef();
  const secondPartRef = useRef();

  const [showFragment, setShowFragment] = useState(false);
  const [firstFrPosition, setFirstFrPosition] = useState(-1);
  const [secondFrPosition, setSecondFrPosition] = useState(1.3);

  useEffect(() => {
    const workScrollTrigger = ScrollTrigger.create({
      trigger: '.case-description',
      start: '0% 50%',
      end: '80% 50%',
      onEnter: () => setShowFragment(true),
      onLeaveBack: () => setShowFragment(false),
    });

    return () => workScrollTrigger.kill(); // Убираем триггер при размонтировании компонента
  }, [showFragment]);

  useEffect(() => {
    setFirstFrPosition(window.innerWidth < 768 ? -0.35 : -1);
    setSecondFrPosition(window.innerWidth < 768 ? 0.32 : 1.3);

    if (aboutFirstRef.current && showFragment) {
      gsap.to(aboutFirstRef.current.position, {
        scrollTrigger: {
          trigger: '.marquee',
          start: '-30% 100%',
          scrub: 2,
        },
        y: 0.1,
      });
    }
    if (secondPartRef.current && showFragment) {
      gsap.to(secondPartRef.current.position, {
        scrollTrigger: {
          trigger: '.marquee',
          start: '-30% 100%',
          scrub: 2,
        },
        y: 0.2,
      });
    }
  }, [showFragment]);

  useFrame(() => {
    if (showFragment) {
      aboutFirstRef.current.rotation.y += 0.001;
      secondPartRef.current.rotation.y += 0.001;
    }
  });

  const { nodes } = useGLTF('../model/aboutFr.gltf');
  return (
    <group dispose={null}>
      {showFragment ? (
        <group>
          <mesh
            ref={aboutFirstRef}
            castShadow
            receiveShadow
            geometry={nodes['first-part'].geometry}
            position={[firstFrPosition, -0.3, -0.2]}
            scale={[0.5, 0.5, 0.5]}
            rotation={[0, 0, 0]}>
            {transmissionMaterial}
          </mesh>
          <mesh
            ref={secondPartRef}
            castShadow
            receiveShadow
            geometry={nodes['second-part'].geometry}
            position={[secondFrPosition, -0.3, -0.1]}
            scale={[0.5, 0.5, 0.5]}
            rotation={[0.5, -0.7, -2.4]}>
            {transmissionMaterial}
          </mesh>
        </group>
      ) : null}
    </group>
  );
};

export default PagesFragment;
