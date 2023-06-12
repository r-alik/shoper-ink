import Container from '../shared/Container';
import shoperGirl from '/shopper-girl.svg';

import testimonials from '../data/testimonials.json';

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
      <blockquote className="rounded-2xl bg-Peach px-8 py-3 text-Accent-dark italic ">
        <p className="text-left">{text}</p>
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
      <h2 className="text-xl mb-2 sm:mb-2 font-semibold">Testimonials</h2>
      <p className="mb-6 px-4 leading-relaxed first-line:tracking-widest indent-6 text-center">
        Ми вдячні нашим замовникам за відгуки. Зворотній звя'зок дуже важливий.
        Ось деякі з відгуків:
      </p>

      {testimonials.map(t => {
        return (
          <Testimonial city={t.city} text={t.text} name={t.name} key={t.id} />
        );
      })}

      <img src={shoperGirl} alt="" width={80} />
    </Container>
  );
};

export default Testimonials;
