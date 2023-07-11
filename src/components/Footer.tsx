import { useWindowWidth } from '@react-hook/window-size/throttled';

import facebook from '/icons/socials-facebook.svg';
import instagram from '/icons/socials-instagram.svg';
import youtube from '/icons/socials-youtube.svg';
import email from '/icons/email.svg';
import logoWhite from '/icons/logo-white.svg';

const Footer = () => {
  const onlyWidth = useWindowWidth();

  return (
    <footer className="min-h-[25vh] text-lg text-white bg-Gray-dark py-6">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-3 justify-around items-center w-11/12 max-w-5xl mx-auto">
        <div>
          <img
            onClick={() => location.replace('/#')}
            className="cursor-pointer mb-3"
            src={logoWhite}
            alt="Shoper.ink company's logo"
            width={onlyWidth < 640 ? 110 : 120}
          />
          <hr className="w-3/4 mx-auto bg-Accent-light border-transparent" />
        </div>

        <a
          href="tel:+3805551112345"
          className="block px-6 py-4 border-2 border-Accent-light rounded-md font-['Veles'] font-bold text-xl md:text-2xl hover:bg-Accent-dark"
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

/*
  <a
            href="tel:+3805551112345"
            className="w-2/3 block  rounded-md mx-auto px-4 py-4 border-transparent bg-Accent-dark hover:bg-Accent-light font-bold text-2xl text-center text-white "
          >
            {onlyWidth > 640 && 'Замовити: '} (555) 111-23-45
          </a>
*/
