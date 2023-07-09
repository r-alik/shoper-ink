import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import GalleryList from '../shared/GalleryList';
import HorizontalDivider from '../shared/HorizontalDivider';

import pictures from '../data/wine.json';
import shopper from '/images/decor-shopper-2-art.jpg';

const WineBags = ({
  onModalOpen,
}: {
  onModalOpen: (link: string, title: string) => void;
}) => {
  return (
    <>
      <Container idName="winebags">
        <HorizontalDivider />

        <SectionTitle title="Wine Bags" imageLink="/icons/wine-basket.svg" />

        <p className="standard-text md:text-[1.5rem] text-Gray-dark">
          Особливий шарм в кожній пляшці вина заслуговує на найкраще обгортання.
          Наші вишукані винні сумки - це втілення елегантності та ручної роботи.
          Виготовлені з практичного матеріалу, вони створені, щоб надати вашому
          улюбленому вину витончений образ.
        </p>

        <p className="standard-text md:text-[1.5rem] text-Gray-dark">
          <img
            src={shopper}
            className="w-1/2 sm:w-2/5 rounded-md float-left mr-2"
            alt="Текстура полотна вироблена із органічної джутової нитки"
            title="Текстура полотна вироблена із органічної джутової нитки"
          />
          Виберіть із різноманіття кольорів, малюнків та розмірів, щоб знайти
          ідеальну сумку для вашого вина. Наші винні сумки підкреслять ваше
          розуміння справжнього смаку та незабутнього стилю. Подаруйте вашому
          вину гідне обгортання з нашими ручними бавовняними сумками.
        </p>
      </Container>
      <GalleryList onModalOpen={onModalOpen} pictures={pictures} />

      <HorizontalDivider />
    </>
  );
};

export default WineBags;
