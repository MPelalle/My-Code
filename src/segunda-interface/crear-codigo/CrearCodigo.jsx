import React from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import Header from '../../Header/Header';
import Footer from '../../footer/Footer';


const CrearCodigo = ({ codes }) => {
    return (
        <div>
            <Header />
            <div className='body iti'>
                <div className='container-CC'>
                    <h1 className='title-CC'>Explore codes</h1>
                    <div className='details-CC'>
                        {codes.length > 0 ? (
                            codes.map((code, index) => (
                                <div key={index} className='details-div-CC cuatro'>
                                    <Link to={`/code-display/${index}`
                                        }>
                                        <h2 className='text-CC fourth'>{code.title}</h2>
                                    </Link>
                                    <div >
                                        {code.icons.includes('html') && <FaHtml5 className='icon-html' />}
                                        {code.icons.includes('css') && <FaCss3Alt className='icon-css' />}
                                        {code.icons.includes('js') && <FaJs className='icon-js' />}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No hay códigos guardados.</p>
                        )}
                    </div>
                    <div>
                        <Link to="/crafting" className='link-fix'>
                            <button className='get-started'>Write Code</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CrearCodigo;
