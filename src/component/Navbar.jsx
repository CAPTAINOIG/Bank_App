import React from 'react'
import { Link } from 'react-router-dom'
import oig1 from '../assets/image/oig1.png'
import '../assets/Styles/Navbar.css'


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
    <img id='img' src={oig1} alt="" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link active text-light fw-bold fs-3" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-light fw-bold fs-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li className="dropdown-divider"></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown px-1">
          <Link className="nav-link dropdown-toggle text-light fw-bold fs-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Company</Link>
          <ul className="dropdown-menu border-0 shadow-sm">
              <li className='py-1'><Link to="/signup" className="dropdown-item">Sign Up</Link></li>
              <li className='py-1'><Link to="/signin" className="dropdown-item">Sign in</Link></li>
              <li className='py-1'><Link to="/*" className="dropdown-item">Join our team</Link></li>
              <li className='py-1'><Link to="/*" className="dropdown-item">About us</Link></li>
          </ul>
      </li>
     
      
    
        </ul>
        <form className="d-flex px-5" role="search">
        <Link id='signup' className='text-light  fs-3  fw-bold text-decoration-none w-100' to="/signup"> <button  className='btn btn-lg btn-danger'>SIGN UP</button></Link>
        <div id='signin'><Link  className='ms-2 text-light fs-3 fw-bold text-decoration-none' to="/signin"><button className='btn btn-lg btn-danger'>SIGN IN</button> </Link></div>

        </form>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar