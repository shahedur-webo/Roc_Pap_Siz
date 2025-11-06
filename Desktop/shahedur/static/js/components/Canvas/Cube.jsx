import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';
import { easing } from 'maath';
import gsap from 'gsap';
import { useState, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import ScrollTrigger from 'gsap/ScrollTrigger';
import OrientationHandler from './OrientationHandler';

gsap.registerPlugin(ScrollTrigger);

export function Cube({ damping = 0.3, orientationEnabled, ...props }) {
  const { nodes } = useGLTF('../model/cube.gltf');
  const [size, setSize] = useState(2);
  const cubeRef = useRef();
  const scrollY = useRef(0);
  const [cubePosition, setCubePosition] = useState({ x: 0, y: 0 });
  const [groupRotation, setGroupRotation] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth < 1100 ? 0.25 : 2);
      setGroupRotation(
        window.innerWidth < 1100 ? { x: 0.3, y: 0.5 } : { x: 0, y: 0 }
      );
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    if (window.innerWidth > 1100) {
      gsap.to(cubeRef.current.position, {
        scrollTrigger: {
          trigger: '.about',
          start: '-100% 0%',
          scrub: 3,
        },
        y: 5,
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useFrame((state, delta) => {
    if (window.innerWidth > 1100) {
      const viewport = state.viewport.getCurrentViewport(
        state.camera,
        [0, 0, 0]
      );

      scrollY.current = window.scrollY / document.documentElement.scrollHeight;

      if (scrollY.current < 0.06) {
        easing.damp3(
          cubeRef.current.position,
          [
            -(state.pointer.x * viewport.width * 0.08),
            state.pointer.y * viewport.height * 0.08,
            12,
          ],
          damping,
          delta
        );
        easing.damp3(
          cubeRef.current.rotation,
          [
            -(state.pointer.x * viewport.width * 0.04),
            0,
            state.pointer.y * viewport.height * 0.04,
          ],
          damping,
          delta
        );
      }
    } else {
      // Обновляем позицию и вращение куба на мобильных устройствах
      cubeRef.current.position.set(
        cubePosition.x / 1.3,
        cubePosition.y / 1.3,
        0
      );
      cubeRef.current.rotation.set(cubePosition.x * 2, cubePosition.y * 2, 0);
    }
  });

  return (
    <>
      {window.innerWidth < 1100 && orientationEnabled && (
        <OrientationHandler
          setCubePosition={setCubePosition}
          orientationEnabled={orientationEnabled}
        />
      )}
      <group rotation={[groupRotation.x, groupRotation.y, 0]}>
        <group>
          <group
            ref={cubeRef}
            {...props}
            scale={[size, size, size]}>
            <mesh
              name='Cube'
              geometry={nodes.Cube.geometry}>
              {transmissionMaterial}
            </mesh>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload('../model/cube.gltf');
