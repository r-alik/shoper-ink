export interface ModalShape {
  src: string;
  onModalClose: () => void;
  title: string;
}

const Modal = (props: ModalShape) => {
  console.log(props.src);

  return (
    <dialog
      id="modal"
      className="backdrop:bg-Gray-dark/90 p-1 rounded-md bg-Gray/60"
    >
      <div className="flex justify-between p-2 text-base">
        <h2 className="text-white font-semibold px-2 text-lg">
          * {props.title}
        </h2>
        <button
          className="w-10 text-white text-[2rem] font-bold bg-Accent-dark aspect-square border-2 rounded-md
          hover:bg-Accent-light"
          onClick={props.onModalClose}
          type="button"
        >
          <span className="flex-1">&#215;</span>
        </button>
      </div>

      <img className="rounded-xl" src={props.src} alt="" />
    </dialog>
  );
};

export default Modal;

/*
w-8 h-8
bg-[url('/close-icon.svg')]
          bg-Accent-dark bg-contain bg-no-repeat bg-center rounded-full outline-transparent border-transparent 
          transition-all
          hover:border-transparent 
          hover:rotate-90
          hover:bg-Accent-light
          focus-visible:rotate-90
          focus-visible:border-none
          focus-visible:outline-none
        focus-visible:bg-Accent-light
*/

/*
        
        text-3xl text-white font-bold w-10 aspect-square border-2 rounded-md top-4 right-2 z-50 sm:hidden bg-Accent-light`}
        <span>&#9776;</span>

*/
