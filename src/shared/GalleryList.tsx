import { UIEvent } from 'react';
import GalleryItem from './GalleryItem';
import { PictureType } from './types/itemShape';

import arrowLeft from '/icons/arrow-left.svg';
import arrowRight from '/icons/arrow-right.svg';

type GalleryListType = {
  pictures: PictureType[];
  onModalOpen: (link: string, title: string) => void;
  title?: string;
};

const GalleryList = ({ pictures, onModalOpen, title }: GalleryListType) => {
  const handleScroll = (e: UIEvent<HTMLUListElement>) => {
    const sl = (e.target as HTMLUListElement).scrollLeft;
    const clWidth = (e.target as HTMLUListElement).clientWidth;
    const scrollWidth = (e.target as HTMLUListElement).scrollWidth;

    console.log(sl, clWidth, scrollWidth);
  };

  return (
    <div>
      {title && (
        <h3 className="px-8 md:px-12 pt-4 pb-8 font-semibold text-center text-xl sm:text-2xl">
          {title}
        </h3>
      )}
      <ul
        onScroll={handleScroll}
        className="
          max-w-screen-2xl mx-auto px-2 
          flex-grow  
          grid gap-[var(--gap)] grid-flow-col 
          auto-cols-[70%] sm:auto-cols-[38%] lg:auto-cols-[25%] 
          overflow-x-scroll scroll-p-4 snap-mandatory snap-x"
      >
        {pictures.map(pic => {
          return (
            <li key={pic.id}>
              <GalleryItem onModalOpen={onModalOpen} picDetail={pic} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GalleryList;

/*
ul - shadow-[10px_10px_20px_#9e9e9e,_-10px_-10px_20px_#ffffff]


*/
