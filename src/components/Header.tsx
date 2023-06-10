import { useWindowWidth } from '@react-hook/window-size/throttled';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

const Header = () => {
  const onlyWidth = useWindowWidth();

  return (
    <header className="border-b h-16 flex gap-3 justify-between items-center w-11/12 max-w-5xl mx-auto p-2 text-lg text-Txt-dark sm:text-base">
      <div className="flex gap-1">
        <span>SHOPER.INK</span>
        <img className="animate-pulse" src="/heart.svg" width={20} alt="" />
      </div>

      {onlyWidth < 640 ? <MenuMobile /> : <MenuDesktop />}
    </header>
  );
};

export default Header;

/* <div className='bg-[url("public/bag.svg")] bg-no-repeat bg-contain bg-center w-6 h-6'></div> */
