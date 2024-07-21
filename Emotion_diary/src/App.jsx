import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/NotFound';
import './App.css';

//1. "/" get every dirary
//2. "/new" write new dirary
//3. /dirary : detail
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
    );
}

export default App;
