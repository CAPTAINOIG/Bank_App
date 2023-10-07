import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../assets/Styles/Dashboard.css'
import Button from './Button';
import { GoBell} from 'react-icons/go'
import {MdDocumentScanner} from 'react-icons/md'
import {AiOutlineBank} from 'react-icons/ai'
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
        <AiOutlineBank size={20}/>
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