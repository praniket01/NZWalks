import './App.css'
import Signup from './pages/Signup'
import { Routes,Route } from 'react-router-dom'
import Signin from './pages/Signin'
import Homepage from './pages/Homepage'
import Home from './pages/Home'
import { useAuthStore } from './store/AuthStore'
import ProtectedRoute from './api/ProtectedRoute'
import Discovery from './pages/Discovery'


function App() {
const token = useAuthStore((state) => state.token);
  return (
    <div className="bg-[#efefef] min-h-screen">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
         <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/discovery" element={<Discovery />} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
