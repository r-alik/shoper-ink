import heart from '/icons/heart.svg';

const Footer = () => {
  return (
    <footer
      className="h-[25vh]  
      text-lg text-white 
    bg-Gray-dark
    "
    >
      <div className="flex gap-3 justify-around items-center w-11/12 max-w-5xl mx-auto py-4">
        <div>
          <div
            className="flex gap-1 cursor-pointer justify-center mb-2"
            onClick={() => location.replace('/#')}
          >
            <span>SHOPER.INK</span>
            <img src={heart} width={20} alt="" />
          </div>

          <hr className="mb-4 w-2/3 mx-auto bg-Accent-light border-transparent" />

          <a
            href="tel:+3805551112345"
            className="block border-2 border-Accent-light rounded-md px-6 py-4 hover:bg-Accent-dark font-bold"
          >
            +38 (555) 111 23 45
          </a>
        </div>

        <ul>
          <li>Email</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Youtube</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
