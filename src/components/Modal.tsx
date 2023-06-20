export interface ModalShape {
  src: string;
  onModalClose: () => void;
  title: string;
}

const Modal = (props: ModalShape) => {
  console.log(props.src);

  return (
    <dialog id="modal" className="backdrop:bg-Gray/80 p-1 rounded-md">
      <div className="flex justify-between p-2 text-base">
        <h2>{props.title}</h2>
        <button
          className="w-8 h-8 bg-[url('/close-icon.svg')] bg-Gray/80 bg-contain bg-no-repeat bg-center rounded-full outline-transparent border-transparent 
          transition-all
          hover:border-transparent 
          hover:rotate-90
          hover:bg-Gray/60
          focus-visible:rotate-90
          focus-visible:border-none
          focus-visible:outline-none
focus-visible:bg-Gray/60
          "
          onClick={props.onModalClose}
          type="button"
        ></button>
      </div>

      <img src={props.src} alt="" />
    </dialog>
  );
};

export default Modal;

/*
export interface ModalElements {
  src: string;
  alt?: string;
  title: string;
}

{ bigImageDetails }: { bigImageDetails: ModalElements }
      <img src={bigImageDetails.src} alt="" />

*/
