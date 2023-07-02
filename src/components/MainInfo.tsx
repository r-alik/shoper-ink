import Container from '../shared/Container';
import HorizontalDivider from '../shared/HorizontalDivider';
import boxes from '/icons/boxes.svg';

const MainInfo = () => {
  return (
    <>
      <div className="h-[50vh] w-full bg-gray-100 bg-[url('/images/jute-9-800.jpg')] md:bg-[url('/images/jute-9-1200.jpg')] bg-center bg-no-repeat bg-cover text-center opacity-90"></div>

      <Container idName="#">
        <h2 className="mb-8 p-6 font-semibold text-2xl md:text-3xl lg:text-4xl align-middle max-w-xl mx-auto text-Gray-dark">
          Садок вишневий коло хати.
        </h2>

        <div className="px-4 py-8 flex-1 basis-1/2 text-xl md:text-2xl text-center text-Gray-dark">
          <p className="mb-4 px-4 leading-relaxed first-line:tracking-widest">
            Садок вишневий коло хати, Хрущі над вишнями гудуть, Плугатарі з
            плугами йдуть, Співають ідучи дівчата, А матері вечерять ждуть.
            Сем'я вечеря коло хати, Вечірня зіронька встає. Дочка вечерять
            подає, А мати хоче научати, Так соловейко не дає. Поклала мати коло
            хати Маленьких діточок своїх;
          </p>
          <img src={boxes} alt="" width={144} className="mx-auto opacity-70" />
        </div>

        <HorizontalDivider />
      </Container>
    </>
  );
};

export default MainInfo;
