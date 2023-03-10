import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Home } from "./Home";
import { Nosotros } from "./Nosotros";
import Inscribir from './Inscribir';
import logo from "../img/logo1.png";
import './css/navbar.css';


export const NavBar = () => {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className='container-fluid'  collapseOnSelect>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
        <Navbar.Brand className='img'>
            <img src={logo} alt="Logo" height="70"  id='logo' 
            style={{}}/>
            </Navbar.Brand>
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link to="/">
            </Link>
            <Link className="nav-link" to="/Inscribir">Inscribirse</Link>
            <Link className="nav-link" to="/Nosotros">Nosotros</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inscribir" element={<Inscribir />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}
