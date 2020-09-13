import React, { useEffect, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import Checkbox from "@material-ui/core/Checkbox";
import CloseIcon from "@material-ui/icons/Close";
import { AppointmentContext } from "./Body";

const StyledMenu = (props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
);

const StyledMenuItem = withStyles((theme) => ({
  root: {
    // '&:focus': {
    //   backgroundColor: theme.palette.primary.main,
    //   '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //     color: theme.palette.common.white,
    //   },
    // },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const [state, dispatch] = useContext(AppointmentContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    setAnchorEl(props.currentTarget);
  }, [props.currentTarget]);

  const handleClose = () => {
    setAnchorEl(null);
    props.onClick(0);
  };

  const colSelect = (updatedCol) => {
    dispatch({
      type: "COLSELECT",
      payload: updatedCol
    });
  };

  const onColClick = (e) => {
    if(state.displayColumns.includes(e.target.value)){
      const removeColumn = state.displayColumns.filter(elem => elem !== e.target.value);
      colSelect(removeColumn);
    } else {
      state.displayColumns.push(e.target.value)
      const selectColumn = [];
      for(let i=0; i<state.selectedCol.length; i++){
        for(let j=0; j<state.displayColumns.length; j++){
          if(state.selectedCol[i] === state.displayColumns[j]){
            selectColumn.push(state.selectedCol[i]);
            j=state.displayColumns.length;
          }
        }
      }
      colSelect(selectColumn);
    }
    
  }

  const displayCol = () => {
    return state.selectedCol.map((elem) => {
      if (elem === "Date" || elem === "MRN" || elem === "Age") {
        return;
      } else {
        return (
          <StyledMenuItem>
            <ListItemIcon>
              <Checkbox fontSize="small" value={`${elem}`} defaultChecked={true} onChange={(e) => {onColClick(e)}} />
            </ListItemIcon>
            <ListItemText primary={`${elem}`} />
          </StyledMenuItem>
        );
      }
    });
  };

  return (
    <StyledMenu
      className="showColumndropdown"
      id="customized-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <div className="ShowColumn">
        Show Columns
        <CloseIcon className="closeShowcolumn" onClick={handleClose} />
      </div>
      {displayCol()}
    </StyledMenu>
  );
}
