import Container from '../shared/Container';
import HorizontalDivider from '../shared/HorizontalDivider';
import SectionTitle from '../shared/SectionTitle';

const Masterclass = () => {
  return (
    <Container idName="masterclass">
      <SectionTitle title="Майстер клас" imageLink="/icons/sew.svg" />

      <p className="section-p md:text-[1.5rem] text-Gray-dark">
        Садок вишневий коло хати, Хрущі над вишнями гудуть, Плугатарі з плугами
        йдуть, Співають ідучи дівчата, А матері вечерять ждуть.
      </p>
      <p className="section-p md:text-[1.5rem] text-Gray-dark">
        Сем'я вечеря коло хати, Вечірня зіронька встає. Дочка вечерять подає, А
        мати хоче научати, Так соловейко не дає. Поклала мати коло хати
        Маленьких діточок своїх; Сама заснула коло їх. Затихло все, тілько
        дівчата Та соловейко не затих.
      </p>

      <HorizontalDivider />
    </Container>
  );
};

export default Masterclass;
