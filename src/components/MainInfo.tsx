import Container from '../shared/Container';
import boxes from '/icons/boxes.svg';

const MainInfo = () => {
  return (
    <Container idName="#">
      {/* <Picture onModalOpen={() => {}} picDetails={mainPic} styles={styles} /> */}

      <div className="p-4 flex-1 basis-1/2 text-xl md:text-2xl text-center text-Gray-dark">
        <h2 className="text-2xl mb-12 font-semibold md:text-3xl">
          Садок вишневий коло хати.
        </h2>
        <p className="mb-4 px-4 leading-relaxed first-line:tracking-widest">
          Садок вишневий коло хати, Хрущі над вишнями гудуть, Плугатарі з
          плугами йдуть, Співають ідучи дівчата, А матері вечерять ждуть. Сем'я
          вечеря коло хати, Вечірня зіронька встає. Дочка вечерять подає, А мати
          хоче научати, Так соловейко не дає. Поклала мати коло хати Маленьких
          діточок своїх;
        </p>
        <img src={boxes} alt="" width={144} className="mx-auto opacity-70" />
      </div>
    </Container>
  );
};

export default MainInfo;
