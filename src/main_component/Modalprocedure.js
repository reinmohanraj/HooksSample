import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Modalprocedure = (props) => {
  const [modal, setModal] = useState(props.isopen);
  const [style, setStyle] = useState("hello");


  useEffect(() => {
    setModal(props.isopen);
  }, [props.isopen]);

  useEffect(() => {
      console.log(props.modalposition)
      setStyle({
        left: props.modalposition.x,
        top: props.modalposition.top
    });
  }, [props.modalposition]);

  const toggle = () => {
    props.onClose();
    setModal(!modal);
  };

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  return (
      
    <Modal isOpen={modal} toggle={toggle} style={{left: `${style.left + 34}px`, position: 'sticky', margin:'0px', top: `${style.top+10}px`}}>
      <ModalHeader toggle={toggle} close={closeBtn}>
        Modal title
      </ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Modalprocedure;
