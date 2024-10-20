import React, { useState } from 'react';
import '../app.css';
import Logo from '../assets/logo.png';
import LogoTM from '../assets/logo-TM.png';
import AboutMeTitle from '../assets/about-me-title.png';
import AboutMeImg from '../assets/about-me.png';
import {  FaCode } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';

const menuItems = [
    { icon: <IoHomeOutline className='icon'/>, label: "Home", link: "/home" },
    { icon: <CiMail className='icon' />, label: "Contact", link: "/contact" },
    { icon: <MdQuestionMark className='icon'/>, label: "Information", link: "/info" },
    { icon: <FaCode className='icon'/>, label: "App code", link: "/create-code" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutMeOpen, setAboutMeOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleAboutMe = () => setAboutMeOpen(!aboutMeOpen);

    return (
        <header className='header'>
            <nav className='nav'>
                <div className='bars--menu' onClick={toggleMenu}>
                    <span className={menuOpen ? 'line1' : ''}></span>
                    <span className={menuOpen ? 'line2' : ''}></span>
                    <span className={menuOpen ? 'line3' : ''}></span>
                </div>
                <div>
                    <img src={Logo} alt="Logo" className='logo' />
                </div>
                <div className='about-me-div' onClick={toggleAboutMe}>
                    <FaUserTag className='about-me-icon' />
                </div>
            </nav>

            <div className={`toggle-menu ${menuOpen ? 'active' : ''}`}>
                <img src={LogoTM} alt="Logo TM" className='logo-TM' />
                <div className='menu-desplegado'>
                    {menuItems.map((item, index) => (
                        <Link to={item.link} className="link-TM link-fixed"><div className="item-menu" key={index}>
                            {item.icon}
                            {item.label}
                        </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className={`about-me ${aboutMeOpen ? 'about-me-open' : ''}`}>
                <img src={AboutMeTitle} alt="" className="about-me-title" />
                <div className='about-me-div-img'>
                    <img src={AboutMeImg} alt="Profile" className='about-me-img'/>
                </div>
                <div className='about-me-div-text'>
                    <h1 className='about-me-text'>
                    👋 ¡Hola! Soy Moisés Pelalle
                    </h1>
                        <p className='text-AM'>
                        Soy un apasionado de la programación y actualmente tengo 24 años. 💻 Estoy en un curso para convertirme en Full Stack Developer, lo que me permite trabajar tanto en el front-end como en el back-end de aplicaciones web. 🌐
                        </p>
                    <h1 className='about-me-text'>
                    📚 Mis Estudios
                    </h1>
                        <p className='text-AM'>
                        Planeo continuar mis estudios con una carrera en Ingeniería en Sistemas. Me entusiasma aprender y desarrollar mis habilidades técnicas para enfrentar desafíos más complejos en el futuro. 🚀
                        </p>
                    <h1 className='about-me-text'>
                    💡 ¿Qué me gusta?
                    </h1>
                        <p className='text-AM'>
                        Me encanta la programación porque me permite resolver problemas de manera creativa. Valoro un código limpio, prolijo, entendible y eficaz. Creo firmemente que un buen código no solo funciona, sino que también es fácil de leer y mantener. ✨
                        </p>
                    <h1 className='about-me-text'>
                    📈 Objetivos
                    </h1>
                        <p className='text-AM'>
                        Mi objetivo es seguir aprendiendo y creciendo en el campo de la programación, contribuyendo a proyectos interesantes y desafiantes. Estoy emocionado por las oportunidades que vienen en mi camino. 💪.
                        </p>
                </div>
            </div>
        </header>
    );
}

export default Header;
