import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
const New = () => {
    const { createDiary } = useContext(DiaryDispatchContext);
    const nav = useNavigate();
    const onSubmit = (input) => {
        createDiary(input.createdDate.getTime(), input.emotionId, input.content);

        //Create a diary and prevent go back
        nav('/', { replace: true });
    };
    return (
        <div>
            <Header title={'Write a new Diray'} leftChild={<Button text={'< Back'} onClick={() => nav(-1)} />} />
            <Editor onSubmit={onSubmit} />
        </div>
    );
};

export default New;
