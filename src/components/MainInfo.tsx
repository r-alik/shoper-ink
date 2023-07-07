import Container from '../shared/Container';
import HorizontalDivider from '../shared/HorizontalDivider';

const MainInfo = () => {
  return (
    <>
      <div className="h-[40vh] lg:h-[45vh] w-full mb-16 bg-gray-100 bg-[url('/images/jute-9-800.jpg')] md:bg-[url('/images/jute-9-1200.jpg')] bg-center md:bg-top bg-no-repeat bg-cover opacity-90"></div>

      <Container idName="#">
        <HorizontalDivider />

        <h2 className="mx-auto p-8 text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-Gray-dark">
          Садок вишневий коло хати.
        </h2>

        <div className="flex-1 basis-1/2 text-xl md:text-2xl text-left text-Gray-dark">
          <p className="mb-8 px-4 leading-relaxed first-line:tracking-widest">
            Садок вишневий коло хати, Хрущі над вишнями гудуть, Плугатарі з
            плугами йдуть, Співають ідучи дівчата, А матері вечерять ждуть.
            Сем'я вечеря коло хати, Вечірня зіронька встає. Дочка вечерять
            подає, А мати хоче научати, Так соловейко не дає. Поклала мати коло
            хати Маленьких діточок своїх;
          </p>
          <a
            href="tel:+3805551112345"
            className="w-2/3 block  rounded-md mx-auto px-6 py-4 border-transparent bg-Accent-dark hover:bg-Accent-light font-bold md:text-2xl text-center text-white"
          >
            +38 (555) 111 23 45
          </a>
        </div>
      </Container>
    </>
  );
};

export default MainInfo;

/*
 <h2 className="max-w-xl mx-auto px-28 py-16 text-4xl md:text-5xl lg:text-6xl font-semibold text-transparent bg-gradient-to-r from-orange-300 to-gray-100 bg-clip-text">
          Садок вишневий коло хати.
        </h2>
*/
