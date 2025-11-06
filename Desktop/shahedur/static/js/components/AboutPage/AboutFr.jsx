import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import OrientationHandler from '../Canvas/OrientationHandler';

gsap.registerPlugin(ScrollTrigger);

export function AboutFr(props) {
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
  const [cubePosition, setCubePosition] = useState({ x: 0, y: 0 });
  const [scaleFr, setScaleFr] = useState(1);
  const [positionFirst, setPositionFirst] = useState(-1.0);
  const [positionSecond, setPositionSecond] = useState(2.5);

  useEffect(() => {
    const handleResize = () => {
      setPositionFirst(window.innerWidth < 1100 ? -0.5 : -1.0);
      setPositionSecond(window.innerWidth < 1100 ? 0.7 : 2.5);
      setScaleFr(window.innerWidth < 1100 ? 0.8 : 1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    if (aboutFirstRef.current) {
      gsap.to(aboutFirstRef.current.position, {
        scrollTrigger: {
          trigger: '.about-page-info',
          start: '0% 100%',
          scrub: 3,
        },
        y: 1,
      });
    }
    if (secondPartRef.current) {
      gsap.to(secondPartRef.current.position, {
        scrollTrigger: {
          trigger: '.about-page-info',
          start: '0% 100%',
          scrub: 2,
        },
        y: 2,
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useFrame(() => {
    if (window.innerWidth > 1100) {
      aboutFirstRef.current.rotation.y += 0.001;
      secondPartRef.current.rotation.y += 0.001;
    } else {
      aboutFirstRef.current.rotation.set(
        cubePosition.x / 1,
        cubePosition.y / 1,
        aboutFirstRef.current.rotation.z
      );
      secondPartRef.current.rotation.set(
        cubePosition.x / 0.5,
        cubePosition.y / 0.5,
        secondPartRef.current.rotation.z
      );
    }
  });

  const { nodes } = useGLTF('../model/aboutFr.gltf');
  return (
    <>
      {window.innerWidth < 1100 && (
        <OrientationHandler setCubePosition={setCubePosition} />
      )}
      <group
        scale={[scaleFr, scaleFr, scaleFr]}
        {...props}
        dispose={null}>
        <group>
          <mesh
            ref={aboutFirstRef}
            castShadow
            receiveShadow
            geometry={nodes['first-part'].geometry}
            position={[positionFirst, -0.5, -2.9]}
            rotation={[-2.2, -3.3, 4.76]}>
            {transmissionMaterial}
          </mesh>
          <mesh
            ref={secondPartRef}
            castShadow
            receiveShadow
            geometry={nodes['second-part'].geometry}
            position={[positionSecond, -0.6, -1.6]}
            rotation={[0.5, -0.7, -2.4]}>
            {transmissionMaterial}
          </mesh>
        </group>
      </group>
    </>
  );
}

useGLTF.preload('../model/aboutFr.gltf');
