import Container from '../shared/Container';
import boxes from '/boxes.svg';
import Picture, { StylesType } from './Picture';
import { PictureType } from '../shared/types/itemShape';

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
  picture: 'max-h-[40vh] opacity-90 rounded-t-lg overflow-hidden mb-2',
  img: 'h-full sm:object-cover sm:object-center',
};

const MainInfo = () => {
  return (
    <Container idName="#">
      <Picture onModalOpen={() => {}} picDetails={mainPic} styles={styles} />

      <div className="p-4 flex-1 basis-1/2 text-xl md:text-2xl text-center text-Gray-dark">
        <h2 className="text-2xl mb-12 font-semibold md:text-3xl">
          Садок вишневий коло хати.
        </h2>
        <p className="mb-4 px-4 leading-relaxed first-line:tracking-widest">
          Садок вишневий коло хати, Хрущі над вишнями гудуть, Плугатарі з
          плугами йдуть, Співають ідучи дівчата, А матері вечерять ждуть. Сем'я
          вечеря коло хати, Вечірня зіронька встає. Дочка вечерять подає, А мати
          хоче научати, Так соловейко не дає. Поклала мати коло хати Маленьких
          діточок своїх;
        </p>
        <img src={boxes} alt="" width={144} className="mx-auto opacity-70" />
      </div>
    </Container>
  );
};

export default MainInfo;
