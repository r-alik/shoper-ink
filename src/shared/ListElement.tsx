import heart from '/public/icons/heart.svg';

interface ListElementProps {
  text: string;
  image?: string;
  width?: number;
}

const ListElement = ({ text, image = heart, width = 20 }: ListElementProps) => {
  return (
    <li key={text} className="flex gap-2 mb-4">
      <img src={image} width={width} />
      <span>{text}</span>
    </li>
  );
};

export default ListElement;
