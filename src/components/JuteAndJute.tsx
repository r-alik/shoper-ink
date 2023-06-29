import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import GalleryList from '../shared/GalleryList';
import HorizontalDivider from '../shared/HorizontalDivider';

import pictures from '../data/jute.json';

import juteField from '/images/decor-jute-field-1.jpg';
import texture from '/images/decor-texture-1.jpg';
import placemat from '/images/decor-placemat-3.jpg';

const JuteAndJute = ({
  onModalOpen,
}: {
  onModalOpen: (link: string, title: string) => void;
}) => {
  return (
    <>
      <Container idName="juteAndJute">
        <SectionTitle title="Jute & Jute" imageLink="/icons/knit.svg" />

        <p className="section-p md:text-[1.5rem] text-Gray-dark">
          <img
            src={juteField}
            className="w-1/2 sm:w-2/5 rounded-md float-right"
            alt="Снопи зібранної джутової сировини на джутовому полі"
            title="Снопи зібранної джутової сировини на джутовому полі"
          />
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
            className="w-1/2 sm:w-2/5 rounded-md float-right"
            alt="Стильна джутова підставка на стіл"
            title="Стильна джутова підставка на стіл"
          />
          <p className="section-p md:text-[1.5rem] text-Gray-dark">
            Кожна річ індівідуальна та унікальна тому що зроблена руками
            майстрині. Від обробки джуту до створення витончених виробів - кожна
            деталь має особливе значення.
          </p>
          <p className="section-p md:text-[1.5rem] text-Gray-dark">
            <span className="italic text-Accent-dark tracking-widest text-">
              Jute&Jute
            </span>{' '}
            - це поєднання природи та майстерності, що втілюється у кожній речі.
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
