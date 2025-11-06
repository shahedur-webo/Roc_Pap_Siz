import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_TRACKING_ID = 'G-9YL96FRQYL'; // Замени на свой ID

const useGATracking = () => {
  const location = useLocation();

  // Инициализация GA (добавляем `gtag.js` один раз)
  useEffect(() => {
    if (!window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID);
    }
  }, []);

  // Отправка `pageview` при каждом изменении маршрута
  useEffect(() => {
    if (window.gtag) {
      //   console.log('Отправка pageview: ', location.pathname);
      window.gtag('config', GA_TRACKING_ID, { page_path: location.pathname });
    }
  }, [location]);
};

export default useGATracking;
