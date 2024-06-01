import React from 'react';
import { PiPopcornDuotone } from "react-icons/pi";
import './Styles/Header.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    const Logout = () => {

    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand > <Link to="/" className="nav-link"><PiPopcornDuotone className='icon'/>MOVIZ </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" id='nav-links'>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item className="nav-link" to="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" to="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" to="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="nav-link" to="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                        <Link className="nav-link" to="/manage-movies">Manage Movies</Link>
                    </Nav>
                    <Nav>
                        <Link eventKey={2} className="nav-link" to="#memes" onClick={Logout}>
                            Logout
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

// import React from 'react';
// import { PiPopcornDuotone } from "react-icons/pi";
// import './Styles/Header.css';
// import { Link } from 'react-router-dom';

// function Header() {
//     return (
//         <header>
//             <div className="logo">
//                 <PiPopcornDuotone className='icon' />
//                 <h1 className='brandName'>Moviz</h1>
//             </div>
//             <nav>
//                 <ul >
//                     <li><Link className='Link' to={"/"}>Home</Link></li>
//                     <li><Link className='Link' to={"/about"}>About</Link></li>
//                     <li><Link className='Link' to={"/contact"}>Contacts</Link></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;
