import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {
    const { user, logOut} = useAuth();
    
    return (
        <div className='sticky-top bg-white'>
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand>
                        <Link className='text-decoration-none' to="/home">
                           <h3>SamFitness</h3>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link>
                                <NavLink
                                    to="/home"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#0077BB"
                                    }}>
                                    Home
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/services"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#0077BB"
                                    }}>
                                    Services
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/about"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#0077BB"
                                    }}>
                                    About
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/contact"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#0077BB"
                                    }}>
                                    Contact
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex align-items-center"
                            navbarScroll
                        >
                            {user.email ? <span className="me-2">{user.displayName ? user.displayName : user.email}</span> : <Button
                                style={{ background: 'none', outline: 'none' }}
                                className="text-black border-0">
                                <Link
                                    style={{ color: '#000', textDecoration: "none" }}
                                    to='/logIn'>
                                    Log In
                                </Link>
                            </Button>}
                            {user.email ? <Button
                                onClick={logOut}
                                style={{ background: '#0077BB', outline: 'none', color: '#fff' }}
                                className="rounded-pill border-0">
                                LOGOUT
                            </Button> : <Button
                                style={{ background: '#0077BB', outline: 'none' }}
                                className="rounded-pill border-0">
                                <Link
                                    style={{ color: '#fff', textDecoration: "none" }}
                                    to='/register'>
                                    Register
                                </Link>
                            </Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBar;