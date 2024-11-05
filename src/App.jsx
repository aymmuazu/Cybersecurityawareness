import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './assets/css/styles.css'
import React from 'react'
import Home from './Pages/Home';
import Register from './Pages/Register';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

const app_name = process.env.APP_NAME;

const App = () => {
  return (
    <>
      <Router>
        <NavBar app_name={app_name} />
        <Routes>
          <Route path='/' element={<Home app_name={app_name}/>}/>
          <Route path='/register' element={<Register app_name={app_name} />} />
          <Route path='/login' element={<Login app_name={app_name} />} />

          <Route path='/dashboard' element={<Dashboard app_name={app_name} />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;