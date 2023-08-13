import React from 'react'
import '../assets/Styles/Card.css'

const Card = () => {
  return (
    <>
    
    <div className="row">
    <div id='card1' className="col-sm-6 w-50  mb-sm-0">
      <div className="card border-light shadow">
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    
  </div>
    </>
  )
}

export default Card