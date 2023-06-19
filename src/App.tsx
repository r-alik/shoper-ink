import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import JuteAndJute from './components/JuteAndJute';
import MainInfo from './components/MainInfo';
import Masterclass from './components/Masterclass';
import Testimonials from './components/Testimonials';
import WineBags from './components/WineBags';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const [bigImage, setBigImage] = useState<string>('');

  const modalPortal: HTMLDialogElement = document.getElementById(
    'modal',
  ) as HTMLDialogElement;

  function onModalOpen(link: string) {
    setBigImage(link);
    modalPortal?.showModal();
  }

  const onModalClose = () => {
    setBigImage('');
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
      <Modal src={bigImage} onModalClose={onModalClose} />
      <Footer />
    </>
  );
}

export default App;
