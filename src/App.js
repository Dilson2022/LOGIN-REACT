import './App.css';
import Login from './components/login/login'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './components/home/home.js'
import Landing from './components/Landing/landing.js'
import Users from './components/Users/users.js'
import Portafolio from './components/Portafolio/portafolio.js';
import { ProtectedRoute } from './components/ProtectedRoute/protectedRoute';
import { useState } from 'react'

const  App = () => {
  const [isAllowed, setIsAllowed] = useState()
  const [user,setUser] = useState()

  const functionToGetchildData = (validateRouteLogin) => {
    if (validateRouteLogin === ''){
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
    console.log('isAllowed',isAllowed)
  }


  return (
      <BrowserRouter>
        <Routes>
            <Route element={<ProtectedRoute  isAllowed={isAllowed}/>}>
              <Route path='/home' element={ <Home />}> </Route>
              <Route path='/landing' element={<Landing/>}> </Route>
            </Route>
            
            <Route path='/users' element={<Users/>}> </Route>
            <Route path='/inicioSesion' element={<Login childToParentData={functionToGetchildData}/>}></Route>
            <Route path='/portafolio' element={<Portafolio />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
