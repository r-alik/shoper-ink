import Container from '../shared/Container';
import GalleryList from '../shared/GalleryList';
import HorizontalDivider from '../shared/HorizontalDivider';

import wineBag from '/images/wine-1-800.jpg';

import pictures from '../data/wine.json';

const WineBags = ({
  onModalOpen,
}: {
  onModalOpen: (link: string, title: string) => void;
}) => {
  return (
    <div
      id="winebags"
      data-anchor="winebags"
      className="margin-bottom scroll-mt-16 lg:scroll-mt-[84px]"
    >
      <Container>
        <HorizontalDivider />

        {/* <SectionTitle title="Wine Bags" imageLink="/icons/wine-basket.svg" /> */}
        <article className="margin-bottom pt-6">
          <h3 hidden>Про продукцію серії Winebags</h3>
          <p className="standard-text md:text-[1.5rem] text-Gray-dark">
            <img
              src={wineBag}
              alt=""
              className="float-left mr-6 w-1/2 rounded-md"
            />
            Особливий шарм в кожній пляшці вина заслуговує на найкраще
            обгортання. Наші вишукані винні сумки - це втілення елегантності та
            ручної роботи. Виготовлені з практичного матеріалу, вони створені,
            щоб надати вашому улюбленому вину витончений образ.
          </p>

          <p className="standard-text md:text-[1.5rem] text-Gray-dark">
            Виберіть із різноманіття кольорів, малюнків та розмірів, щоб знайти
            ідеальну сумку для вашого вина. Наші винні сумки підкреслять ваше
            розуміння справжнього смаку та незабутнього стилю. Подаруйте вашому
            вину гідне обгортання з нашими ручними бавовняними сумками.
          </p>
        </article>
      </Container>
      <GalleryList onModalOpen={onModalOpen} pictures={pictures} />
    </div>
  );
};

export default WineBags;
