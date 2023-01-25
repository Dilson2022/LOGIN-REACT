import './App.css';
import Login from './components/login/login'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './components/home/home.js'
import Landing from './components/Landing/landing.js'
import Users from './components/Users/users.js'
import { ProtectedRoute } from './components/ProtectedRoute/protectedRoute';


const  App = () => {

  return (
      <BrowserRouter>
        <Routes>
            <Route element={<ProtectedRoute isAllowed={false}/>}>
              <Route path='/home' element={ <Home />}> </Route>
            </Route>
            <Route path='/landing' element={<Landing/>}> </Route>
            <Route path='/users' element={<Users/>}> </Route>
            <Route path='/inicioSesion' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
