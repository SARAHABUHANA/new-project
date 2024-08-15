import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ForImg from './../assets/undraw_Forgot_password_re_hxwm.png';
import Navs from './Navs/Navs';
import "./Css/style.css";
export default function ForgetPassword(){
      return(
            <div className="Reg">
            <Form className="form">
            <div className="Logo-form" > <img
              alt=""
              src={ForImg}
              width="250"
              height="200"
              className="d-inline-block align-top"
            />{' '}
            </div>
            <div className="Title">
                  <h4>Forget your Password?</h4>
                  <p>What would you like your new password?</p>
            </div>
           
            
            <Form.Group className=" Group" controlId="formBasicEmail">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
        <Form.Control className="Input" type="email" placeholder="Enter email" />
        
      </Form.Group>
<div className="Forget-btn">
      <Button className="for-btn" variant="secondary" type="reset">
cancel
      </Button>
      <Button className="for-btn" variant="info" type="submit">
submit
      </Button>
      </div>
     <div className="Link-Home">
      <a  href="/">Home Page</a>
      </div>
    </Form>
   
            </div>
 
      );
      
}