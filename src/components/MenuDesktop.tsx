import { useEffect, useState } from 'react';

type menuItem = {
  href: string;
  text: string;
  isActive: boolean;
};

const menu: menuItem[] = [
  { href: '#', text: 'Шопер всім', isActive: true },
  { href: '#juteAndJute', text: 'Джут&Джут', isActive: false },
  { href: '#winebags', text: 'WineBags', isActive: false },
  { href: '#testimonials', text: 'Відгуки', isActive: false },
  { href: '#masterclass', text: 'Майстер клас', isActive: false },
  { href: '#aboutMe', text: 'Про мене', isActive: false },
];

const MenuDesktop = () => {
  const [menuItems, setMenuItems] = useState<menuItem[]>(menu);

  const getHashValue = () => location.hash || '#';

  const hashChangeHandler = () => {
    updateMenu();
  };

  function updateMenu() {
    return setMenuItems(prev => {
      return prev.map(item => {
        return item.href === getHashValue()
          ? { ...item, isActive: true }
          : { ...item, isActive: false };
      });
    });
  }

  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);

    updateMenu();

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, []);

  return (
    <nav>
      <ul
        id="desktop-navigation"
        className="flex font-normal gap-2 text-sm text-Txt-darkest"
      >
        {menuItems.map(m => (
          <MenuItem key={m.href} menuDetails={m} />
        ))}
      </ul>
    </nav>
  );
};

function MenuItem({ menuDetails }: { menuDetails: menuItem }) {
  return (
    <li
      className={`hover:-translate-y-1 transition-all duration-200 ease-linear ${
        menuDetails.isActive ? 'border-b-4 border-Accent-light ' : ''
      }`}
    >
      <a className="inline-block px-1 py-2 text-center" href={menuDetails.href}>
        {menuDetails.text}
      </a>
    </li>
  );
}

export default MenuDesktop;

/*

  const sections = document.querySelectorAll('section');

  const handleScroll = () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + 64;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.id;
      }
    });

    menuItems.forEach(item => {
      const anchor = document.querySelector(`a[href="${item.href}"]`);
      if (anchor) {
        anchor.setAttribute('href', item.href);
      }
    });

    activeSection = currentSection;
    if(currentSection !== a)
    // setActiveSection();
    // setHash(currentSection);

    // = (event: Event) =>
    // const t = e.target as Document;
    // console.log(t.body?.clientHeight);
    // console.log(window.scrollY);
  };


        // window.addEventListener('scroll', handleScroll);
      // window.removeEventListener('scroll', handleScroll);

*/
