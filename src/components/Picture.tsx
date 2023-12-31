import { PictureType } from '../shared/types/itemShape';

export type StylesType = {
  picture: string | undefined;
  img: string | undefined;
};

export interface PictureTypeWithStyles extends PictureType {
  styles: StylesType;
}

const Picture = ({
  picDetails,
  styles,
  onModalOpen,
}: {
  picDetails: PictureType;
  styles: StylesType;
  onModalOpen?: (link: string, title: string) => void;
}): JSX.Element => {
  const { p360, p800, p1200, jpg360, jpg800, jpg1200, alt, title } = picDetails;

  return (
    <picture className={styles.picture}>
      <source
        type="image/webp"
        srcSet={`${p360} 360w, ${p800} 780w, ${p1200} 1080w`}
        sizes="(max-width: 360px) 360px, (max-width: 780px) 780px, 1040px"
      />
      <source
        type="image/jpeg"
        srcSet={`${jpg360} 360w, ${jpg800} 780w, ${jpg1200} 1080w`}
        sizes="(max-width: 360px) 360px, (max-width: 780px) 780px, 1040px"
      />
      <img
        onClick={onModalOpen && (() => onModalOpen(jpg1200, title))}
        className={`${styles.img}  bg-gradient-to-r from-Gray-lightest to-Peach`}
        src={p1200}
        alt={alt}
      />
    </picture>
  );
};

export default Picture;
