import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import GalleryList from '../shared/GalleryList';

import pictures from '../data/jute.json';
import HorizontalDivider from '../shared/HorizontalDIvider';

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
          <span className="italic text-Accent-dark tracking-widest text-">
            Jute&Jute
          </span>{' '}
          - це продукція вироблена з натурального органічного матеріалу. Кожна
          річ індівідуальна та унікальна тому що зроблена руками майстрині. Від
          обробки джуту до створення витончених виробів - кожна деталь має
          особливе значення. Серія Джут&Джут - це поєднання природи та
          майстерності, що втілюється у кожній речі.
        </p>
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
