import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

import '../../app.css'
import Footer from '../../footer/Footer';
import Header from '../Header';
import axios from "axios";
import InfoJson from './InfoJson';

const Contact = () => {
  return (
    <div>
      <Header/>
    <div className='body'>
        <div className='container'>
            <h1 className='title'>Contacto</h1>
            <div className='contact-div shadow-inset-lr'>
                <FaInstagram className=' ig'/>
                <SiGmail className=' gmail' />
                <FaLinkedin className=' ln' />
                <FaGithub className=' gh' />
                <InfoJson/>
            </div>
        </div>
        
    </div>
    <Footer/>
    </div>
  )
}

export default Contact