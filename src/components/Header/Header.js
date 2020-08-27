import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faPhoneAlt,faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                <div className="container">
                        <Navbar.Brand href="#home">OnlineSchool</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <h6> <span><FontAwesomeIcon icon={faPhoneAlt} /></span> +1-545-209131</h6>
                        <h6> <span><FontAwesomeIcon icon={faEnvelope} /></span> www.onlineschool@gmail.com</h6>
                    </Nav>
                    <Nav>
                        <button className="btn btn-danger">Sign In</button>
                        <button className="btn sign-up">Sign Up</button>
                    </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;