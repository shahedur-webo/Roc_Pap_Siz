import * as THREE from 'three';
import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { BallCollider, Physics, RigidBody } from '@react-three/rapier';
import './style.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import FormFields from '../FormFields/FormFields';

gsap.registerPlugin(ScrollTrigger);

const shuffle = () => [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' },
  { id: '11' },
  { id: '12' },
  { id: '13' },
  { id: '14' },
  { id: '15' },
  { id: '16' },
  { id: '17' },
  { id: '18' },
  { id: '19' },
  { id: '20' },
];

export default function Form(props) {
  const ball = useMemo(() => shuffle());
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const formElement = document.querySelector('.form');
    const formTitleElement = document.querySelector('.form-title');
    if (formElement && formTitleElement) {
      setTimeout(() => {
        ScrollTrigger.create({
          trigger: formElement,
          start: '10% 100%',
          onEnter: () => {
            formTitleElement.classList.add('svg-draw');
          },
        });
        ScrollTrigger.create({
          trigger: formElement,
          start: '-40% 50%',
          end: '-40% 50%',
          onEnter: () => setShowCanvas(true),
          onLeaveBack: () => setShowCanvas(false),
        });
      }, 40);

      ScrollTrigger.refresh();
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className='form'>
      <img
        className='form__noise'
        src='../img/noise-form.png'
        alt=''
      />
      <div className='container'>
        <h2 className='form-title'>
          Let's create a website
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
        <div className='form-wrapper'>
          <FormFields />
          <div className='form-canvas'>
            <Canvas
              shadows
              gl={{
                antialias: true,
              }}
              performance={{ min: 0.5 }}
              camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
              {...props}>
              <color
                attach='background'
                args={['#17242a']}
              />

              {showCanvas ? (
                <>
                  <fog
                    attach='fog'
                    args={['#17242a', 3, 27]}
                  />
                  <spotLight
                    position={
                      window.innerWidth > 768 ? [10, 10, 20] : [5, 5, 10]
                    }
                    angle={window.innerWidth > 768 ? 0.1 : 0.25}
                    intensity={40}
                    distance={50}
                    castShadow
                    color='#ffffff'
                  />

                  <Physics gravity={[0, 0, 0]}>
                    <Pointer />
                    {ball.map((props, i) => (
                      <MainBall
                        key={i}
                        {...props}
                      />
                    ))}

                    <MainBall position={[0, 10, 20]}>
                      <mesh>
                        <boxGeometry args={[1.4, 1.4, 1.4]} />
                        <MeshTransmissionMaterial
                          thickness={1}
                          distortion={0}
                          temporalDistortion={0}
                          anisotropicBlur={1.5}
                          roughness={0.1}
                          color={'#E0E0E0'}
                        />
                      </mesh>
                    </MainBall>
                  </Physics>
                </>
              ) : null}
              <Environment files='./hdr/studio_small_03_1k.hdr' />
            </Canvas>
            <p>
              tap on the screen <span>😉</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MainBall({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  ...props
}) {
  const api = useRef();
  const pos = useMemo(() => position || [r(-20), r(-20), r(-20)], []);
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
    );
  });
  return (
    <RigidBody
      linearDamping={1}
      angularDamping={1}
      friction={1}
      position={pos}
      ref={api}
      colliders='ball'>
      {children ? children : <Sphere {...props} />}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / (window.innerWidth > 768 ? 9 : 3),
        (mouse.y * viewport.height) / (window.innerWidth > 768 ? 9 : 3),
        (mouse.x * viewport.width) / (window.innerWidth > 768 ? 9 : 3)
      )
    );
  });
  return (
    <RigidBody
      position={[0, 0, 0]}
      type='kinematicPosition'
      colliders={false}
      ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

function Sphere({ children }) {
  return (
    <mesh
      castShadow
      receiveShadow
      scale={[8, 8, 8]}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial
        roughness={0.28}
        color='#ffffff'
      />
      {children}
    </mesh>
  );
}
