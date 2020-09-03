import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import SingleBedIcon from '@material-ui/icons/SingleBed';	
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListAltIcon from '@material-ui/icons/ListAlt';
import EditIcon from '@material-ui/icons/Edit';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import './Modalprocedure.css';

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
       Add Procedure
      </ModalHeader>
      <ModalBody>
      <div class="proceduremodal_outer">
<div class="proceduremodal_Inner">
<List className="proceduremodal_InnerUL">
    <ListItem>
      <AccessTimeIcon  className="ProcedureIcon"/>  
      <span>Jun 18, 2020 9:00 am- 10:00 am Jun, 18 2020</span>
    </ListItem>
    <ListItem>
    <PriorityHighIcon className="ProcedureIcon"/>
    <Input defaultValue="Parnassus Apheresis" inputProps={{ 'aria-label': 'description' }} />
    </ListItem>
    <ListItem>
        <AccountCircleIcon className="ProcedureIcon" />
    <Input defaultValue="Moneypenny, Jane E. | Age :57 | MRN No: 14021927" inputProps={{ 'aria-label': 'description' }} />
    </ListItem>
    <ListItem>
        <GroupIcon className="ProcedureIcon"/>
    <Input placeholder="Add Personnel" inputProps={{ 'aria-label': 'description' }} />
    </ListItem>
    <ListItem>
   <SingleBedIcon className="ProcedureIcon"/>
    <Input placeholder="Add room" inputProps={{ 'aria-label': 'description' }} />
    </ListItem>
    <ListItem>
        <ListAltIcon className="ProcedureIcon" />
    <Input placeholder="Add equiptment" inputProps={{ 'aria-label': 'description' }} />
    </ListItem>
    <ListItem>
        <AcUnitIcon className="ProcedureIcon" />
    <Input placeholder="Add kit" inputProps={{ 'aria-label': 'description' }} />
    </ListItem>
    <ListItem>
   <AddCircleIcon className="ProcedureIcon" />
    <Input placeholder="Add resource" inputProps={{ 'aria-label': 'description' }} />
    </ListItem>
    <ListItem>
     <EditIcon className="ProcedureIcon"/>
    <Input placeholder="Add notes" inputProps={{ 'aria-label': 'description' }} />
    </ListItem>
    </List>  
</div>
</div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          More Option
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Modalprocedure;
