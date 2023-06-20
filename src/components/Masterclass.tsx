import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';

const Masterclass = () => {
  return (
    <Container idName="masterclass">
      <SectionTitle title="Майстер клас" imageLink="/sew.svg" />

      <p className="mb-10 px-4 leading-relaxed first-line:tracking-widest indent-6 text-xl text-center">
        Садок вишневий коло хати, Хрущі над вишнями гудуть, Плугатарі з плугами
        йдуть, Співають ідучи дівчата, А матері вечерять ждуть. Сем'я вечеря
        коло хати, Вечірня зіронька встає. Дочка вечерять подає, А мати хоче
        научати, Так соловейко не дає. Поклала мати коло хати Маленьких діточок
        своїх; Сама заснула коло їх. Затихло все, тілько дівчата Та соловейко не
        затих.
      </p>
    </Container>
  );
};

export default Masterclass;
