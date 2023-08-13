import React from 'react'
import error from '../assets/image/error.svg'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
    <Link className='btn btn-dark btn-lg' to="/">Go Back</Link>
    
    <img id='img3' src={error} alt="" />
  
    </>
  )
}

export default Errorpage