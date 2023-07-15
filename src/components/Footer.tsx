import { useWindowWidth } from '@react-hook/window-size/throttled';

import facebook from '/icons/socials-facebook.svg';
import instagram from '/icons/socials-instagram.svg';
import youtube from '/icons/socials-youtube.svg';
import email from '/icons/email.svg';
import logoWhite from '/icons/logo-white.svg';

const Footer = () => {
  const onlyWidth = useWindowWidth();

  return (
    <footer className="flex flex-col justify-between min-h-[25vh] text-lg text-white bg-Gray-dark pt-6">
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
          title="Замовити за телефоном: (555) 111-23-45"
        >
          +38 (555) 111-23-45
        </a>

        <ul className="flex gap-6 justify-center items-center">
          <li className="hover:scale-110 transition-all" title="Написати листа">
            <a target="_blank" href="email:qwerty@qwerty.com">
              <img src={email} width="28" alt="" />
            </a>
          </li>
          <li
            className="hover:scale-110 transition-all"
            title="Перейти на сторінку в Інстаграм"
          >
            <a target="_blank" href="https://www.instagram.com">
              <img src={instagram} width="28" alt="" />
            </a>
          </li>

          <li
            className="hover:scale-110 transition-all"
            title="Перейти на сторінку Фейсбук"
          >
            <a target="_blank" href="https://www.facebook.com">
              <img src={facebook} width="28" alt="" />
            </a>
          </li>
          <li
            className="hover:scale-110 transition-all"
            title="Перейти на сторінку Ютуб"
          >
            <a target="_blank" title="Перейти на сторінку Ютуб">
              <img src={youtube} width="28" alt="" />
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-10 pb-2 text-Accent-dark text-center">
        <small className="w-1/2 block mx-auto border-t-[1px] border-Accent-dark pt-1">
          2022 - {new Date().getFullYear()}
        </small>
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
