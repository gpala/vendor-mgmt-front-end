import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            isOpen:false,
            toggleHeader: this.toggleHeader.bind(this)
        }
    }

    toggleHeader(){
        this.setState({
            isOpen:!this.state.isOpen
        });
    }

    render(){
        return <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink
                        href="/services"><div class="text-black">Services</div></NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/login">Login</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>;
    }

}

export default Header;