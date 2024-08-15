// Import React and necessary icons from react-icons
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#fff',
      padding: '1px 0',
      height:'35px',
      textAlign: 'center',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      zIndex: 1000 // To keep footer above other content
    }}>
      <div style={{ maxWidth: '100%', margin: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className='text-footer' style={{marginLeft:"50px",marginTop:"5px",fontSize:"12px",fontFamily:"cursive", display: 'flex',gap:'10px', justifyContent: 'space-between' }}>
        <p><FaEnvelopeOpenText /> info@techinnovate.com</p>
<p><IoLocationSharp /> Address: Tech Innovate</p>

        </div>
        
        <div className='Icon-footer' style={{display:"flex",
          justifyContent:"space-between",
          paddingRight:"20px",
          marginTop:"5px",
          color:"#45555"
          }}>
          <a className='F' href="#" style={{marginLeft:"30px",padding:"1px", fontSize:"13px" ,color:"#c22137", ":hover": {
      color: "#3d5b99"}}}><FaFacebook /></a>
          <a className='F' href="#" style={{marginLeft:"30px",padding:"1px", fontSize:"13px" ,color:"#c22137", ":hover": {
      color: "#3d5b99"}}}><FaTwitter /></a>
          <a className='F' href="#" style={{marginLeft:"30px",padding:"1px", fontSize:"13px" ,color:"#c22137", ":hover": {
      color: "#ff0000"}}}><FaInstagram /></a>
          <a className='F' href="#" style={{marginLeft:"30px",padding:"1px", fontSize:"13px" ,color:"#c22137", ":hover": {
      color: "#ff0000"}}}><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
