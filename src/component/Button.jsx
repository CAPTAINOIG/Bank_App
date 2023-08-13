import React, { useState } from 'react'
import '../assets/Styles/Button.css'
import { Link } from 'react-router-dom'




const Button = ({currentUser, updateAmount}) => {
  // console.log(currentUser)


  const data2 =  JSON.parse(localStorage.getItem("formy"));
  // console.log(data2);
    const [pin2, setPin2] = useState("")
    const [benAcc, setBenAcc] = useState("")
    const [amount, setAmount] = useState("")
      
// console.log(currentUser.amount);
const send=()=>{
  const data2 =  JSON.parse(localStorage.getItem("formy"));
  console.log(data2)
  // console.log(currentUser.firstname);
 
  let theSender = data2?.find(user=> user.email === currentUser?.email)
  // console.log(theSender.history[0].date);
  // console.log(theSender.amount);

  if(amount <= theSender.amount){
    if(Number(pin2) === theSender.pin){
      let theReceiver = data2?.find(user=> user.accountNumber === Number(benAcc) ) 
      // console.log(theReceiver.amount);
      
      
      if(theReceiver){
       
        const positionS = data2.indexOf(theSender)
  
        const positionR = data2.indexOf(theReceiver)
        theSender.amount -= Number(amount)
        theReceiver.amount += Number(amount)

          
          theSender.history.unshift({
             date: new Date().toLocaleDateString(),
              time: new Date().toLocaleTimeString(),
            receiver: theReceiver.firstname,
            trasaction_type: 'money transfer'

          }) 
          // theReceiver.history({
          //   date: new Date().toLocaleDateString(),
          //   time: new Date().toLocaleTimeString(),
          //   sender: theSender.firstname,
          //   trasaction_type: 'money Received'

          // })

          data2[positionS] = theSender
          data2[positionR] = theReceiver

          localStorage.setItem('formy', JSON.stringify(data2))
         
          updateAmount(theSender.amount)
      }

    }else{
      console.log('invalid pin')
    }


  }else{
    console.log('invalid amount')
  }
   }


   const addMoney=()=>{
    
   }
    return (
        <>

<div id='card' className="card border-light shadow mx-auto">
  <div className="card-header">
       <h1 id='bal' className='text-primary fw-bold'>BALANCE: #{currentUser.amount} </h1> 
      <div className="card-body d-flex">
       <button id='three' type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
        Send
       </button>
       <button id='four' onClick={addMoney}>add Money</button>
       <button id='five'>Withdraw</button>
      
       <span id='history'><Link className="text-decoration-none" to={"/dashboard/history"}>Transaction History</Link></span>

    </div>
  </div>
</div>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

      <div className="modal-body">
        <input type="number" onChange={(e)=> setPin2(e.target.value)} placeholder='Enter Your Pin' className="form-control" />
        <input type="number" onChange={(e)=> setBenAcc(e.target.value)} placeholder='Enter Beneficiary Account' className="form-control" />
        <input type="number" onChange={(e)=> setAmount(e.target.value)} placeholder='Enter Your Amount' className="form-control" />
      </div>
      <div className="modal-footer">
      <button type="button" onClick={send} className="btn btn-primary"data-bs-dismiss="modal">UPDATE</button>
    </div>
    </div>
    </div>
    </div>
       
         </>
  )
}

export default Button