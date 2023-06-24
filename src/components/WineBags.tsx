import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import GalleryList from '../shared/GalleryList';

import pictures from '../data/wine.json';

const WineBags = ({
  onModalOpen,
}: {
  onModalOpen: (link: string, title: string) => void;
}) => {
  return (
    <Container idName="winebags">
      <SectionTitle title="Wine Bags" imageLink="/icons/wine-basket.svg" />
      <p className="section-p md:text-[1.5rem] text-Gray-dark">
        Особливий шарм в кожній пляшці вина заслуговує на найкраще обгортання.
        Наші вишукані винні сумки - це втілення елегантності та ручної роботи.
        Виготовлені з практичного матеріалу, вони створені, щоб надати вашому
        улюбленому вину витончений образ. Виберіть із різноманіття кольорів,
        малюнків та розмірів, щоб знайти ідеальну сумку для вашого вина. Наші
        винні сумки підкреслять ваше розуміння справжнього смаку та незабутнього
        стилю. Подаруйте вашому вину гідне обгортання з нашими ручними
        бавовняними сумками.
      </p>

      <GalleryList onModalOpen={onModalOpen} pictures={pictures} />
    </Container>
  );
};

export default WineBags;
