import GalleryItem from './GalleryItem';
import { PictureType } from './types/itemShape';

type GalleryListType = {
  pictures: PictureType[];
  onModalOpen: (link: string, title: string) => void;
  bgImage?: string;
};

const GalleryList = ({
  pictures,
  onModalOpen,
  bgImage = '/images/decor-texture-1.jpg',
}: GalleryListType) => {
  return (
    <ul
      style={{ backgroundImage: `url('${bgImage}')` }}
      className={`max-w-6xl mx-auto flex-grow px-2 py-4 grid gap-[var(--gap)] grid-flow-col auto-cols-[70%] sm:auto-cols-[38%] md:auto-cols-[26%] overflow-x-scroll scroll-p-4 snap-mandatory snap-x rounded-lg shadow-[10px_10px_20px_#9e9e9e,_-10px_-10px_20px_#ffffff]`}
    >
      {pictures.map(pic => {
        return (
          <li key={pic.id}>
            <GalleryItem onModalOpen={onModalOpen} picDetail={pic} />
          </li>
        );
      })}
    </ul>
  );
};

export default GalleryList;

/*
const defaultProps = {
  bgImage: "bg-[url('/images/decor-texture-1.jpg')]",
};

type GalleryListType = {
  pictures: PictureType[];
  onModalOpen: (link: string, title: string) => void;
  bgImage?: string;
} & typeof defaultProps;

GalleryList.defaultProps = defaultProps;
*/
