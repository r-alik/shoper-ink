import Container from '../shared/Container';
import HorizontalDivider from '../shared/HorizontalDivider';
import SectionTitle from '../shared/SectionTitle';

import masterVideo from '/video/production-480.mp4';

const Masterclass = () => {
  return (
    <Container idName="masterclass" styles="margin-bottom">
      <HorizontalDivider />
      <SectionTitle title="Майстер клас" imageLink="/icons/sew.svg" />

      <p className="standard-text md:text-[1.5rem] text-Gray-dark">
        Садок вишневий коло хати, Хрущі над вишнями гудуть, Плугатарі з плугами
        йдуть, Співають ідучи дівчата, А матері вечерять ждуть.
      </p>
      <video
        src={masterVideo}
        muted
        loop
        autoPlay
        className="rounded-lg"
      ></video>
      <p className="standard-text md:text-[1.5rem] text-Gray-dark">
        Сем'я вечеря коло хати, Вечірня зіронька встає. Дочка вечерять подає, А
        мати хоче научати, Так соловейко не дає. Поклала мати коло хати
        Маленьких діточок своїх; Сама заснула коло їх. Затихло все, тілько
        дівчата Та соловейко не затих.
      </p>
    </Container>
  );
};

export default Masterclass;
