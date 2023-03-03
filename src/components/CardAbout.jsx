import React from 'react'
import './css/card.css';


const CardAbout = (props) => {
  return (
    <div className="col-lg-4">
      <div className="text-center ">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto ">
            <img
              src={props.img}
              className="rounded-circle "
              alt="profile-image"
            />
          </div>
          <div className="card-body">
            <p className="text">{props.role}</p>
            <a href={props.url} target="_blank" rel="noopener noreferrer" className='btn btn-outline-dark .bg-light-subtle rounded-0'>
                Saber más 
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAbout