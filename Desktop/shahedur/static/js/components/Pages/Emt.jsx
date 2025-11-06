import './style.scss';
import Template from './Template';

const Emt = () => {
  const emtProps = {
    text: 'Emt Promo',
    mySkills: {
      html: 'html',
      css: 'css',
      sass: 'sass',
      blender: 'blender',
      javascript: 'javascript',
      three: 'three.js',
      animation: 'animation',
      gsap: 'gsap',
    },
    changeCase: {
      olha: '/work/olha-lazarieva',
      raine: '/work/raine',
      td: '/work/td',
      soulful: '/work/soulful',
      mosaic: '/work/mosaic',
      cyberfam: '/work/cyberfam',
      vlad: '/work/vlad',
    },
    changeCaseImg: {
      olhaImg: '../img/work/7.jpg',
      raineImg: '../img/work/6.jpg',
      mosaicImg: '../img/work/1.jpg',
      soulfulImg: '../img/work/2.jpg',
      cyberfamImg: '../img/work/3.jpg',
      vladImg: '../img/work/5.jpg',
      tdImg: '../img/work/0.jpg',
    },
    mainImage: '../img/work/4.jpg',
    description:
      'In this project, my role focused on developing a promotional 3D website for a web application. The main concept was to visually introduce users to the product and highlight its key advantages in an innovative way. The entire project was built around 3D graphics, which gave it a distinctive visual appeal.',
    templateLink: 'http://emt.max-milkin.com.ua/',
    imageLaptop: '../img/case/cyberfam/canvas1.jpg',
    canvasText:
      'EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO EMT PROMO',
    nextPageLink: '/work/cyberfam',
    nextCaseTitle: 'Cyberfam',
    nextCaseImg: '../img/work/3.jpg',
  };
  const slides = [
    {
      imageUrl: '../img/case/emt/1.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/emt/2.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/emt/3.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/emt/4.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/emt/5.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
  ];
  return (
    <>
      <main className='emt case'>
        <Template
          {...emtProps}
          slides={slides}
        />
      </main>
    </>
  );
};

export default Emt;
