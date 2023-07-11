import Picture, { StylesType } from '../components/Picture';

import { PictureType } from './types/itemShape';

const s: StylesType = {
  picture: 'w-full hover:cursor-pointer',
  img: 'h-52 w-full object-cover object-top rounded-t-lg',
};

function GalleryItem({
  picDetail,
  onModalOpen,
}: {
  picDetail: PictureType;
  onModalOpen: (link: string, title: string) => void;
}) {
  return (
    <div
      className="h-full flex flex-col justify-start items-stretch gap-4 border border-Accent-light/30 rounded-lg p-2 snap-start 
      bg-white
    [&>*:not(:first-child)]:px-2
    "
    >
      <Picture onModalOpen={onModalOpen} picDetails={picDetail} styles={s} />
      <div className="flex justify-between gap-1 items-center border-b border-dotted">
        <h4 className="mr-auto">{picDetail.title}</h4>
        <span className="text-xs">id: {picDetail.id}</span>
      </div>

      <p>{picDetail.description}</p>

      <p>
        Ціна:{' '}
        <span className="text-Accent-dark font-semibold">
          {' '}
          {picDetail.price}
        </span>{' '}
        <span>гривень</span>
      </p>

      <p className="mb-3">
        Наявність:
        {picDetail.isAvailable ? (
          <span className="ml-2 text-green-600 italic">В наявності</span>
        ) : (
          <span className="ml-2 text-Accent-dark italic">Під замовлення</span>
        )}
      </p>
    </div>
  );
}

export default GalleryItem;

/*
    bg-gradient-to-br from-Peach to-white shadow-[10px_10px_20px_#8c8985,_-10px_-10px_20px_#ffffff] 
 */
