import { SyntheticEvent, useState } from 'react';

import { menu } from '../data/menuItem';

const MenuMobile = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] =
    useState<boolean>(false);

  const toggleNav = (e: SyntheticEvent) => {
    e.stopPropagation();

    setIsMobileMenuVisible(prev => !prev);
  };

  return (
    <nav>
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isMobileMenuVisible ? true : false}
        className={`${
          isMobileMenuVisible ? 'fixed' : 'absolute'
        } text-3xl text-white font-bold w-10 aspect-square border-2 rounded-md top-3 right-2 z-50 sm:hidden bg-Accent-light`}
        onClick={toggleNav}
      >
        <span className="sr-only">Menu</span>{' '}
        {isMobileMenuVisible ? <span>&#215;</span> : <span>&#9776;</span>}
      </button>
      <ul
        onClick={toggleNav}
        id="mobile-navigation"
        className={`${
          isMobileMenuVisible ? 'translate-x-0' : 'translate-x-full'
        }
          transition-transform duration-300 ease-out
          flex flex-col font-bold gap-2 text-base text-white uppercase  fixed bg-Gray/80 padding-values backdrop-blur-sm inset-0  z-30`}
      >
        {menu.map(m => (
          <li key={m.href} className="p-2">
            <a href={m.href}>{m.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuMobile;
