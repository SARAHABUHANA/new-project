import React from 'react'; 
import './Css/profile.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import ProfilePic from '../assets/Profile pic-cuate.png';
import Table from './Table';


import Fab from '@mui/material/Fab';

export default function Profilepage() {
      
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row >
        <Col sm={2} className='Tabs'>
          <Nav variant="pills" className="flex-column">
          <Nav.Item className='LogoTab '>
 
            </Nav.Item>
            <Nav.Item className='LinkTab'>
              <Nav.Link   eventKey="first">User setting</Nav.Link>
            </Nav.Item>
            <Nav.Item className='LinkTab'>
              <Nav.Link  eventKey="second">Table1</Nav.Link>
            </Nav.Item>
            <Nav.Item className='LinkTab'>
              <Nav.Link  eventKey="three">Fav</Nav.Link>
            </Nav.Item>
            <Nav.Item className='LinkTab'>
              <Nav.Link  eventKey="four"> table2</Nav.Link>
            </Nav.Item>
            <Nav.Item className='LinkTab'>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <div className="Title" ><h3>User Setting </h3></div>
              <Form className="row " >
                <div className="col-md-3 Genaral">

                  <div className="sub-Title" ><p>Genaral Information</p></div>

                  <Form.Group className=" Group" controlId="formBasicEmail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                    <Form.Control className="Input" type="text" placeholder={t("Full name")} />

                  </Form.Group>
                  <Form.Group className=" Group" controlId="formBasicEmail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                    <Form.Control className="Input" type="email" placeholder={t("Email")} />

                  </Form.Group>

                  <Form.Group className=" Group" controlId="formBasicEmail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                    <Form.Control className="Input" type="text" placeholder={t("Phone number")} />

                  </Form.Group>
                  <div className="s ub-Title" ><p>Additinal Information</p></div>

                  <Form.Group className=" Group" controlId="formBasicEmail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                    <Form.Control className="Input" type="text" placeholder={t("Address")} />

                  </Form.Group>
                  <Form.Group className="Group" controlId="formBasicPassword">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                    </svg>
                    <Form.Control className="Input" type="text" placeholder={t("Age")} />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicCheckbox">

                  </Form.Group>
                </div>

                <div className="col-md-3 Password">
                  <div className="sub-Title" ><p>Password Setting</p></div>

                  <Form.Group className="Group" controlId="formBasicPassword">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                    </svg>
                    <Form.Control className="Input" type="password" placeholder={t("current Password")} />
                  </Form.Group>
                  <Form.Group className="Group" controlId="formBasicPassword">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                    </svg>
                    <Form.Control className="Input" type="password" placeholder={t("New password")} />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicCheckbox">

                  </Form.Group>

                  <Form.Group className="Group" controlId="formBasicPassword">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7%" height="7%" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                    </svg>
                    <Form.Control   className="Input" type="password" placeholder={t("confirm New Password")} />
                  </Form.Group>


                </div>
                <div className=" col-md-6 edit">
                  <div className="sub-Title" ><p>Photo edit</p></div>

                  <div className="profile-pic">
                    <label className="-label" for="file">
                      <span className="glyphicon glyphicon-camera">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
                          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                        </svg>
                      </span>

                    </label>
                    <input id="file" type="file" onchange="loadFile(event)" />
                    <img src={ProfilePic} width="200" />
                  </div>

                </div>

 <div className="Save-change">
                <button className="save-btn" type="submit">
                  Save <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                  </svg>
                </button>
                </div>
              </Form>
            
            </Tab.Pane>
            <Tab.Pane eventKey="second">     <Table /></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

