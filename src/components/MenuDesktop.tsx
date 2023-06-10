const MenuDesktop = () => {
  return (
    <nav>
      <ul
        id='desktop-navigation'
        className='flex font-normal gap-2 text-sm text-Txt-darkest'
      >
        <li className='px-1 border-b border-Accent-light py-2 hover:-translate-y-1 transition-all duration-200 ease-linear'>
          <a href='#'>Шопер всім</a>
        </li>
        <li className='px-1 border-b border-Accent-light py-2 hover:-translate-y-1 transition-all duration-200 ease-linear'>
          <a href='#juteAndJute'> Джут&Джут</a>
        </li>
        <li className='px-1 border-b border-Accent-light py-2 hover:-translate-y-1 transition-all duration-200 ease-linear'>
          <a href='#winebags'> WineBags</a>
        </li>
        <li className='px-1 border-b border-Accent-light py-2 hover:-translate-y-1 transition-all duration-200 ease-linear'>
          <a href='#testimonials'> Відгуки</a>
        </li>
        <li className='px-1 border-b border-Accent-light py-2 hover:-translate-y-1 transition-all duration-200 ease-linear'>
          <a href='#masterclass'> Майстер клас</a>
        </li>
        <li className='px-1 border-b border-Accent-light py-2 hover:-translate-y-1 transition-all duration-200 ease-linear'>
          <a href='#aboutMe'> Про мене</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;
