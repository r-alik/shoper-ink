import heart from '/icons/heart.svg';
import facebook from '/icons/socials-facebook.svg';
import instagram from '/icons/socials-instagram.svg';
import youtube from '/icons/socials-youtube.svg';
import email from '/icons/email.svg';

const Footer = () => {
  return (
    <footer className="min-h-[25vh] text-lg text-white bg-Gray-dark py-6">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-3 justify-around items-center w-11/12 max-w-5xl mx-auto">
        <div>
          <div
            className="flex gap-3 cursor-pointer justify-center mb-2 md:text-2xl"
            onClick={() => location.replace('/#')}
          >
            <span>SHOPER.INK</span>
            <img src={heart} width={20} alt="" />
          </div>

          <hr className="w-3/4 mx-auto bg-Accent-light border-transparent" />

          <p></p>
        </div>

        <a
          href="tel:+3805551112345"
          className="block border-2 border-Accent-light rounded-md px-6 py-4 hover:bg-Accent-dark font-bold md:text-xl"
        >
          +38 (555) 111 23 45
        </a>

        <ul className="flex gap-6 justify-center items-center">
          <li className="hover:scale-105 transition-all">
            <a target="_blank" href="email:qwerty@qwerty.com">
              <img src={email} width="28" alt="" />
            </a>
          </li>
          <li className="hover:scale-105 transition-all">
            <a target="_blank" href="https://www.instagram.com">
              <img src={instagram} width="28" alt="" />
            </a>
          </li>
          <li className="hover:scale-105 transition-all">
            <a target="_blank" href="https://www.facebook.com">
              <img src={facebook} width="28" alt="" />
            </a>
          </li>
          <li className="hover:scale-105 transition-all">
            <a target="_blank" href="https://www.youtube.com">
              <img src={youtube} width="28" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
