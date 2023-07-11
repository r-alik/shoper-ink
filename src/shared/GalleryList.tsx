import { SyntheticEvent } from 'react';

import GalleryItem from './GalleryItem';

import { PictureType } from './types/itemShape';

type GalleryListType = {
  pictures: PictureType[];
  onModalOpen: (link: string, title: string) => void;
  title?: string;
};

const GalleryList = ({ pictures, onModalOpen, title }: GalleryListType) => {
  const handleClick = (e: SyntheticEvent) => {
    const curEl = e.target as HTMLElement;
    const ulEl = curEl.closest('[data-carousel]')?.querySelector('ul');

    if (!ulEl || !ulEl.scrollWidth) return;

    const clientView = ulEl.clientWidth;

    curEl.dataset.button === 'left'
      ? ulEl.scrollBy(-clientView / 2, 0)
      : ulEl.scrollBy(clientView / 2, 0);
  };

  // #fffb8b

  return (
    <div className="bg-gradient-to-br from-[#FFD700]/20 to-[#eedc7d]/40 py-10">
      {title && (
        <h3 className="px-8 md:px-12 pt-4 pb-8 font-semibold text-center text-xl sm:text-2xl text-Gray-dark">
          {title}
        </h3>
      )}

      <div className="relative" data-carousel>
        <button
          onClick={handleClick}
          data-button="left"
          className="absolute px-2 py-1 top-1/2 left-4 2xl:left-20 z-10 opacity-50 hover:opacity-100 rounded-lg font-bold text-2xl md:text-4xl text-white text-center align-middle bg-Accent-dark "
          type="button"
        >
          &#8656;
        </button>
        <button
          onClick={handleClick}
          data-button="right"
          className="absolute px-2 py-1 top-1/2 right-4 2xl:right-20 z-10  opacity-50 hover:opacity-100 rounded-lg font-bold text-2xl md:text-4xl text-white text-center align-middle bg-Accent-dark"
          type="button"
        >
          &#8658;
        </button>
        <ul
          className="
          max-w-screen-2xl mx-auto px-2 py-1 rounded-md
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
    </div>
  );
};

export default GalleryList;

/*
ul - shadow-[10px_10px_20px_#9e9e9e,_-10px_-10px_20px_#ffffff]

*/
