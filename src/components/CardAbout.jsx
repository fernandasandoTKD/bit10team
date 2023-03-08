import React from 'react'
import './css/card.css';




const CardAbout = (props) => {
  return (

  <div className="col-md-6 col-sm-6 col-lg-3 col-xs-12 ">
         <div class="box">
          < div class="box-top">
             <img
              src={props.img}
              className="rounded-circle "
              alt="profile-image"
            />
      <div class="title-flex">
        <h3 className="box-title">{props.name}</h3>
        <p className="user-follow-info">{props.taks}</p>
      </div>
      <p class="description">{props.role}</p>
    </div>
    <a href={props.url} class="button">Saber más</a>
  </div>

  </div>

  
  );
};

export default CardAbout