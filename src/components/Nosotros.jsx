import React from 'react'
import './css/nosotros.css';
import logo1 from '../img/logo.jpg';
import logo2 from '../img/logo2.png';
import Cards from './Cards';



export const Nosotros = () => {
  return (
    <>
    <div className="nosotros-container">
      <div className="logos-container">
        <img src={logo1} alt="Logo 1" />
      </div>
      <div className="text-container">
        <h1 >Equipo de trabajo</h1>
        <h3>DREAM DEVELOPERS</h3>
      </div>
      <div className="logos-container">
      <img src={logo2} alt="Logo 2" />
      </div>
      <Cards className="container text-center"></Cards>
    </div>

      

      </>
    
  )
}
