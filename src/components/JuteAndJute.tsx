import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import GalleryList from '../shared/GalleryList';

import pictures from '../data/jute.json';

const JuteAndJute = ({
  onModalOpen,
}: {
  onModalOpen: (link: string) => void;
}) => {
  return (
    <Container idName="juteAndJute">
      <SectionTitle title="Jute & Jute" imageLink="/knit.svg" />

      <p className="mb-10 px-4 leading-relaxed first-line:tracking-widest indent-6 text-xl text-center">
        <span className="italic text-Accent-dark tracking-widest font-bold">
          Jute&Jute
        </span>{' '}
        - це продукція вироблена з натурального органічного матеріалу. Кожна річ
        індівідуальна та унікальна тому що зроблена руками майстрині. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsa quidem,
        dolore hic voluptate porro dolorem modi? Quisquam, magnam ea.
      </p>

      <GalleryList pictures={pictures} onModalOpen={onModalOpen} />
    </Container>
  );
};

export default JuteAndJute;
