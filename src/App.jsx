import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './component/Signup'
import Signin from './component/Signin'
import Middle from './component/Middle'
import Errorpage from './component/Errorpage'
import Dashboard from './component/Dashboard'
import Loader from './component/Loader'
import Transfer from './component/Transfer'
import History from './component/History'



function App() {


  return (
    <>
    
     <Routes>
      <Route path='/' element={<Middle/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/loader' element={<Loader/>}/>
      <Route path='transfer' element={<Transfer/>}/>
      <Route path='/dashboard/history' element={<History/>}/>
      <Route path='/*' element={<Errorpage/>}/>
    
     </Routes>
    </>
  )
}

export default App
