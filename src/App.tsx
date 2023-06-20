import { useState } from 'react';

import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import JuteAndJute from './components/JuteAndJute';
import MainInfo from './components/MainInfo';
import Masterclass from './components/Masterclass';
import Testimonials from './components/Testimonials';
import WineBags from './components/WineBags';
import Modal from './components/Modal';

const initialState = { link: '', title: '' };

function App() {
  const [bigImage, setBigImage] = useState<{ link: string; title: string }>(
    initialState,
  );

  const modalPortal: HTMLDialogElement = document.getElementById(
    'modal',
  ) as HTMLDialogElement;

  function onModalOpen(link: string, title: string) {
    setBigImage({ link, title });
    modalPortal?.showModal();
  }

  const onModalClose = () => {
    setBigImage(initialState);
    modalPortal.close();
  };

  return (
    <>
      <Header />
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
