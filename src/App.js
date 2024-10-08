

import { Fragment, useEffect,useState } from 'react';
import axios from 'axios';
import { NextUIProvider } from "@nextui-org/react";
import './App.css';
import Navs from './components/Navs/Navs';
import Login from './components/Login';
import Reg from './components/Reg';
import Profilepage from './components/Profilepage';
import { useTranslation } from 'react-i18next';
import './components/Translation/i18n';
import ForgetPassword from './components/ForgetPassword';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer  from './components/Footer';
import Home from './components/Home/Home';


function App() {
  const { t ,i18n } = useTranslation();
  const [viewMode, setViewMode] = useState('default');
 
  return (
    <Fragment>



    
    <BrowserRouter>
      <Routes>
    
         
      <Route path="/" element={<Home/>} />

          <Route path="/Reg" element={<Reg/>} />
          <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Profilepage" element={<Profilepage/>} />
          

      
      
   
      </Routes>
    </BrowserRouter>
    
    <Footer/>

   
    </Fragment>

  );
}

export default App;

