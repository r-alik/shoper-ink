import { useWindowWidth } from '@react-hook/window-size/throttled';
import Container from '../shared/Container';
import GalleryList from '../shared/GalleryList';
import HorizontalDivider from '../shared/HorizontalDivider';

import pictures from '../data/jute.json';

import juteField from '/images/decor-jute-field-1.jpg';
import textureSquare from '/images/decor-texture-1-square.jpg';
import texture from '/images/decor-texture-1.jpg';
import placemat from '/images/decor-placemat-1-square-480.jpg';
import ListElement from '../shared/ListElement';

const JuteAndJute = ({
  onModalOpen,
}: {
  onModalOpen: (link: string, title: string) => void;
}) => {
  const onlyWidth = useWindowWidth();

  return (
    <>
      <Container idName="juteAndJute">
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

        <div className="w-full my-8 p-2 standard-text md:text-[1.5rem] text-Gray-dark bg-Peach rounded-lg">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            Чому джут?
          </h3>
          <div className="flex justify-around items-center gap-2">
            <img
              src={onlyWidth < 640 ? textureSquare : texture}
              className="w-1/3 rounded-md shrink-0"
              alt="Текстура полотна вироблена із органічної джутової нитки"
              title="Текстура полотна вироблена із органічної джутової нитки"
            />

            <ul>
              <ListElement text="Природний матеріал" />
              <ListElement text="Практичність" />
              <ListElement text="Довговічність" />
            </ul>
          </div>
        </div>

        <HorizontalDivider />

        <p className="section-p md:text-[1.5rem] text-Gray-dark">
          <span className="italic text-Accent-dark tracking-widest text-">
            Jute&Jute
          </span>{' '}
          - це продукція вироблена з натурального органічного матеріалу.
        </p>
        <div className="mb-8">
          <img
            src={placemat}
            className="w-1/2 sm:w-2/5 rounded-md float-right ml-4"
            alt="Стильна джутова підставка на стіл"
            title="Стильна джутова підставка на стіл"
          />
          <p className="section-p md:text-[1.5rem] text-Gray-dark">
            Серія{' '}
            <span className="italic text-Accent-dark tracking-widest text-">
              Jute&Jute
            </span>{' '}
            - це поєднання природи та майстерності, що втілюється у кожній речі.
            Кожна річ індівідуальна та унікальна тому що зроблена руками
            майстрині. Від обробки джуту до створення витончених виробів - кожна
            деталь має особливе значення.
          </p>

          <p className="section-p md:text-[1.5rem] text-Gray-dark">
            Обирайте продукцію що дозволить відчути дотик природи:
          </p>
        </div>
      </Container>

      <HorizontalDivider />

      <GalleryList
        pictures={pictures}
        onModalOpen={onModalOpen}
        bgImage="/images/decor-texture-1.jpg"
      />

      <HorizontalDivider />
    </>
  );
};

export default JuteAndJute;

/*
mb-4 px-4 leading-relaxed first-line:tracking-widest

text-xl md:text-2xl text-center text-Gray-dark
*/
