import Container from '../shared/Container';
import GalleryList from '../shared/GalleryList';
import HorizontalDivider from '../shared/HorizontalDivider';

import pictures from '../data/jute.json';

import heart from '/public/icons/heart.svg';
import juteField from '/images/decor-jute-field-1.jpg';
import texture from '/images/decor-texture-1.jpg';
import placemat from '/images/decor-placemat-3.jpg';
import ListElement from '../shared/ListElement';

const JuteAndJute = ({
  onModalOpen,
}: {
  onModalOpen: (link: string, title: string) => void;
}) => {
  return (
    <>
      <Container idName="juteAndJute">
        <figure className="mb-8">
          <img
            src={juteField}
            className="rounded-md"
            alt="Снопи зібранної джутової сировини на джутовому полі"
            title="Снопи зібранної джутової сировини на джутовому полі"
          />
          <figcaption className="italic text-Txt-dark/60 ">
            Джутове поле.
          </figcaption>
        </figure>

        <div className="standard-text text-Gray-dark">
          <h3 className="text-xl md:text-2xl font-semibold lg:text-3xl mb-4">
            Чому джут?
          </h3>
          <ul>
            <ListElement text="Природний матеріал" />
            <ListElement text="Практичність" />
            <ListElement text="Довговічність" />
          </ul>
        </div>

        <HorizontalDivider />

        <p className="section-p md:text-[1.5rem] text-Gray-dark">
          <span className="italic text-Accent-dark tracking-widest text-">
            Jute&Jute
          </span>{' '}
          - це продукція вироблена з натурального органічного матеріалу.
        </p>
        <p className="section-p md:text-[1.5rem] text-Gray-dark">
          <img
            src={texture}
            className="w-1/2 sm:w-2/5 rounded-md float-left"
            alt="Текстура полотна вироблена із органічної джутової нитки"
            title="Текстура полотна вироблена із органічної джутової нитки"
          />
          Серія{' '}
          <span className="italic text-Accent-dark tracking-widest text-">
            Jute&Jute
          </span>{' '}
          - це поєднання природи та майстерності, що втілюється у кожній речі.
        </p>
        <div className="mb-8">
          <img
            src={placemat}
            className="w-1/2 sm:w-2/5 rounded-md float-right ml-4"
            alt="Стильна джутова підставка на стіл"
            title="Стильна джутова підставка на стіл"
          />
          <p className="section-p md:text-[1.5rem] text-Gray-dark">
            Кожна річ індівідуальна та унікальна тому що зроблена руками
            майстрині. Від обробки джуту до створення витончених виробів - кожна
            деталь має особливе значення.
          </p>

          <p className="section-p md:text-[1.5rem] text-Gray-dark">
            Обирайте продукцію що прикрасить ваш інтер'єр:
          </p>
        </div>
      </Container>

      <GalleryList pictures={pictures} onModalOpen={onModalOpen} />

      <HorizontalDivider />
    </>
  );
};

export default JuteAndJute;

/*
mb-4 px-4 leading-relaxed first-line:tracking-widest

text-xl md:text-2xl text-center text-Gray-dark
*/
