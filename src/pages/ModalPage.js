import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [isShow, setisShow] = useState(false);

  const handleClick = () => {
    setisShow(true);
  };

  const handleClose = () => {
    setisShow(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} warning>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important message for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {isShow && modal}
    </div>
  );
};

export default ModalPage;
