import React from 'react'
import './css/card.css';
import { AiFillGithub } from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsFillBriefcaseFill} from 'react-icons/bs';




const CardAbout = (props) => {
  return (

    <>

     <div class="col-md-6  pb-3  col-sm-6 col-lg-3 col-xs-12" id='contenedor'>
     
           <div class="image-area">
           
		<div class="img-wrapper">
			<img src={props.img}alt="Atul Prajapati"/>
			<h2>{props.name}</h2>
			<ul>
				<li><a href={props.git} target="_blank" ><i><AiFillGithub size={20}/></i></a></li>
				<li><a href={props.linkedin} target="_blank" ><AiFillLinkedin size={20}/></a></li>
				<li><a href={props.portafolio} target="_blank" ><BsFillBriefcaseFill size={20}/></a></li>
				
			</ul>
      
		</div>
	</div>
  
            
</div></>
       

  
  );
};

export default CardAbout