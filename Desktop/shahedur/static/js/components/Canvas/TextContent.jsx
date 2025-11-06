import { useFrame, useThree } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';

const TextContent = () => {
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
    return viewportWidth * 0.7; // Подберите нужное значение коэффициента, чтобы добиться нужного визуального размера текста
  }

  return (
    <group>
      <Center disableZ>
        <Text3D
          font='./fonts/MM-fonts.json'
          size={textSize}
          height={0.01}
          position={[0, 0, 20]}
          rotation={[0, Math.PI, 0]}>
          {'FRONTEND DEVELOPER\n& FREELANCER'}
          <meshBasicMaterial color='#323232' />
        </Text3D>
      </Center>
    </group>
  );
};

export default TextContent;
