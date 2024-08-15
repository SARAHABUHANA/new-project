import React,{ useState } from "react";
import './Css/profile.css';
import Form from 'react-bootstrap/Form';
import ProfilePic from '../assets/Profile pic-cuate.png';
<<<<<<< HEAD
import Logo from '../assets/chair-realistic-illustration.png';
import Navbar from 'react-bootstrap/Navbar';
import Fab from '@mui/material/Fab';

import { Button }from 'primereact/button';
import Table from './Table';
=======

>>>>>>> 15a8092ec7aaa3c189bd274c09a9e94081d27183
import { useTranslation } from 'react-i18next';

import Navs from './Navs/Navs';
export default function Profile(){
  
      const { t ,i18n } = useTranslation();
      const changeLanguage=(lng) =>
      {
        i18n.changeLanguage(lng);
      };
    // حالة لتحديد العنصر المعروض حاليًا
  const [activeId, setActiveId] = useState(null);

  // دالة لتحديث العنصر المعروض
  const toggleContent = (id) => {
    setActiveId(id);
  };

      
     return(
      <div>
<<<<<<< HEAD

      <div className="Container Profile">
        <div className="row opacityProfile">
            <div className="col-md-2 sidebar "> 
           <Navbar.Brand className="Logo-sidebar" href="/">
      <img
              alt=""
              src={Logo}
              width="60"
              height="60"
              className=""
            />Furniture</Navbar.Brand>
          
            <div className="Sidebar-btn">
            <button   className="Link-sid" onClick={() => toggleContent(1)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
</svg> <br></br>User Info</button> 
=======
<Navs/>
      <div className=" Profile">
        <div className="row opacityProfile">
            <div className="col-md-1  "> 
           <div className="sidebar"><button   className="Link-sid" onClick={() => toggleContent(1)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
</svg> <br></br> user Info</button> 
>>>>>>> 15a8092ec7aaa3c189bd274c09a9e94081d27183
 <button   className="Link-sid" onClick={() => toggleContent(2)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg><br></br> Favoirts</button>
<button   className="Link-sid" onClick={() => toggleContent(3)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg><br></br>Home</button>
<button   className="Link-sid" onClick={() => toggleContent(4)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg><br></br>Logout</button>
<<<<<<< HEAD
<Button className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem"></img>
</Button>
</div> 

<div className="Link-sidebar">
      <a  href="/"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg> Home Page</a>
      </div>


      <div className="Link-sidebar">
      <a  href="/"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"/>
  <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg> Logout</a>
      </div>
</div>
            
            <div className="col-md-10 ProfileData">



            {activeId === 1 && <div  className="User-Info" style={{ display: 'block' }}>     
            <div className="Title" ><h3>User Setting </h3></div>
            <Form className="row " >
              <div className="col-md-3 Genaral">

            <div className="sub-Title" ><p>Genaral Information</p></div>

              <Form.Group className=" Group" controlId="formBasicEmail">
=======

</div> 
            </div>
            <div className="col-md-11 ProfileData">



            {activeId === 1 && <div  className="form" style={{ display: 'block' }}>     
   
            <Form  >
            <div className=" ImgForm">
              <div className="profile-pic">
            <label className="-label" for="file">
               <span className="glyphicon glyphicon-camera">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
               </span>
  
             </label>
             <input id="file" type="file" onchange="loadFile(event)"/>
              <img src={ProfilePic}  width="200" />
               </div>
   </div>
           
            <div className="Title">
           
                  <h1>{t("User Name")}</h1>
            </div>
            <Form.Group className=" Group" controlId="formBasicEmail">
>>>>>>> 15a8092ec7aaa3c189bd274c09a9e94081d27183
            <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
      <Form.Control className="Input" type="text" placeholder={t("Full name")} />
  
    </Form.Group>
    <Form.Group className=" Group" controlId="formBasicEmail">
    <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
<<<<<<< HEAD
<Form.Control className="Input" type="email" placeholder={t("Email")} />
     
      </Form.Group>

      <Form.Group className=" Group" controlId="formBasicEmail">
    <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
<Form.Control className="Input" type="text" placeholder={t("Phone number")} />
     
      </Form.Group>
      <div className="sub-Title" ><p>Additinal Information</p></div>
    
      <Form.Group className=" Group" controlId="formBasicEmail">
            <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
        <Form.Control className="Input" type="text" placeholder={t("Address")} />
=======
<Form.Control className="Input" type="text" placeholder={t("Phone number")} />
     
      </Form.Group>
     
   
            <Form.Group className=" Group" controlId="formBasicEmail">
            <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
        <Form.Control className="Input" type="email" placeholder={t("Email")} />
>>>>>>> 15a8092ec7aaa3c189bd274c09a9e94081d27183
        
      </Form.Group>
      <Form.Group className="Group" controlId="formBasicPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
</svg>
<<<<<<< HEAD
        <Form.Control className="Input" type="text" placeholder={t("Age")} />
      </Form.Group>
      <Form.Group className="" controlId="formBasicCheckbox">
  
      </Form.Group>
              </div>
           
              <div className="col-md-3 Password">
              <div className="sub-Title" ><p>Password Setting</p></div>

              <Form.Group className="Group" controlId="formBasicPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
</svg>
        <Form.Control className="Input" type="password" placeholder={t("current Password")} />
      </Form.Group>


      <Form.Group className="Group" controlId="formBasicPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
</svg>
        <Form.Control className="Input" type="password" placeholder={t("New password")} />
=======
        <Form.Control className="Input" type="password" placeholder={t("Password")} />
>>>>>>> 15a8092ec7aaa3c189bd274c09a9e94081d27183
      </Form.Group>
      <Form.Group className="" controlId="formBasicCheckbox">
  
      </Form.Group>
<<<<<<< HEAD

      <Form.Group className="Group" controlId="formBasicPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
</svg>
        <Form.Control className="Input" type="password" placeholder={t("confirm New Password")} />
      </Form.Group>
    
   
              </div>
            <div className=" col-md-6 edit">
            <div className="sub-Title" ><p>Photo edit</p></div>

              <div className="profile-pic">
            <label className="-label" for="file">
               <span className="glyphicon glyphicon-camera">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
               </span>
  
             </label>
             <input id="file" type="file" onchange="loadFile(event)"/>
              <img src={ProfilePic}  width="200" />
               </div>
        
   </div>
           
         
     
   
          
   
  
      
    </Form>
    <div className="Save-change">
      <button className="save-btn"  type="submit">  
=======
   
      <button className="Sub-btn"  type="submit">  
>>>>>>> 15a8092ec7aaa3c189bd274c09a9e94081d27183
Save <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
      </button>
<<<<<<< HEAD
      </div>    
=======
     <div className="Link-Home">
      <a  href="/"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"/>
  <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg> Home Page</a>
      </div>
      
    </Form>
    
>>>>>>> 15a8092ec7aaa3c189bd274c09a9e94081d27183

    </div>}

   
<<<<<<< HEAD
      {activeId === 2 && <div style={{ display: 'block' }}> 
       {/*--------------------Table div---------------------------*/}      
        
        
        
        <Table/>
        
        
        
        
        </div>}


       {/*--------------------Table div---------------------------*/}      
=======
      {activeId === 2 && <div style={{ display: 'block' }}> Cooming Soon ...</div>}
>>>>>>> 15a8092ec7aaa3c189bd274c09a9e94081d27183
      {activeId === 3 && <div style={{ display: 'block' }}> Cooming Soon ...</div>}
      {activeId === 4 && <div style={{ display: 'block' }}> Cooming Soon ...</div>}




    
            </div>
            </div>
            </div>
<<<<<<< HEAD
            </div>
          
=======
          
            </div>
>>>>>>> 15a8092ec7aaa3c189bd274c09a9e94081d27183
     );




     
}