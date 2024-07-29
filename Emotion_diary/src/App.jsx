import { useReducer, useRef, createContext, useEffect, useState } from 'react';
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

function reducer(state, action) {
    let nextState;
    switch (action.type) {
        case 'INIT':
            return action.data;
        case 'CREATE': {
            nextState = [action.data, ...state];
            break;
        }

        case 'UPDATE': {
            nextState = state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
            break;
        }

        case 'DELETE': {
            nextState = state.filter((item) => String(item.id) !== String(action.id));
            break;
        }
        default:
            return state;
    }
    localStorage.setItem('diary', JSON.stringify(nextState));
    return nextState;
}
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();
function App() {
    //data statue in the APP.jsx? we want to use the data in the every page
    //give and take data among components use props / context. It's one way from the parent to children
    //Data
    const [isLoading, setIsLoading] = useState(true);
    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    useEffect(() => {
        const storedData = localStorage.getItem('diary');
        if (!storedData) {
            setIsLoading(false);
            return;
        }
        const parsedData = JSON.parse(storedData);
        if (!Array.isArray(parsedData)) {
            setIsLoading(false);
            return;
        }
        let maxId = 0;
        parsedData.forEach((item) => {
            if (Number(item.id) > maxId) {
                maxId = Number(item.id);
            }
        });
        idRef.current = maxId + 1;

        dispatch({
            type: 'INIT',
            data: parsedData,
        });
        setIsLoading(false);
    }, []);

    /* LocalStorage */
    //localStorage.setItem('test', 'hello');
    //localStorage.setItem('person', JSON.stringify({ name: 'Gyuwon' }));

    localStorage.getItem;
    /* Action Object */
    //Add diary
    const createDiary = (createdDate, emotionId, content) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                createdDate,
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
    if (isLoading) {
        return <div>Data is loading ...</div>;
    }
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
