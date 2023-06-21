import { useEffect, useState } from 'react';

import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import JuteAndJute from './components/JuteAndJute';
import MainInfo from './components/MainInfo';
import Masterclass from './components/Masterclass';
import Testimonials from './components/Testimonials';
import WineBags from './components/WineBags';
import Modal from './components/Modal';

import Picture, { StylesType } from './components/Picture';
import { PictureType } from './shared/types/itemShape';

const mainPic: PictureType = {
  p1200: '/images/jute-9-1200.webp',
  p800: '/images/jute-9-800.webp',
  p360: '/images/jute-9-360.webp',
  jpg1200: '/images/jute-9-1200.jpg',
  jpg800: '/images/jute-9-800.jpg',
  jpg360: '/images/jute-9-360.jpg',
  isAvailable: true,
  alt: 'Shoper-ink Jute busket and glass candle on a desk',
  title: '',
  id: 'hero',
  description: '',
  price: 0,
};

const styles: StylesType = {
  picture: 'block max-h-[45vh] opacity-90 overflow-hidden mb-2 mt-1 mx-auto',
  img: 'mx-auto sm:object-contain sm:object-center rounded-t-lg',
};

const initialState = { link: '', title: '' };

function App() {
  const [bigImage, setBigImage] = useState<{ link: string; title: string }>(
    initialState,
  );

  const modalPortal = document.getElementById('modal') as HTMLDialogElement;

  function onModalOpen(link: string, title: string) {
    setBigImage({ link, title });
    modalPortal?.showModal();
  }

  const onModalClose = () => {
    setBigImage(initialState);
    modalPortal.close();
  };

  useEffect(() => {
    console.log('State changed');
  }, [bigImage]);

  return (
    <>
      <Header />

      <Picture onModalOpen={() => {}} picDetails={mainPic} styles={styles} />

      <MainInfo />
      <JuteAndJute onModalOpen={onModalOpen} />
      <WineBags onModalOpen={onModalOpen} />
      <Testimonials />
      <Masterclass />
      <AboutMe />
      <Modal
        src={bigImage.link}
        title={bigImage.title}
        onModalClose={onModalClose}
      />
      <Footer />
    </>
  );
}

export default App;
