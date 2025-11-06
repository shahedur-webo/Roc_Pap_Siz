import Magnetic from './MagneticButton/MagneticButton';

const Social = () => {
  return (
    <div className='social'>
      <div className='social-wrapper'>
        <p className='social-text'>Socials</p>
        <div className='social-buttons'>
          <div className='button-wrapper'>
            <Magnetic>
              <a
                href='https://www.linkedin.com/in/max-milkin-2801141a2/'
                target='_blank'>
                Linkedin
              </a>
            </Magnetic>
          </div>
          <div className='button-wrapper'>
            <Magnetic>
              <a
                href='https://t.me/max_milkin'
                target='_blank'>
                Telegram
              </a>
            </Magnetic>
          </div>
          <div className='button-wrapper'>
            <Magnetic>
              <a
                href='https://wa.me/+380954921452'
                target='_blank'>
                WhatsApp
              </a>
            </Magnetic>
          </div>
          <div className='button-wrapper'>
            <Magnetic>
              <a
                href='https://www.instagram.com/maximus_developer/'
                target='_blank'>
                Instagram
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
