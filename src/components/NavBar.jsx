import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from "./Home";
import { Nosotros } from "./Nosotros";
import logo from "../img/logo1.png";
import './css/navbar.css';


export const NavBar = () => {
  return (

    <BrowserRouter>
   <nav className='py-4 text-center bg-dark'>
    <Link className='mx-2' to='/'>Home</Link>
    <Link className='mx-2' to='#'> <img src={logo} alt="Logo" height="70" className="d-inline-block align-top"/></Link>
    <Link className='mx-2' to='/Nosotros'>Nosotros</Link>
   </nav>
   <Routes>
     <Route path='/'element={<Home/>}/>
     <Route path='/Nosotros' element={<Nosotros/>} />
   </Routes>
   </BrowserRouter>

  );
}

