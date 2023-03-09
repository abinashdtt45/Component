import { useEffect } from "react";
import ReactDOM from "react-dom";
const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    //to prevent scrolling when modal is open, this css is added to body tag
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={onClose}
      ></div>
      <div className="fixed inset-40 p-10 bg-white h-1/5">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-center">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
