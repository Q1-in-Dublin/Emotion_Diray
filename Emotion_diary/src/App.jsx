import { useReducer, useRef, createContext } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/NotFound';
import Edit from './pages/Edit';
import { getEmotionImage } from './util/get-emotion-image';
import Button from './components/Button';
import Header from './components/Header';
import './App.css';

//1. "/" get every dirary
//2. "/new" write new dirary
//3. /dirary : detail
// 4. "/edit" : edit a dirary

const mockData = [
    { id: 1, createdDate: new Date('07-22-2024').getTime(), emotionId: 1, content: 'Diary no1' },
    { id: 2, createdDate: new Date('07-21-2024').getTime(), emotionId: 4, content: 'Diary no2' },
    { id: 3, createdDate: new Date('06-21-2024').getTime(), emotionId: 3, content: 'Diary no3' },
];
function reducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return [action.data, ...state];
        case 'UPDATE':
            return state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
        case 'DELETE':
            return state.filter((item) => String(item.id) !== String(action.id));
        default:
            return state;
    }
}
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();
function App() {
    //data statue in the APP.jsx? we want to use the data in the every page
    //give and take data among components use props / context. It's one way from the parent to children

    //Data
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    //Action Object
    //Add diary
    const createDiary = (createDate, emotionId, content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                createDate,
                emotionId,
                content,
            },
        });
    };
    const editDirary = (id, createdDate, emotionId, content) => {
        dispatch({
            type: 'UPDATE',
            data: { id, createdDate, emotionId, content },
        });
    };
    const deleteDiary = (id) => {
        dispatch({ type: 'DELETE', id });
    };
    return (
        <>
            {/* To provide data states to the components for preventing Props Drilling  Props drilling?=> don't pass it just give it directly*/}
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{ createDiary, editDirary, deleteDiary }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new" element={<New />} />
                        <Route path="/diary/:id" element={<Diary />} />
                        <Route path="/edit/:id" element={<Edit />} />
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App;
