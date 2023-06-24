import { useWindowWidth } from '@react-hook/window-size/throttled';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';
import heart from '/icons/heart.svg';

const Header = () => {
  const onlyWidth = useWindowWidth();

  return (
    <header className="sticky top-0 z-50 bg-white border-b h-16 flex gap-3 justify-between items-center w-11/12 max-w-5xl mx-auto p-2 text-lg text-Txt-dark sm:text-base">
      <div
        className="flex gap-1 cursor-pointer"
        onClick={() => location.replace('/#')}
      >
        <span>SHOPER.INK</span>
        <img className="animate-pulse" src={heart} width={20} alt="" />
      </div>

      {onlyWidth < 640 ? <MenuMobile /> : <MenuDesktop />}
    </header>
  );
};

export default Header;
