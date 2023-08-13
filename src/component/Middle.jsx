import React from 'react'
import '../assets/Styles/Middle.css'
import Mobile from '../assets/image/Mobile.gif'
import Foote from './Foote'
import Navbar from './Navbar'

const Middle = () => {
  return (
    <>
    <Navbar/>
            <div className="container">
                <div  className="row">
                    <div id='rowe' className="col-lg-6 fs-3 text-dark fw-bold">
                    <h1 className='premiu'>WELCOME TO</h1>
                            <h1 className='premium'> PREMIUM BANK</h1>
                            <h1 className='premiumy'>APP</h1>
                        </div>
                    <div id='row2' className="col-lg-6">
                    <img className='img-fluid' src={Mobile} alt="" />
                    </div>

                </div>
            </div>
           
            <Foote/>
    </>
  )
}

export default Middle