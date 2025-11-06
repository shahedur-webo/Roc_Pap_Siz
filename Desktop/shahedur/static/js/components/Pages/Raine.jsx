import './style.scss';
import Template from './Template';

const Raine = () => {
  const raineProps = {
    text: 'Raine Architects',
    mySkills: {
      figma: 'figma',
      html: 'html',
      css: 'css',
      sass: 'sass',
      javascript: 'javascript',
      three: 'three.js',
      wordPress: 'wordpress',
      gsap: 'gsap',
    },
    changeCase: {
      olha: '/work/olha-lazarieva',
      td: '/work/td',
      soulful: '/work/soulful',
      mosaic: '/work/mosaic',
      emt: '/work/emt',
      cyberfam: '/work/cyberfam',
      vlad: '/work/vlad',
    },
    changeCaseImg: {
      olhaImg: '../img/work/7.jpg',
      mosaicImg: '../img/work/1.jpg',
      emtImg: '../img/work/4.jpg',
      soulfulImg: '../img/work/2.jpg',
      cyberfamImg: '../img/work/3.jpg',
      vladImg: '../img/work/5.jpg',
      tdImg: '../img/work/0.jpg',
    },
    mainImage: '../img/work/6.jpg',
    description:
      'We built a full-featured website for an architectural company together with a designer as a team - from the initial concept to the final launch. My focus was on frontend development, smooth GSAP animations, and implementing a 3D flythrough sequence. The site was delivered on WordPress for easy content management, combining a premium look with practical functionality for the client.',
    templateLink: 'https://rainearchitects.com/',
    imageLaptop: '../img/case/cyberfam/canvas1.jpg',
    canvasText:
      'RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS RAINE ARCHITECTS ',
    nextPageLink: '/work/td',
    nextCaseTitle: 'TCS',
    nextCaseImg: '../img/work/0.jpg',
  };
  const slides = [
    {
      imageUrl: '../img/case/raine/1.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/raine/2.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/raine/3.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/raine/5.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/raine/4.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
  ];
  return (
    <>
      <main className='raine case'>
        <Template
          {...raineProps}
          slides={slides}
        />
      </main>
    </>
  );
};

export default Raine;
