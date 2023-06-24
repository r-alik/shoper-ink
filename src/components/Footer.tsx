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
            className="flex gap-1 cursor-pointer"
            onClick={() => location.replace('/#')}
          >
            <span>SHOPER.INK</span>
            <img src={heart} width={20} alt="" />
          </div>

          <hr />

          <address>
            Email: qwerty@qwerty.com <br /> Phone: +38 (555) 111 23 45
          </address>
        </div>

        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Youtube</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
