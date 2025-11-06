import './style.scss';
import Template from './Template';

const Cyberfam = () => {
  const cyberProps = {
    text: 'Cyberfam',
    mySkills: {
      html: 'html',
      css: 'css',
      sass: 'sass',
      javascript: 'javascript',
      threeJs: 'THREE.js',
      gsap: 'gsap',
      animation: 'animation',
    },
    changeCase: {
      olha: '/work/olha-lazarieva',
      raine: '/work/raine',
      td: '/work/td',
      soulful: '/work/soulful',
      mosaic: '/work/mosaic',
      emt: '/work/emt',
      vlad: '/work/vlad',
    },
    changeCaseImg: {
      olhaImg: '../img/work/7.jpg',
      raineImg: '../img/work/6.jpg',
      tdImg: '../img/work/0.jpg',
      mosaicImg: '../img/work/1.jpg',
      soulfulImg: '../img/work/2.jpg',
      vladImg: '../img/work/5.jpg',
      emtImg: '../img/work/4.jpg',
    },
    mainImage: '../img/work/3.jpg',
    description:
      'My role in this project involved developing a 3D roadmap for an NFT website. A key feature was the clickable planets representing different stages of the project. Users could interact with these planets to access detailed information about each stage.',
    templateLink: 'http://cyberfam.max-milkin.com.ua/',
    imageLaptop: '../img/case/cyberfam/canvas1.jpg',
    canvasText:
      'CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM CYBERFAM',
    nextPageLink: '/work/vlad',
    nextCaseTitle: 'Vlad Tritochki',
    nextCaseImg: '../img/work/5.jpg',
  };
  const slides = [
    {
      imageUrl: '../img/case/cyberfam/1.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/cyberfam/2.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/cyberfam/3.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/cyberfam/4.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/cyberfam/5.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
  ];
  return (
    <>
      <main className='cyberfam case'>
        <Template
          {...cyberProps}
          slides={slides}
        />
      </main>
    </>
  );
};

export default Cyberfam;
