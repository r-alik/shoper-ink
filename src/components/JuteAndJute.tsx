import Container from '../shared/Container';
import GalleryItem from '../shared/GalleryItem';

import pictures from '../data/jute.json';

const JuteAndJute = () => {
  return (
    <Container idName="juteAndJute">
      <h2 className="text-xl mb-2 sm:mb-2 font-semibold">Jute & Jute</h2>
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
       rounded-md backdrop-blur-md backdrop-saturate-150 bg-Peach
       "
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
