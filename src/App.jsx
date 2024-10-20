import React, { useState } from 'react';
import SegundaInterface from './segunda-interface/SegundaInterface';
import PrimerInterface from './primer-interface/PrimerInterface';
import { Route, Routes } from 'react-router-dom';
import Contact from './Header/contact/Contact';
import Question from './Header/question/Question';
import CreatingCode from './segunda-interface/crear-codigo/crear-codigo/CreatingCode';
import CrearCodigo from './segunda-interface/crear-codigo/CrearCodigo';
import CodeDisplay from './segunda-interface/crear-codigo/crear-codigo/saved-content/CodeDisplay';
import './app.css';



function App() {
    const [savedCodes, setSavedCodes] = useState([]); 
    const handleSave = (newCodeData) => {
        setSavedCodes([...savedCodes, newCodeData]); 
    };

    return (
        <>
            <Routes>
                <Route path='/home' element={<PrimerInterface />} />
                <Route path='/' element={<PrimerInterface />} />
                <Route path='/app' element={<SegundaInterface />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/info' element={<Question />} />
                <Route path='/crafting' element={<CreatingCode onSave={handleSave} />} />
                <Route path="/create-code" element={<CrearCodigo codes={savedCodes} />} />
                <Route path="/code-display/:codeId" element={<CodeDisplay codes={savedCodes} />} /> 
                
            </Routes>
        </>
    );
}

export default App;
