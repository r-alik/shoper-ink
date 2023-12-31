import Container from '../shared/Container';
import HorizontalDivider from '../shared/HorizontalDivider';
import SectionTitle from '../shared/SectionTitle';

const AboutMe = () => {
  return (
    <Container idName="aboutMe" styles="margin-bottom">
      <HorizontalDivider />

      <SectionTitle title="Про мене" imageLink="/icons/avatar.svg" />

      <p className="standard-text md:text-[1.5rem] text-Gray-dark">
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
