import './style.scss';
import Social from '../Social';
import CurrentDate from '../Date';

const Footer = () => {
  return (
    <footer className='footer footer-active'>
      <div className='footer-wrapper'>
        <div className='footer-block'>
          <p>2024 © Edition</p>
          <CurrentDate />
        </div>
        <div className='footer-block'>
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
