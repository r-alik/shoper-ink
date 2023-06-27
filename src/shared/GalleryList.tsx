import GalleryItem from './GalleryItem';
import { PictureType } from './types/itemShape';

const GalleryList = ({
  pictures,
  onModalOpen,
}: {
  pictures: PictureType[];
  onModalOpen: (link: string, title: string) => void;
}) => {
  return (
    <ul
      className="max-w-6xl mx-auto flex-grow p-2 grid gap-[var(--gap)] grid-flow-col auto-cols-[80%] sm:auto-cols-[48%] md:auto-cols-[32%] overflow-x-scroll scroll-p-4 snap-mandatory snap-x
       rounded-lg bg-gray-600 shadow-[10px_10px_20px_#9e9e9e,_-10px_-10px_20px_#ffffff]"
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
