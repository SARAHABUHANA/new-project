
<<<<<<< HEAD
import { Fragment, useEffect,useState } from 'react'
import axios from 'axios';
import { NextUIProvider } from "@nextui-org/react";

=======
import { Fragment, useEffect,useState } from 'react';
<<<<<<< HEAD
import axios from 'axios';
import { NextUIProvider } from "@nextui-org/react";
=======
>>>>>>> 48440cc (edit profile page)
>>>>>>> 15a8092ec7aaa3c189bd274c09a9e94081d27183
import './App.css';
import Navs from './components/Navs/Navs';
import Login from './components/Login';
import Reg from './components/Reg';
import Profile from './components/Profile';
import { useTranslation } from 'react-i18next';
import './components/Translation/i18n';
import ForgetPassword from './components/ForgetPassword';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer  from './components/Footer';
import Home from './components/Home/Home';
function App() {
  const { t ,i18n } = useTranslation();
 
  return (
    <Fragment>



    
    <BrowserRouter>
      <Routes>
    
         
      <Route path="/" element={<Home/>} />

          <Route path="/Reg" element={<Reg/>} />
          <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Profile" element={<Profile/>} />
      
   
      </Routes>
    </BrowserRouter>
    
    <Footer/>

   
    </Fragment>

  );
}

export default App;

