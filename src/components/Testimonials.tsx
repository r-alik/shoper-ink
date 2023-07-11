import Container from '../shared/Container';
import shoperGirl from '/icons/shopper-girl.svg';

import testimonials from '../data/testimonials.json';
import SectionTitle from '../shared/SectionTitle';
import HorizontalDivider from '../shared/HorizontalDivider';

const Testimonial = ({
  text,
  name,
  city,
  avatar,
}: {
  text: string;
  name: string;
  city: string;
  avatar: string;
}) => {
  return (
    <figure className="mb-4">
      <blockquote className="px-8 py-3 rounded-2xl bg-Peach text-Gray-dark italic">
        <div className="flex justify-between items-center gap-4 lg:gap-10 ">
          <img
            src={avatar}
            alt={`Фото ілюстративне. ${name}`}
            title={`Фото ілюстративне. ${name}`}
            width="60"
            className="rounded-full"
          />
          <p> {text}</p>
        </div>
        <figcaption className="text-right">
          &#8212; ({name}, {city})
        </figcaption>
      </blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <Container idName="testimonials" styles="margin-bottom">
      <HorizontalDivider />

      <SectionTitle title="Відгуки" imageLink="/icons/feedback.svg" />

      <p className="standard-text md:text-[1.5rem] text-Gray-dark md:mb-1">
        Ми вдячні нашим замовникам за відгуки. Зворотній звя'зок дуже важливий.
      </p>
      <p className="standard-text md:text-[1.5rem] text-Gray-dark">
        Ось деякі з відгуків:
      </p>
      {testimonials.map(t => {
        return (
          <Testimonial
            city={t.city}
            text={t.text}
            name={t.name}
            key={t.id}
            avatar={t.avatar}
          />
        );
      })}

      <img src={shoperGirl} alt="" width={80} />
    </Container>
  );
};

export default Testimonials;
