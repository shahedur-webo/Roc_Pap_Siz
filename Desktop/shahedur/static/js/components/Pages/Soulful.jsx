import './style.scss';
import Template from './Template';

const Soulful = () => {
  const soulfulProps = {
    text: 'Soulful Symbol',
    mySkills: {
      html: 'html',
      css: 'css',
      sass: 'sass',
      blender: 'blender',
      threeJs: 'THREE.js',
      ux: 'ux',
      animation: 'animation',
      gsap: 'gsap',
    },
    changeCase: {
      olha: '/work/olha-lazarieva',
      raine: '/work/raine',
      td: '/work/td',
      mosaic: '/work/mosaic',
      emt: '/work/emt',
      cyberfam: '/work/cyberfam',
      vlad: '/work/vlad',
    },
    changeCaseImg: {
      olhaImg: '../img/work/7.jpg',
      raineImg: '../img/work/6.jpg',
      mosaicImg: '../img/work/1.jpg',
      cyberfamImg: '../img/work/3.jpg',
      vladImg: '../img/work/5.jpg',
      emtImg: '../img/work/4.jpg',
      tdImg: '../img/work/0.jpg',
    },
    mainImage: '../img/work/2.jpg',
    description:
      'In this project, my responsibilities included creating the website layout, developing 3D models, and integrating them into the site, which contributed to a unique and appealing visual style. Additionally, I worked closely with the designer to oversee the development of the user interface (UI/UX). My contributions helped create a web product that not only captures users attention with its visual appeal but also ensures a smooth and user-friendly experience.',
    templateLink: 'https://soulfulsymbol.com/',
    imageLaptop: '../img/case/soulful/canvas1.jpg',
    canvasText:
      'SOULFUL SYMBOL SOULFUL SYMBOL SOULFUL SYMBOL SOULFUL SYMBOL SOULFUL SYMBOL SOULFUL SYMBOL SOULFUL SYMBOL SOULFUL SYMBOL',
    nextPageLink: '/work/mosaic',
    nextCaseTitle: 'Mosaic Of Cultures',
    nextCaseImg: '../img/work/1.jpg',
  };
  const slides = [
    {
      imageUrl: '../img/case/soulful/1.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/soulful/2.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/soulful/3.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/soulful/4.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/soulful/5.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
  ];
  return (
    <>
      <main className='soulful case'>
        <Template
          {...soulfulProps}
          slides={slides}
        />
      </main>
    </>
  );
};

export default Soulful;
