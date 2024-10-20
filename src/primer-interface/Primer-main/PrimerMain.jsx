import React, { useState } from 'react';
import '../../app.css';
import { FaCode, FaCodeBranch } from "react-icons/fa6";
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const PrimerMain = () => {
    const [text, setText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='body'>
            {isModalOpen && (
                <div className='modal'>
                    <dialog open className="sape" aria-labelledby="modal-title" aria-modal="true">
                        <h1 id='modal-title' className='modal-title'>Ingrese nombre de usuario</h1>
                        <div className="text-input">
                            <input
                                type="text"
                                value={text}
                                onChange={handleChange}
                                maxLength={12}
                                className='modal-input'
                                placeholder="Escribe tu nombre..."
                            />
                        </div>
                        <button className="boton-dialog" onClick={closeModal}>¡Let's go!</button>
                    </dialog>
                </div>
            )}
            <div className='box-father'>
                <div className='container'>
                    <h1 className='title'><IoIosArrowBack />¡WELCOME {text || ""}! <IoIosArrowForward /></h1>
                </div>
                <div className='subtitle-box shadow-inset-center'>
                    <h2 className='subtitle'>Save your code everywhere <FaCodeBranch className='subtitle icon-subtitle' /></h2>
                </div>
                <div className='btn-box'>
                    <Link to="/app" className="get-started link-to-app">Get Started <HiOutlineArrowRightStartOnRectangle className='icon-start' /></Link>
                    
                </div>
            </div>
        </div>
    );
}

export default PrimerMain;
