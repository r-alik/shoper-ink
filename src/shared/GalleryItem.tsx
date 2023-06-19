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
  onModalOpen: (link: string) => void;
}) {
  return (
    <div className="h-full flex flex-col justify-start items-stretch gap-4 border rounded-lg p-2 snap-start bg-gradient-to-br from-Peach to-white shadow-[10px_10px_20px_#8c8985,_-10px_-10px_20px_#ffffff] ">
      <Picture onModalOpen={onModalOpen} picDetails={picDetail} styles={s} />
      <div className="flex justify-between gap-1 items-center p-2">
        <span
          title={picDetail.isAvailable ? 'В наявності' : 'Немає у наявності'}
          className={`w-3 h-3 rounded-full ${
            picDetail.isAvailable ? 'bg-green-500' : 'bg-red-500'
          }`}
        ></span>
        <h4 className="mr-auto">{picDetail.title}</h4>
        <span className="text-xs">id: {picDetail.id}</span>
      </div>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, dicta
        dolorum? Aspernatur minus sunt esse?
      </p>
      <p className="mb-3">
        Ціна:{' '}
        <span className="text-Accent-dark font-semibold">
          {' '}
          {picDetail.price}
        </span>{' '}
        <span>гривень</span>
      </p>
    </div>
  );
}

export default GalleryItem;
