import React from 'react'
import { Navbar } from 'react-bootstrap';
import './css/footer.css'
import facebook from "../img/facebook.png";
import youtube from "../img/youtube.png";
import linkedin from "../img/linkedin.png";

function Footer() {
  return (
    
    <>
    <div >
        <footer className="py-3 my-4 bg-dark" >
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="https://www.facebook.com/BogotaInstituteOfTechnology" className="nav-link px-2 text-muted" target={'_blank'}><img src={facebook} alt="" /></a></li>
                <li className="nav-item"><a href="https://www.youtube.com/@bit_institute" className="nav-link px-2 text-muted" target={'_blank'}><img src={youtube} alt="" /></a></li>
                <li className="nav-item"><a href="https://www.linkedin.com/school/bit---bogotá-institute-of-technology/" className="nav-link px-2 text-muted" target={'_blank'}><img src={linkedin} alt="" /></a></li>
                
    </ul>
    <p className="text-center text-warning" bg="warning-emphasis" >Bogotá, &copy; 2023 , todos los derechos reservados</p>
    <p className="text-center text-warning" >BIT - Bogotá Institute of Technology</p>
  </footer>
</div>
    
    </>
   
  )
}

export default Footer