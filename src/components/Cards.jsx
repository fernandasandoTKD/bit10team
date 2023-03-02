import React from 'react'
import CardAbout from './CardAbout'
import './css/card.css';

function Cards() {
  return (
    <div className="container ">
        <div className="row ">
            <div className="col-md-4">
                <CardAbout></CardAbout>
            </div>
            <div className="col-md-4">
                <CardAbout></CardAbout>
            </div>
            <div className="col-md-4">
                <CardAbout></CardAbout>
            </div>
        </div>
    </div>
  )
}

export default Cards