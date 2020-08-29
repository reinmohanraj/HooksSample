import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Procedurepopup from './popupmodal';

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
      <Procedurepopup />
    </Modal>
  );
};

export default Modalprocedure;
