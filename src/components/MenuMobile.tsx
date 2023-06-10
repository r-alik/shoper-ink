import { SyntheticEvent, useState } from 'react';

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
        aria-controls='mobile-navigation'
        aria-expanded={isMobileMenuVisible ? true : false}
        className={`${
          isMobileMenuVisible ? 'fixed' : 'absolute'
        } text-3xl text-white font-bold w-10 aspect-square border-2 rounded-md top-5 right-8 z-50 sm:hidden bg-Accent-light`}
        onClick={toggleNav}
      >
        <span className='sr-only'>Menu</span>{' '}
        {isMobileMenuVisible ? <span>&#215;</span> : <span>&#9776;</span>}
      </button>
      <ul
        onClick={toggleNav}
        id='mobile-navigation'
        className={`${
          isMobileMenuVisible ? 'translate-x-0' : 'translate-x-full'
        }
          transition-transform duration-300 ease-out
          flex flex-col font-bold gap-2 text-base text-white uppercase  fixed bg-Gray/80 padding-values backdrop-blur-sm inset-0  z-30`}
      >
        <li className='px-2 py-2'>
          <a href='#'>Шопер всім</a>
        </li>
        <li className='px-2 py-2'>
          <a href='#juteAndJute'> Джут&Джут</a>
        </li>
        <li className='px-2 py-2'>
          <a href='#winebags'> WineBags</a>
        </li>
        <li className='px-2 py-2'>
          <a href='#testimonials'> Відгуки</a>
        </li>
        <li className='px-2 py-2'>
          <a href='#masterclass'> Майстер клас</a>
        </li>
        <li className='px-2 py-2'>
          <a href='#aboutMe'> Про мене</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuMobile;
