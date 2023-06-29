export interface ModalShape {
  src: string;
  onModalClose: () => void;
  title: string;
}

const Modal = (props: ModalShape) => {
  return (
    <dialog
      id="modal"
      className="backdrop:bg-Gray-dark/90 p-1 rounded-md bg-Peach"
    >
      <div className="flex justify-between p-2 text-base">
        <h2 className="text-Txt-darkest font-semibold px-2 text-lg">
          * {props.title}
        </h2>
        <button
          className="w-9 h-9 bg-[url('/icons/close-icon.svg')] bg-Accent-dark border-2 bg-contain bg-no-repeat bg-center rounded-md
          transition-all
          focus-visible:border-none
          focus-visible:rotate-90
          focus-visible:outline-none
          hover:rotate-90
          hover:bg-Accent-light
          focus-visible:bg-Accent-light"
          onClick={props.onModalClose}
          type="button"
        ></button>
      </div>

      <img className="rounded-xl" src={props.src} alt="" />
    </dialog>
  );
};

export default Modal;

/*
    <span className="flex-1">&#215;</span>
==============================

w-8 h-8
bg-[url('/icons/close-icon.svg')]
          bg-Accent-dark  rounded-full outline-transparent border-transparent 
          
          hover:border-transparent 
          hover:bg-Accent-light
          focus-visible:border-none
*/

/*
        
        text-3xl text-white font-bold w-10 aspect-square border-2 rounded-md top-4 right-2 z-50 sm:hidden bg-Accent-light`}
        <span>&#9776;</span>

*/
