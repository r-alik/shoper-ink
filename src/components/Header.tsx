import { useWindowWidth } from '@react-hook/window-size/throttled';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';
// import heart from '/icons/heart.svg';
import logo from '/icons/logo.svg';

const Header = () => {
  const onlyWidth = useWindowWidth();

  return (
    <header className="sticky top-0 z-50 bg-white border-b rounded-b-lg h-16 lg:h-20 flex gap-3 justify-between items-center max-w-5xl mx-auto p-2 text-lg text-Txt-dark sm:text-base">
      <img
        src={logo}
        alt="Shoper.ink company's logo"
        width={onlyWidth < 640 ? 110 : 120}
      />

      {onlyWidth < 640 ? <MenuMobile /> : <MenuDesktop />}
    </header>
  );
};

export default Header;

/*
    <div
        className="flex gap-1 cursor-pointer lg:text-xl"
        onClick={() => location.replace('/#')}
      >
        <img className="animate-pulse" src={heart} width={20} alt="" />
        <span>SHOPER.INK</span>
      </div>
 */
