import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';

const AboutMe = () => {
  return (
    <Container idName="aboutMe">
      <SectionTitle title="Про мене" imageLink="/shopper-hand.svg" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni tempora
        qui, animi, dicta optio eligendi laudantium omnis, quo dolor
        reprehenderit soluta earum in est facilis.
      </p>
    </Container>
  );
};

export default AboutMe;
