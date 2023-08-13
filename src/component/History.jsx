import React, { useEffect} from 'react'


const History = ({currentUser}) => {
   
    const data2 =  JSON.parse(localStorage.getItem("formy"));
    console.log(data2);
    // console.log(data2[history].receiver);
    // console.log(data2[0].history[0].receiver);
    // console.log(currentUser);
  

    // console.log(theSender.amount);
    // for (let index = 0; index < data2.length; index++) {
    //   console.log(data2[0].AdditionalInformation.balance

    //     );
    //     // console.log(data2[3].history[0]

    //       // );

      
    // }
    




    
        
    
  return (
  
    <>
    {
      data2.map((item, index)=>(
        
        <h1>{item.date}</h1>
        
        

        ))
      }
    
    
    
    </>
  )
}

export default History