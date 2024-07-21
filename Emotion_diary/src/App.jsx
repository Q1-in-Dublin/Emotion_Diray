import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/NotFound';
import { getEmotionImage } from './util/get-emotion-image';
import Button from './components/Button';
import Header from './components/Header';
import './App.css';

//1. "/" get every dirary
//2. "/new" write new dirary
//3. /dirary : detail
function App() {
    const nav = new useNavigate();
    const onClickButton = () => {
        nav('/new');
    };
    return (
        <>
            <Header title={'Header'} leftChild={<Button text={'Left'} />} rightChild={<Button text={'Right'} />} />
            <Button
                text={'123'}
                onClick={() => {
                    console.log('123click');
                }}
            />
            <Button
                text={'123'}
                type={'Positive'}
                onClick={() => {
                    console.log('123click');
                }}
            />
            <Button
                text={'123'}
                type={'Negative'}
                onClick={() => {
                    console.log('123click');
                }}
            />

            <div>
                <img src={getEmotionImage(1)} alt="" />
                <img src={getEmotionImage(2)} alt="" />
                <img src={getEmotionImage(3)} alt="" />
                <img src={getEmotionImage(4)} alt="" />
                <img src={getEmotionImage(5)} alt="" />
            </div>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/new'}>New</Link>
                <Link to={'/diary'}>Diary</Link>
            </div>
            <button onClick={onClickButton}>Move to New Page</button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </>
    );
}

export default App;
