import Container from '../shared/Container';

import pictures from '../data/pictures.json';
import Picture, { PictureType, StylesType } from './Picture';

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

      <ul className="w-full flex-grow p-2 border border-red-300 grid gap-[var(--gap)] grid-flow-col auto-cols-[48%] md:auto-cols-[32%] overflow-x-scroll scroll-p-4 snap-mandatory snap-x">
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

/*
className="border border-red-300 w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-2 px-2"
*/

export default JuteAndJute;

interface GalleryItemShape {
  id: string | number;
  title: string;
  picDetail: PictureType;
  desc: string;
  price: number;
}

const s: StylesType = {
  picture: 'w-full border',
  img: 'h-52 w-full object-cover object-top',
};

function GalleryItem({ picDetail }: { picDetail: PictureType }) {
  return (
    <div className="h-full flex flex-col justify-start items-stretch gap-4 border rounded-lg p-2 snap-start bg-gradient-to-br from-Peach to-white shadow-[10px_10px_20px_#8c8985,_-10px_-10px_20px_#ffffff] ">
      <Picture picDetails={picDetail} styles={s} />
      <div className="flex justify-between items-center p-2">
        <h4>Назва</h4>
        <span>id: asd9as87</span>
      </div>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dicta
        dolorum? Aspernatur minus sunt esse?
      </p>
      <p>
        Цена: <span className="text-Accent-dark font-semibold"> 999</span>{' '}
        <span>гривень</span>
      </p>
    </div>
  );
}

/*
border-radius: 8px;
background: linear-gradient(145deg, #e5e0da, #ffffff);
box-shadow:  10px 10px 20px #8c8985, -10px -10px 20px #ffffff;
*/
