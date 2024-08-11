import React, { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import logo from '../logo.svg';
import Navs from './Navs/Navs';
import "./Css/style.css";
import './i18n';
import './Navs/Navs';
import { useTranslation } from 'react-i18next';
export default function Reg(){
  const { t ,i18n } = useTranslation();
  

      return (
        <Fragment>
         <Navs/>
            <div className="Reg">
            <Form className="form">
           <div className="Logo-form" > <img
              alt=""
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            </div>
            <div className="Title">
                  <h1>Register</h1>
            </div>
            <Form.Group className=" Group" controlId="formBasicEmail">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
      <Form.Control className="Input" type="text" placeholder="First Name" />
  
    </Form.Group>
    <Form.Group className=" Group" controlId="formBasicEmail">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
<Form.Control className="Input" type="text" placeholder="Phone-numbers" />
     
      </Form.Group>
     
   
            <Form.Group className=" Group" controlId="formBasicEmail">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
        <Form.Control className="Input" type="email" placeholder={t("Menu")} />
        
      </Form.Group>


      <Form.Group className="Group" controlId="formBasicPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
</svg>
        <Form.Control className="Input" type="password" placeholder={t("Home")} />
      </Form.Group>
      <Form.Group className="" controlId="formBasicCheckbox">
  
      </Form.Group>
      <div className="Link">
     
      <a href="/Login"> {t("Home")} </a>
      </div>
      <Button className="Sub-btn" variant="primary" type="submit">
    register
      </Button>
      <div className="Link-Home">
      <a  href="/">Home Page</a>
      </div>
    </Form>
   
            </div>
            </Fragment>
          );
}