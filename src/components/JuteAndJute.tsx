import { useWindowWidth } from '@react-hook/window-size/throttled';
import Container from '../shared/Container';
import GalleryList from '../shared/GalleryList';
import HorizontalDivider from '../shared/HorizontalDivider';
import ListElement from '../shared/ListElement';

import pictures from '../data/jute.json';

import textureSquare from '/images/decor-texture-1-square.jpg';
import placemat320 from '/images/decor-placemat-1-320.jpg';
import placemat480 from '/images/decor-placemat-1-480.jpg';
import juteLogo from '/icons/jute&jute.svg';

const JuteAndJute = ({
  onModalOpen,
}: {
  onModalOpen: (link: string, title: string) => void;
}) => {
  const onlyWidth = useWindowWidth();
  const MD_BRACKPOINT = 768;

  return (
    <>
      <Container idName="juteAndJute">
        <div className="w-full p-4 flex justify-between gap-3  text-Gray-dark bg-Peach rounded-lg border border-Accent-light/30">
          <img
            src={textureSquare}
            className="w-1/2 md:w-2/5 rounded-md"
            alt="Текстура полотна вироблена із органічної джутової нитки"
            title="Текстура полотна вироблена із органічної джутової нитки"
          />

          <div className="w-1/2 flex flex-col justify-center items-center standard-text">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
              Чому джут?
            </h3>
            <ul>
              <ListElement text="Природний матеріал" />
              <ListElement text="Практичність" />
              <ListElement text="Довговічність" />
            </ul>
          </div>
        </div>

        <article className="flex justify-center items-start gap-10 p-4">
          <p className="flex-1 py-4 standard-text text-Gray-dark">
            <img
              className="w-2/3 py-4"
              src={juteLogo}
              alt="Логотип для серії Джут Енд Джут"
            />
            - це продукція вироблена з натурального органічного матеріалу.
            <br className="mb-6 md:mb-9" />
            {onlyWidth < MD_BRACKPOINT && (
              <img
                src={placemat320}
                className="w-1/2 rounded-md float-right"
                alt="Стильна джутова підставка на стіл"
                title="Стильна джутова підставка на стіл"
              />
            )}
            Серія Jute&Jute - це поєднання природи та майстерності, що
            втілюється у кожній речі. Кожна річ індівідуальна та унікальна тому
            що зроблена руками майстрині. Від обробки джуту до створення
            витончених виробів - кожна деталь має особливе значення.
          </p>

          {onlyWidth > MD_BRACKPOINT && (
            <img
              src={placemat480}
              className="flex-grow-0 w-1/3 sm:w-2/5 rounded-md"
              alt="Стильна джутова підставка на стіл"
              title="Стильна джутова підставка на стіл"
            />
          )}
        </article>
        <HorizontalDivider />
      </Container>

      <GalleryList
        pictures={pictures}
        onModalOpen={onModalOpen}
        title="Обирайте продукцію що дозволить відчути дотик природи:"
      />
      <HorizontalDivider />
    </>
  );
};

export default JuteAndJute;

/*
    <figure className="w-full mb-8">
          <img
            src={juteField}
            className="w-full rounded-md"
            alt="Снопи зібранної джутової сировини на джутовому полі"
            title="Снопи зібранної джутової сировини на джутовому полі"
          />
          <figcaption className="italic text-Txt-dark/60 text-sm">
            Джутове поле.
          </figcaption>
        </figure>

*/
