import './style.scss';
import Template from './Template';

const Td = () => {
  const props = {
    text: 'TCS',
    mySkills: {
      html: 'html',
      css: 'css',
      sass: 'sass',
      react: 'react',
      blender: 'blender',
      threeJs: 'React-Three-Fiber',
      ux: 'ui/ux',
      animation: 'animation',
      gsap: 'gsap',
    },
    changeCase: {
      olha: '/work/olha-lazarieva',
      raine: '/work/raine',
      soulful: '/work/soulful',
      mosaic: '/work/mosaic',
      emt: '/work/emt',
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
      emtImg: '../img/work/4.jpg',
    },
    mainImage: '../img/work/0.jpg',
    description:
      'My team and I developed a website for a creative studio, taking the project from concept to full implementation. We crafted a unique digital experience that seamlessly blends stunning 3D graphics, smooth animations, and an engaging user journey. Every aspect, from interactive elements to performance optimization, was carefully designed to reflect the studio`s creative identity and vision. The result is a visually striking and technically refined website that enhances the brand`s online presence.',
    templateLink: 'https://twocapitalsstudio.com/',
    canvasText:
      'TWO CAPITALS STUDIO TWO CAPITALS STUDIO TWO CAPITALS STUDIO TWO CAPITALS STUDIO TWO CAPITALS STUDIO TWO CAPITALS STUDIO TWO CAPITALS STUDIO TWO CAPITALS STUDIO ',
    nextPageLink: '/work/soulful',
    nextCaseTitle: 'Next case',
    nextCaseImg: '../img/work/2.jpg',
  };
  const slides = [
    {
      imageUrl: '../img/case/td/1.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/td/2.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/td/3.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/td/4.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/td/5.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
  ];
  return (
    <>
      <main className='td case'>
        <Template
          {...props}
          slides={slides}
        />
      </main>
    </>
  );
};

export default Td;
