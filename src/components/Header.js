import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Scrollchor } from 'react-scrollchor';

export default function Header() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link><Scrollchor to="#projects" className="nav-link">Projects</Scrollchor></Nav.Link>
                        <Nav.Link><Scrollchor to="#contact" className="nav-link">Contact</Scrollchor></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
