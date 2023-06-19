interface ModalShape {
  src: string;
  onModalClose: () => void;
}

const Modal = (props: ModalShape) => {
  console.log(props.src);

  return (
    <dialog id="modal">
      <h2>title</h2>
      <p>src</p>

      <button onClick={props.onModalClose} type="button">
        Close
      </button>

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
