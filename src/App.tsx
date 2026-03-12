import './App.css'
import Signup from './pages/Signup'
import { Routes,Route } from 'react-router-dom'
import Signin from './pages/Signin'
import Homepage from './pages/Homepage'
import Home from './pages/Home'
import { useAuthStore } from './store/AuthStore'
import ProtectedRoute from './api/ProtectedRoute'


function App() {
const token = useAuthStore((state) => state.token);
  return (
    <div className="bg-[#efefef] min-h-screen">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </div>
  )
}

export default App
