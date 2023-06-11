import Container from '../shared/Container';

import testimonials from '../data/testimonials.json';

const Testimonial = ({ text, name }: { text: string; name: string }) => {
  return (
    <figure className="mb-4">
      <blockquote className="rounded-3xl bg-teal-500 py-12 pl-14 pr-8">
        <p className="mt-2 text-left text-2xl text-white italic">{text}</p>
        <figcaption className="mt-2 text-right text-xl italic text-white">
          &#8212; {name}
        </figcaption>
      </blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <Container idName="testimonials">
      <h2 className="text-xl mb-2 sm:mb-2 font-semibold">Testimonials</h2>
      <p className="mb-10 px-4 leading-relaxed first-line:tracking-widest indent-6 text-xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni tempora
        qui, animi, dicta optio eligendi laudantium omnis, quo dolor
        reprehenderit soluta earum in est facilis.
      </p>

      {testimonials.map(t => {
        return <Testimonial text={t.text} name={t.name} />;
      })}
    </Container>
  );
};

export default Testimonials;
