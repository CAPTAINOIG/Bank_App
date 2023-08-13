import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../assets/Styles/Dashboard.css'
import ico1 from '../assets/image/ico1.png'
import airtime from '../assets/image/airtime.png'
import bills from '../assets/image/bills.png'
import lifestyle from '../assets/image/lifestyle.jpg'
import invset from '../assets/image/invset.png'
import cash from '../assets/image/cash.jpg'
import acc from '../assets/image/acc.png'
import set from '../assets/image/set.png'
import Foote from './Foote';
import Button from './Button';
import Card from './Card';



const Dashboard = () => {
  const location = useLocation()

  const [currentUser, setCurrentUser] = useState(null)
  

  const updateAmount = (amt)=>{
    setCurrentUser({...currentUser, amount:amt})
  }

 
useEffect(()=>{
      const userData = location?.state?.findUser
    if(userData){
      const data2 =  JSON.parse(localStorage.getItem("formy"));      
      let user = data2?.find(user=> user.email === userData?.email)

      setCurrentUser(user)
      
    }
}, [location])

  
  return (
    <>
   
   
    <div id='welly' className='bg-primary text-light'>WELCOME, {currentUser?.firstname}</div>
    
    <div id='two' className='bg-primary'></div>
    <li className="nav-item dropdown px-1">
          <Link id='menu' className="nav-link dropdown-toggle bg-primary fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >MENU</Link>
          <ul className="dropdown-menu border-0 shadow-sm">
        
              <li className='my-3 fs-5'><Link to="/" className="dropdown-item">
              <span><img src={ico1} alt="" height={20} /></span> Send Money</Link></li>

              <li className='my-3 fs-5'><Link to="/signin" className="dropdown-item"> 
              <span><img src={airtime} alt="" height={20} /></span> Airtime & Data</Link></li>

              <li className='my-3 fs-5'><Link to="/" className="dropdown-item">
               <span><img src={bills} alt="" height={20} /></span> Bills Payment</Link></li>

             
               <li className='my-3 fs-5'><Link to="/" className="dropdown-item">
               <span><img src={lifestyle} alt="" height={20} /></span>Lifestyle</Link></li>

               
              <li className='my-3 fs-5'><Link to="/" className="dropdown-item">
              <span><img src={invset} alt="" height={20} /></span>Invest</Link></li>

              
              <li className='my-3 fs-5'><Link to="/" className="dropdown-item">
               <span><img src={cash} alt="" height={20} /></span> Cash</Link></li>

               
              <li className='my-3 fs-5'><Link to="/" className="dropdown-item">
              <span><img src={acc} alt="" height={20} /></span> Account</Link></li>

              
              <li className='my-3 fs-5'><Link to="/" className="dropdown-item">
               <span><img src={set} alt="" height={20} /></span> Settings & Support</Link></li>
               
              <Link className='btn btn-danger w-100' to="/">LOGOUT</Link>
          </ul>
      </li>
      
        {
          currentUser &&  <Button currentUser={currentUser} updateAmount={updateAmount}/> 
        }
        
          <br /><br />  <br />  <br />  <br /><br />  <br /> <br />
          <Card/><br />   
          <Card/>
       
      <Foote/>
    </>
  )
}

export default Dashboard