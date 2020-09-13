import React from "react";
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
import "../../Css/popupmodal.css";

const Procedurepopup = (props) => {
    return(
        <div class="proceduremodal_outer">
        <div class="proceduremodal_Inner">
        <List className="proceduremodal_InnerUL">
           <ListItem>
              <h5 className="ProceduralModal_title"> Add Prodcedure </h5>
            </ListItem>
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
    );

}

export default Procedurepopup;
