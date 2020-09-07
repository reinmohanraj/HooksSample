import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';


const StyledMenu = ((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
      setAnchorEl(props.currentTarget)
  },[props.currentTarget])

  const handleClose = () => {
    setAnchorEl(null);
    props.onClick(0);
  };

  return (
    <>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <div className="ShowColumn">Show Column
        <CloseIcon className="closeShowcolumn"/>
        </div> */}
        <StyledMenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Location" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="MRN" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Name" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Checkbox fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}
