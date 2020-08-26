import React, {useState} from 'react';
import {
  Collapse, Navbar, Nav, NavbarBrand, NavbarToggler, NavLink, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem 
} from 'reactstrap';

const Header = () => {
    // Declare a new state variable, which we'll call "isOpen"
    const [isOpen, setisOpen] = useState(false);

    return (
        <header>
            <Navbar fixed='top' color='light' light expand='md'>
                <NavbarBrand href='/'>React Hooks</NavbarBrand>
                <NavbarToggler onClick={() => setisOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar >
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href='/home'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/login'>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/register'>Register</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret>
                                options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    option1
                                </DropdownItem>
                                <DropdownItem>
                                    option2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}



// class Header extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             isOpen: false
//         }
//     }

//     toggle = () => {
//         console.log("Before on click ",this.state);
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//         console.log("After on click ",this.state);
//     }

//     render(){
//         return (
//             <header>
//                 <Navbar fixed='top' color='light' light expand='md'>
//                     <NavbarBrand href='/'>ReactStrap Example</NavbarBrand>
//                     <NavbarToggler onClick={() => this.toggle()} />
//                     <Collapse isOpen={this.state.isOpen} navbar >
//                         <Nav className='ml-auto' navbar>
//                             <NavItem>
//                                 <NavLink href='/home'>Home</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href='/login'>Login</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href='/register'>Register</NavLink>
//                             </NavItem>
//                             <UncontrolledDropdown nav inNavbar >
//                                 <DropdownToggle nav caret>
//                                     options
//                                 </DropdownToggle>
//                                 <DropdownMenu right>
//                                     <DropdownItem>
//                                         option1
//                                     </DropdownItem>
//                                     <DropdownItem>
//                                         option2
//                                     </DropdownItem>
//                                     <DropdownItem divider />
//                                     <DropdownItem>
//                                         Reset
//                                     </DropdownItem>
//                                 </DropdownMenu>
//                             </UncontrolledDropdown>
//                         </Nav>
//                     </Collapse>
//                 </Navbar>
//             </header>
//         )
//     }
// }

export default Header;