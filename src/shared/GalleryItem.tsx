import Picture, { StylesType, PictureType } from '../components/Picture';

const s: StylesType = {
  picture: 'w-full',
  img: 'h-52 w-full object-cover object-top rounded-t-lg',
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

export default GalleryItem;

/*
interface GalleryItemShape {
  id: string | number;
  title: string;
  picDetail: PictureType;
  desc: string;
  price: number;
}

*/
