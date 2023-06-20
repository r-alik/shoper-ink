import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';

const AboutMe = () => {
  return (
    <Container idName="aboutMe">
      <SectionTitle title="Про мене" imageLink="/avatar.svg" />

      <p className="mb-10 px-4 leading-relaxed first-line:tracking-widest indent-6 text-xl text-center">
        Привіт! Мене звати Світлана. Я - творча душа зі створення унікальних
        виробів. З любов'ю та майстерністю я виготовляю неперевершені винні
        сумки та джутові вироби. Кожен виріб - це втілення мого власного стилю
        та витонченості. Я використовую натуральні матеріали, які дарують моїм
        виробам неповторну природну естетику. Крім того, кожна моя робота
        зроблена вручну, завдяки чому кожна деталь має особливий шарм та
        індивідуальність. Завітайте у світ моїх виробів, і дозвольте мені
        зробити ваші моменти особливими та незабутніми.
      </p>
    </Container>
  );
};

export default AboutMe;
