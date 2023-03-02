import React from 'react'
import logo2 from '../img/logo2.png';
import './css/card.css';
function CardAbout() {
  return (
    <div className="card bg-transparent text-center bg-opacity-75">
        <img src={logo2} alt="" />
        <div className="card-body ">
            <h4 className='card-title'> card</h4>
            <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident odio atque quae excepturi nihil mollitia labore in? Consequatur, non ad totam magnam illum, cupiditate expedita tempora cumque, asperiores sint labore!</p>
            <a href="http://" target="_blank" rel="noopener noreferrer" className='btn btn-outline-dark .bg-light-subtle rounded-0'>
                Go to WebSite
            </a>
        </div>
    </div>
  )
}

export default CardAbout