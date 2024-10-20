import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Header from '../../../../Header/Header';
import Footer from '../../../../footer/Footer';
import '../../../../app.css'
import { FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';

const CodeDisplay = ({ codes }) => {
    const location = useLocation();
    const { codeId } = useParams();
    const code = codes[codeId]; 

    
    const { title = 'Sin Título', description = 'Sin Descripción', icons = [], content = { html: 'Sin contenido', css: 'Sin contenido', js: 'Sin contenido' } } = code || {};

    const [modalOpen, setModalOpen] = useState(false);
    const isModalOpen = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <div>
            <Header />
            <div className='body piton'>
                <div className='container-CC toko'>
                    <h1>{title}</h1> 
                    <div className='details-CC modal-details'>
                        <div className='alfin'>
                        {content.html && ( 
                            <div>
                                <FaHtml5 className='icon-html' />
                                <textarea
                                    placeholder='Escribe algo sobre HTML5...' 
                                    className='area-title'
                                    value={content.html} 
                                    readOnly 
                                />
                            </div>
                        )}
                        {content.css && ( 
                            <div>
                                <FaCss3Alt className='icon-css' />
                                <textarea 
                                    placeholder='Escribe algo sobre CSS3...' 
                                    className='area-title'
                                    value={content.css} 
                                    readOnly 
                                />
                            </div>
                        )}
                        {content.js && ( 
                            <div>
                                <FaJs className='icon-js' />
                                <textarea 
                                    placeholder='Escribe algo sobre JavaScript...' 
                                    className='area-title'
                                    value={content.js} 
                                    readOnly 
                                />
                            </div>
                        )}
                        </div>
                    </div>
                    <div className='diti'>
                        <Link to="/create-code">
                            <button className='get-started gil'>Volver</button>
                        </Link>
                        <button className='get-started gil' onClick={isModalOpen}>Info</button>
                    </div>
                </div>
                <div className={`general-modal ${modalOpen ? 'modal-open' : ''}`}>
                    <div className='modalito'>
                        <h1 className='modal-title-2'>{title}</h1>
                        <pre>{description || 'Sin código'}</pre> 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CodeDisplay;

