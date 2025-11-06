import './style.scss';
import Template from './Template';

const Olha = () => {
  const raineProps = {
    text: 'Olha Lazarieva',
    mySkills: {
      react: 'React',
      r3f: 'React-Three-Fiber',
      gsap: 'GSAP',
      aniamtion: 'Animation',
      blender: 'Blender',
      textureBaking: 'Texture Baking',
    },
    changeCase: {
      raine: '/work/raine',
      td: '/work/td',
      soulful: '/work/soulful',
      mosaic: '/work/mosaic',
      emt: '/work/emt',
      cyberfam: '/work/cyberfam',
      vlad: '/work/vlad',
    },
    changeCaseImg: {
      raineImg: '../img/work/6.jpg',
      mosaicImg: '../img/work/1.jpg',
      emtImg: '../img/work/4.jpg',
      soulfulImg: '../img/work/2.jpg',
      cyberfamImg: '../img/work/3.jpg',
      vladImg: '../img/work/5.jpg',
      tdImg: '../img/work/0.jpg',
    },
    mainImage: '../img/work/7.jpg',
    description:
      'I developed a portfolio website for a creative designer, focusing on immersive interactions and smooth animations. My role included frontend development, custom GSAP animations (loader, split-text, transitions), and building a 3D art gallery with React Three Fiber, where I used Blender for modeling and texture baking. The site is fully responsive and touch-friendly, creating a modern and engaging digital experience.',
    templateLink: 'https://olhalazarieva.com/',
    imageLaptop: '../img/case/cyberfam/canvas1.jpg',
    canvasText:
      'OLHA LAZARIEVA · CREATIVE DESIGNER OLHA LAZARIEVA · CREATIVE DESIGNER OLHA LAZARIEVA · CREATIVE DESIGNER OLHA LAZARIEVA · CREATIVE DESIGNER OLHA LAZARIEVA · CREATIVE DESIGNER OLHA LAZARIEVA · CREATIVE DESIGNER OLHA LAZARIEVA · CREATIVE DESIGNER OLHA LAZARIEVA · CREATIVE DESIGNER OLHA LAZARIEVA · CREATIVE DESIGNER OLHA LAZARIEVA · CREATIVE DESIGNER ',
    nextPageLink: '/work/raine',
    nextCaseTitle: 'Raine Architects',
    nextCaseImg: '../img/work/6.jpg',
  };
  const slides = [
    {
      imageUrl: '../img/case/olha/1.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/olha/2.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/olha/3.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/olha/4.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
    {
      imageUrl: '../img/case/olha/5.jpg',
      alt: 'building',
      aspectRatio: 1,
    },
  ];
  return (
    <>
      <main className='olha case'>
        <Template
          {...raineProps}
          slides={slides}
        />
      </main>
    </>
  );
};

export default Olha;
