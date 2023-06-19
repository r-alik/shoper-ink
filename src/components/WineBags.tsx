import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import GalleryList from '../shared/GalleryList';

import pictures from '../data/wine.json';

const WineBags = ({ onModalOpen }: { onModalOpen: (link: string) => void }) => {
  return (
    <Container idName="winebags">
      <SectionTitle title="Wine Bags" imageLink="/wine-basket.svg" />
      <p className="mb-10 px-4 leading-relaxed first-line:tracking-widest indent-6 text-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni tempora
        qui, animi, dicta optio eligendi laudantium omnis, quo dolor
        reprehenderit soluta earum in est facilis.
      </p>

      <GalleryList onModalOpen={onModalOpen} pictures={pictures} />
    </Container>
  );
};

export default WineBags;
