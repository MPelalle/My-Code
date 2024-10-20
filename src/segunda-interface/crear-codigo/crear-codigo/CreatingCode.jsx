import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import Header from '../../../Header/Header';
import Footer from '../../../footer/Footer';
import { Link } from 'react-router-dom';
import '../../../app.css'

const CreatingCode = ({ onSave }) => {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [selectedIconsTemp, setSelectedIconsTemp] = useState([]);
    const [selectedIcons, setSelectedIcons] = useState([]);
    const [tempText, setTempText] = useState('');
    const [tempText2, setTempText2] = useState('');
    const [tempTextHtml,  setTempTextHtml] = useState('');
    const [tempTextCss, setTempTextCss] = useState('');
    const [tempTextJs, setTempTextJs] = useState('');

    const handleChange = (event) => {
        setTempText(event.target.value);
    };

    const handleChange2 = (event) => {
        setTempText2(event.target.value);
    }; 

    const handleChangeHtml = (event) => {
        setTempTextHtml(event.target.value);
    };

    const handleChangeCss = (event) => {
        setTempTextCss(event.target.value);
    };

    const handleChangeJs = (event) => { 
        setTempTextJs(event.target.value);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCheckboxChange = (event, icon) => {
        if (event.target.checked) {
            setSelectedIconsTemp([...selectedIconsTemp, icon]);
        } else {
            setSelectedIconsTemp(selectedIconsTemp.filter((item) => item !== icon));
        }
    };

    const handleApplyChanges = () => {
        setSelectedIcons(selectedIconsTemp);
        setText(tempText);
        setText2(tempText2);
        closeModal();
        setTempTextHtml(tempTextHtml);
        setTempTextCss(tempTextCss);
        setTempTextJs(tempTextJs);
    };

    const handleSave = () => {
        const newCodeData = { title: text, description: text2, icons: selectedIcons, content: { html: tempTextHtml, css: tempTextCss, js: tempTextJs } };
        onSave(newCodeData); 
        setText('');
        setText2('');
        setTempTextHtml('');
        setTempTextCss('');
        setTempTextJs('');
        setSelectedIcons([]);
        setSelectedIconsTemp([]); 
        closeModal(); 
    };

    return (
        <div>
            <Header />
            <div className='body mas-granded'>
                {isModalOpen && (
                    <div className='modal modal-mas-grande'>
                        <dialog open className="sape oto" aria-labelledby="modal-title" aria-modal="true">
                            <h1 id='modal-title' className='modal-title-2'>Ingrese titulo del código</h1>
                            <div className="text-input">
                                <input
                                    type="text"
                                    value={tempText}
                                    onChange={handleChange}
                                    maxLength={20}
                                    className='modal-input'
                                    placeholder="Ingrese título"
                                    required
                                />
                                <h1 className='modal-title-2'>Proporcione una breve descripción</h1>
                                <textarea
                                    value={tempText2}
                                    onChange={handleChange2}
                                    maxLength={200}
                                    className='area-title'
                                    placeholder="Proporcione descripción (opcional)"
                                />
                            </div>
                            <h1 className='modal-title-2'>Seleccionar tipo (máximo 2)</h1>
                            <div className='buttons-dialog'>
                                <div className='checkbox-group'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handleCheckboxChange(e, 'html')}
                                        />
                                        <span><FaHtml5 className='icon-html' /></span>
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handleCheckboxChange(e, 'css')}
                                        />
                                        <span><FaCss3Alt className='icon-css' /></span>
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handleCheckboxChange(e, 'js')}
                                        />
                                        <span><FaJs className='icon-js' /></span>
                                    </label>
                                </div>
                            </div>
                            <button className="boton-dialog" onClick={handleApplyChanges}>Aplicar</button>
                        </dialog>
                    </div>
                )}
                <div className='creating-code-box'>
                    <div>
                        <h1 className='title'>{text || ""}</h1>
                        <div className='description-area'>
                            <p className='description'>{text2 || ""}</p>
                        </div>
                        <div className='selected-icons'>
                            {selectedIcons.includes('html') && (
                                <div>
                                    <FaHtml5 className='icon-html' />
                                    <textarea
                                        placeholder='Escribe algo sobre HTML5...' 
                                        className='area-title' 
                                        value={tempTextHtml}
                                        onChange={handleChangeHtml}
                                    
                                    />
                                </div>
                            )}
                            {selectedIcons.includes('css') && (
                                <div>
                                    <FaCss3Alt className='icon-css' />
                                    <textarea 
                                        placeholder='Escribe algo sobre CSS3...' 
                                        className='area-title' 
                                        value={tempTextCss}
                                        onChange={handleChangeCss}/>
                                </div>
                            )}
                            {selectedIcons.includes('js') && (
                                <div>
                                    <FaJs className='icon-js' />
                                    <textarea 
                                        placeholder='Escribe algo sobre JavaScript...' 
                                        className='area-title' 
                                        value={tempTextJs}
                                        onChange={handleChangeJs}
                                        />
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <Link to="/create-code"><button className='get-started' onClick={handleSave}>Guardar</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreatingCode;
