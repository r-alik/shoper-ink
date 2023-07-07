import Container from '../shared/Container';
import shoperGirl from '/icons/shopper-girl.svg';

import testimonials from '../data/testimonials.json';
import SectionTitle from '../shared/SectionTitle';
import HorizontalDivider from '../shared/HorizontalDivider';

const Testimonial = ({
  text,
  name,
  city,
}: {
  text: string;
  name: string;
  city: string;
}) => {
  return (
    <figure className="mb-4">
      <blockquote className="rounded-2xl bg-Peach px-8 py-3 text-Gray-dark italic">
        <p className="text-left">
          <span className="not-italic font-bold text-Accent-dark">&#9786;</span>{' '}
          - {text}
        </p>
        <figcaption className="text-right">
          &#8212; {name} ({city})
        </figcaption>
      </blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <Container idName="testimonials">
      <SectionTitle title="Відгуки" imageLink="/icons/feedback.svg" />

      <p className="standard-text md:text-[1.5rem] text-Gray-dark md:mb-1">
        Ми вдячні нашим замовникам за відгуки. Зворотній звя'зок дуже важливий.
      </p>
      <p className="standard-text md:text-[1.5rem] text-Gray-dark">
        Ось деякі з відгуків:
      </p>
      {testimonials.map(t => {
        return (
          <Testimonial city={t.city} text={t.text} name={t.name} key={t.id} />
        );
      })}

      <img src={shoperGirl} alt="" width={80} />

      <HorizontalDivider />
    </Container>
  );
};

export default Testimonials;
