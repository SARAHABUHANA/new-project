import React from "react";
import '../Css/Navs.css';
import Logo from '../../assets/chair-realistic-illustration.png';
import Person from '../../assets/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BiLogIn } from 'react-icons/bi';
import { BiUserCircle, BiLogOut, BiCog, BiWorld } from 'react-icons/bi';
  export default function Navs() {
    
    const handleLogout = () => {
      console.log('Logout action');
      // Implement logout logic here
    };
      
 
  const { t ,i18n } = useTranslation();
  const changeLanguage=(lng) =>
  {
    i18n.changeLanguage(lng);
  };

  return (
<div className="Navbar-div  ">
    <Navbar fixed="top" expand="lg" className="Navbar  ">
    <Container className="container-Navbr">
      <Navbar.Brand className="Logo-name" href="#home">
      <img
              alt=""
              src={Logo}
              width="60"
              height="60"
              className=""
            />Furniture</Navbar.Brand>
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="Nav">
          <Nav.Link   variant="underline" defaultActiveKey="/home" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-house" viewBox="0 2 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg> {t("Home")}</Nav.Link>
          <Nav.Link href="/Reg"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chat-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
</svg> {t("services")}</Nav.Link>
          <Nav.Link href="/">{t("Categories")}</Nav.Link>
          <NavDropdown title={t("Menu")} id="basic-nav-dropdown">
         
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={t("Menu")} id="basic-nav-dropdown">
         
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/">{t("About")}</Nav.Link>
        </Nav>
    
        <Nav.Link className="Login-btn" href="/Login"> <BiLogIn /> {t("Login")}</Nav.Link>
    
       
        <label className="dropdown">
      <div className="User-button">
        <BiUserCircle size={24} /> {/* استخدم أيقونة المستخدم هنا */}
      </div>
      <input type="checkbox" className="User-input" id="userOptions" />

      <ul className="User-menu">
        <li><Nav.Link href="/Profile"><BiUserCircle size={16} />{t("Profile")}</Nav.Link></li>
        <li><Nav.Link href="/logout" onClick={handleLogout}><BiLogOut size={16} /> {t("Logout")}</Nav.Link></li>
        <li><Nav.Link href="/settings"><BiCog size={16} /> {t("Settings")}</Nav.Link></li>
        <li>{t("Language")}: <span onClick={() => changeLanguage('en')}><BiWorld size={16} />Ar</span>, <span onClick={() => changeLanguage('ar')}><BiWorld size={16} />En</span></li>
      </ul>
    </label>
      </Navbar.Collapse>
    </Container>
  
  </Navbar>
  </div>




 


   
 
  
  );}




