import React, { Fragment } from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import loginImg from '../assets/Login-pana.png';
import { useTranslation } from 'react-i18next';
import Navs from "./Navs/Navs";
import "./Css/style.css";

import { Outlet, Link } from "react-router-dom";


export default function Login()
{  const { t } = useTranslation();
      return(
        <div>
       <Navs/>
            <div className="Reg">
            <Form className="form" >
            
            <div className="Title">
            <div className="Logo-form" > <img
              alt=""
              src={loginImg}
              width="180"
              height="180"
              className="d-inline-block align-top"
            />{' '}
            </div>
                  <h1>{t("Login")}</h1>
            </div>
           
            
            <Form.Group className=" Group" controlId="formBasicEmail">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
        <Form.Control className="Input" type="email"  placeholder="Enter email" />
        
      </Form.Group>


      <Form.Group className="Group" controlId="formBasicPassword">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
</svg>

        <Form.Control className="Input" type="password"     placeholder="Password" />
      </Form.Group>
      <Form.Group className="" controlId="formBasicCheckbox">
  
      </Form.Group>
      <div className="Links">
      <a  href="/ForgetPassword">Forget password?</a>
      <a href="/Reg">Don't have an account?
      </a>
      </div>
      <Button className="Sub-btn"  type="submit">
submit
      </Button>
     <div className="Link-Home">
      <a  href="/">Home Page</a>
      </div>
    </Form>
  
            </div>
            </div>
          );
}