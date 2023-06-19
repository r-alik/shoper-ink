import Container from '../shared/Container';
import GalleryItem from '../shared/GalleryItem';

import pictures from '../data/jute.json';
import SectionTitle from '../shared/SectionTitle';

const JuteAndJute = () => {
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

      <ul
        className="w-full flex-grow p-2 grid gap-[var(--gap)] grid-flow-col auto-cols-[80%] sm:auto-cols-[48%] md:auto-cols-[32%] overflow-x-scroll scroll-p-4 snap-mandatory snap-x
       rounded-lg bg-gray-600 shadow-[10px_10px_20px_#9e9e9e,_-10px_-10px_20px_#ffffff]"
      >
        {pictures.map(pic => {
          return (
            <li key={pic.p360}>
              <GalleryItem picDetail={pic} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default JuteAndJute;
