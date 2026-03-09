import './App.css'
import Signup from './pages/Signup'
import { Routes,Route } from 'react-router-dom'
import Signin from './pages/Signin'
import Homepage from './pages/Homepage'


function App() {

  return (
    <div className="bg-[#efefef] min-h-screen">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
      </Routes>
      
    </div>
  )
}

export default App
