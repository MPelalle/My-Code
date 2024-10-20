import React from 'react'
import { FaCode, FaMagnifyingGlass } from "react-icons/fa6";
import { RiCommunityFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const SegundoMain = () => {
    return (
    <div className='body'>
        <h1>Inicio sesion: </h1>
        <div className='container-2da-interface'>
            
            <div className="box">
                <Link to="/create-code"><button className="get-started">Explorar codigos <FaMagnifyingGlass /></button></Link>
                
            </div>
            <div className="box">
                <Link to="https://www.youtube.com/watch?v=mCdA4bJAGGk">
                <button className="get-started">Conocé a la comunidad <RiCommunityFill /></button>
                </Link>
                
            </div>
            <div className="box">
                <Link to="/contact">
                <button className="get-started">Contacto <FaCode /></button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default SegundoMain