import { useEffect } from 'react';

const OrientationHandler = ({ setCubePosition, orientationEnabled }) => {
  useEffect(() => {
    let lastBeta = null;
    let lastGamma = null;

    const handleOrientation = (event) => {
      const { beta, gamma } = event;

      if (beta !== null && gamma !== null) {
        let limitedBeta = Math.min(Math.max(beta, -80), 80);
        let limitedGamma = Math.min(Math.max(gamma, -80), 80);

        if (lastBeta !== null && lastGamma !== null) {
          limitedBeta = lastBeta * 0.9 + limitedBeta * 0.1;
          limitedGamma = lastGamma * 0.9 + limitedGamma * 0.1;
        }

        setCubePosition({ x: limitedGamma * -0.006, y: limitedBeta * -0.009 });

        lastBeta = limitedBeta;
        lastGamma = limitedGamma;
      }
    };

    const requestPermission = async () => {
      if (
        typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function'
      ) {
        try {
          const permissionState =
            await DeviceOrientationEvent.requestPermission();

          if (permissionState === 'granted') {
            console.log('Permission granted');
            window.addEventListener('deviceorientation', handleOrientation);
          } else {
            console.warn('Permission denied');
          }
        } catch (error) {
          console.error(
            'Error requesting device orientation permission:',
            error
          );
        }
      } else {
        window.addEventListener('deviceorientation', handleOrientation);
      }
    };

    if (orientationEnabled && window.innerWidth < 1100) {
      requestPermission();
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [setCubePosition, orientationEnabled]);

  return null;
};

export default OrientationHandler;
