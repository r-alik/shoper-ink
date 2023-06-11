import Container from '../shared/Container';
import boxes from '/boxes.svg';
import Picture, { PictureType, StylesType } from './Picture';

const mainPic: PictureType = {
  p1200: '/images/jute-9-1200.webp',
  p800: '/images/jute-9-800.webp',
  p360: '/images/jute-9-360.webp',
  jpg1200: '/images/jute-9-1200.jpg',
  jpg800: '/images/jute-9-800.jpg',
  jpg360: '/images/jute-9-360.jpg',
  alt: 'Shoper-ink Jute busket and glass candle on a desk',
};

const styles: StylesType = {
  picture: 'max-h-[40vh] opacity-90 rounded-t-lg overflow-hidden mb-2',
  img: 'h-full sm:object-cover sm:object-center',
};

const MainInfo = () => {
  return (
    <Container idName="mainInfo">
      <Picture picDetails={mainPic} styles={styles} />

      <div className="p-4 flex-1 basis-1/2 text-xl md:text-2xl text-center text-Gray-dark">
        <h2 className="text-2xl mb-4 font-semibold md:text-3xl">
          Lorem ipsum dolor sit.
        </h2>
        <p className="mb-4 px-4 leading-relaxed first-line:tracking-widest">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          molestias maxime ab nisi aliquid amet commodi accusantium doloremque
          expedita dolores quisquam non nam architecto illo quaerat, tempora
          Lorem ipsum dolor sit amet consectetur maxime ab nisi aliquid amet.
        </p>
        <img src={boxes} alt="" width={144} className="mx-auto opacity-70" />
      </div>
    </Container>
  );
};

export default MainInfo;
