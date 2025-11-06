import { useRef, useState } from 'react';
import { useSpring, animated, easings } from '@react-spring/web';
import './styles.scss';

export default function Magnetic({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const props = useSpring({
    from: { x: 0, y: 0 },
    to: { ...position },
    config: {
      mass: 0.1,
      damping: 0.1,
      easing: easings.easeOutBounce,
      stiffness: 10,
    },
  });

  const handleMouse = (event) => {
    if (window.innerWidth > 1100) {
      const { clientX, clientY } = event;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = (clientX - (left + width / 2)) * 0.2; // Коэффициент масштабирования 0.5
      const middleY = (clientY - (top + height / 2)) * 0.2; // Коэффициент масштабирования 0.5
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    if (window.innerWidth > 1100) {
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <animated.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={props}>
      {children}
    </animated.div>
  );
}
