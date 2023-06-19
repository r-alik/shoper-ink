import Container from '../shared/Container';
import GalleryItem from '../shared/GalleryItem';
import SectionTitle from '../shared/SectionTitle';

import pictures from '../data/wine.json';

const WineBags = () => {
  return (
    <Container idName="winebags">
      <SectionTitle title="Wine Bags" imageLink="/wine-basket.svg" />
      <p className="mb-10 px-4 leading-relaxed first-line:tracking-widest indent-6 text-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni tempora
        qui, animi, dicta optio eligendi laudantium omnis, quo dolor
        reprehenderit soluta earum in est facilis.
      </p>

      <ul
        className="w-full flex-grow p-2 grid gap-[var(--gap)] grid-flow-col auto-cols-[80%] sm:auto-cols-[48%] md:auto-cols-[32%] overflow-x-scroll scroll-p-4 snap-mandatory snap-x
       rounded-md backdrop-blur-md backdrop-saturate-150 bg-Peach
       "
      >
        {pictures.map(pic => {
          return (
            <li key={pic.p360}>
              <GalleryItem picDetail={pic} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default WineBags;
