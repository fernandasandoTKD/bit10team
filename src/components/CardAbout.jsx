import React from 'react'
import './css/card.css';




const CardAbout = (props) => {
  return (

  <div className="col-md-6  pb-3  col-sm-6 col-lg-3 col-xs-12" >
    <div class="person  ">
      <div class="contenedor  ">
        <div class="container-inner ">
          <img
            class="circle"
            src={props.img}/>
        </div>
      </div>
      <div class="divider"></div>
      <div class="name">{props.name}</div>
      <div class="title">{props.taks}</div> <br />
      <button class="close"><a href={props.url}target="_blank" rel="noopener noreferrer">Saber más</a></button>
    </div>

  </div>

  
  );
};

export default CardAbout