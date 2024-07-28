import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext, useEffect, useState } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';
const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { deleteDiary, editDirary } = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    useEffect(() => {
        const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));
        if (!currentDiaryItem) {
            window.alert('Not exist diary');
            nav('/', { replace: true });
        }
        setCurDiaryItem(currentDiaryItem);
    }, [params.id, data]);
    //Current diary
    const onClickDelete = () => {
        if (window.confirm('Are you sure to delete a diary?')) {
            deleteDiary(params.id);
            nav('/', { replace: true });
        }
    };
    const onSubmit = (input) => {
        if (window.confirm('Are you sure to edit your diary?'))
            editDirary(params.id, input.createdDate.getTime(), input.emotionId, input.content);
        nav('/', { replace: true });
    };

    return (
        <div>
            <Header
                title={'Edit the diary'}
                leftChild={<Button onClick={() => nav(-1)} text={'< Back'} />}
                rightChild={<Button onClick={onClickDelete} text={'Delete'} type={'Negative'} />}
            />
            <Editor onSubmit={onSubmit} initData={curDiaryItem} />
        </div>
    );
};
export default Edit;
