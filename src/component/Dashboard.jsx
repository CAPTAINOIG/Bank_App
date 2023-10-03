import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../assets/Styles/Dashboard.css'


import Button from './Button';





// <li className="nav-item dropdown px-1">
// <Link id='menu' className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" ></Link>
// <ul className="dropdown-menu border-0 shadow-sm">

//   <li className='my-3 '><Link to="/" className="dropdown-item">
//     <span><img src={ico1} alt="" height={20} /></span> Send Money</Link></li>

//   <li className='my-3 '><Link to="/signin" className="dropdown-item">
//     <span><img src={airtime} alt="" height={20} /></span> Airtime & Data</Link></li>

//   <li className='my-3 '><Link to="/" className="dropdown-item">
//     <span><img src={bills} alt="" height={20} /></span> Bills Payment</Link></li>


//   <li className='my-3 '><Link to="/" className="dropdown-item">
//     <span><img src={lifestyle} alt="" height={20} /></span>Lifestyle</Link></li>


//   <li className='my-3'><Link to="/" className="dropdown-item">
//     <span><img src={invset} alt="" height={20} /></span>Invest</Link></li>


//   <li className='my-3'><Link to="/" className="dropdown-item">
//     <span><img src={cash} alt="" height={20} /></span> Cash</Link></li>


//   <li className='my-3 '><Link to="/" className="dropdown-item">
//     <span><img src={acc} alt="" height={20} /></span> Account</Link></li>


//   <li className='my-3 '><Link to="/" className="dropdown-item">
//     <span><img src={set} alt="" height={20} /></span> Settings & Support</Link></li>

//   <Link className='btn btn-danger w-100' to="/">LOGOUT</Link>
// </ul>
// </li>

import { GoBell} from 'react-icons/go'
import {MdDocumentScanner} from 'react-icons/md'
import {FaMicrophone} from 'react-icons/fa'
import Card from './Card';


const Dashboard = () => {
  const location = useLocation()

  const [currentUser, setCurrentUser] = useState(null)


  const updateAmount = (amt) => {
    setCurrentUser({ ...currentUser, amount: amt })
  }


  useEffect(() => {
    const userData = location?.state?.findUser
    if (userData) {
      const data2 = JSON.parse(localStorage.getItem("formy"));
      let user = data2?.find(user => user.email === userData?.email)

      setCurrentUser(user)

    }
  }, [location])


  return (
    <div className='div'>




      <div id='wellyy' className='d-flex justify-content-around'>
        <div id='welly' className='text-light'>Hello, {currentUser?.firstname}
        </div>
        <div className='text-light'>
        <GoBell size={20}/>
        <MdDocumentScanner size={20}/>
        <FaMicrophone size={20}/>
        </div>
       </div>
      <div id='two' className=''></div>



      

     

      {
        currentUser && <Button currentUser={currentUser} updateAmount={updateAmount} />
      }

      <br /><br />  <br />  <br />  <br /><br /> 
      

      <Card/>
      
    </div>
  )
}

export default Dashboard