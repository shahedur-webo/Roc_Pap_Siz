import Scene from '../Canvas/Scene';
import About from '../About/About';
import Work from '../Work/Work';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import AboutMore from '../AboutMore/AboutMore';
import { motion } from 'framer-motion';
const MainPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.8 }}>
        <Scene />
        <About />
        <Work />
        <AboutMore />
        <Form />
        <Footer />
      </motion.div>
      <motion.div
        className='slide-page-transition'
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        transition={{ duration: 1.3, ease: [0.79, 0.08, 0.35, 0.96] }}
      />
      <motion.div
        className='slide-page-transition-second'
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        transition={{
          duration: 1.3,
          delay: 0.2,
          ease: [0.79, 0.08, 0.35, 0.96],
        }}
      />
    </>
  );
};

export default MainPage;
