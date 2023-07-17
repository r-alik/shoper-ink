import { useEffect, useState, useRef } from 'react';

import { menu, menuItem } from '../data/menuItem';

const MenuDesktop = () => {
  const [menuItems, setMenuItems] = useState<menuItem[]>(menu);
  const observers = useRef<IntersectionObserver | null>(null);
  const [active, setActive] = useState<string>('');

  let anchors: NodeListOf<Element> | null;

  const getHashValue = () => location.hash || '#';

  const hashChangeHandler = () => {
    updateMenu(getHashValue());
  };

  function updateMenu(currentLocation: string) {
    return setMenuItems(prev => {
      return prev.map(item => {
        return item.href === currentLocation
          ? { ...item, isActive: true }
          : { ...item, isActive: false };
      });
    });
  }

  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    anchors = document.querySelectorAll('[data-anchor]');

    updateMenu(getHashValue());

    observers.current = new IntersectionObserver(entries => {
      const visible = entries.find(e => e.isIntersecting)?.target;
      if (visible) {
        setActive(visible.id);
      }
    });

    anchors?.forEach(a => {
      observers?.current?.observe(a);
    });

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);

      anchors?.forEach(a => {
        observers.current?.unobserve(a);
      });
    };
  }, []);

  useEffect(() => {
    const url = new URL(location.href);
    url.hash = active;

    history.pushState({}, '', url);

    updateMenu(getHashValue());
  }, [active]);

  return (
    <nav>
      <ul
        id="desktop-navigation"
        className="flex font-normal gap-2 text-sm lg:text-base text-Txt-darkest"
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
