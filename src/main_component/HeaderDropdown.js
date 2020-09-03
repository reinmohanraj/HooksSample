import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PersonIcon from '@material-ui/icons/Person';

const HeaderDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className="Jikan_headerdropdown">
       <PersonIcon />
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>My Profile</DropdownItem>
        <DropdownItem>Log out</DropdownItem>
      
       
      </DropdownMenu>
    </Dropdown>
  );
}

export default HeaderDropdown;